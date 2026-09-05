import csv
import html
import json
import re
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parent
CLIENT_DATA = ROOT / "client" / "src" / "data"
ASSET_MAP_PATH = ROOT / "legacy_asset_map.json"
ASSET_MAP = json.loads(ASSET_MAP_PATH.read_text(encoding="utf-8")) if ASSET_MAP_PATH.exists() else {}


def localize(url):
    return ASSET_MAP.get(url, url)


def clean(value):
    value = html.unescape(str(value or ""))
    value = re.sub(r"[^.!?]*(?:PreXion\s*3D\s*Elite|PreXion\s+Elite)[^.!?]*(?:[.!?]|$)", " ", value, flags=re.I)
    value = re.sub(r"\bElite\b", "", value, flags=re.I)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def clean_summary(value):
    value = re.sub(r"https?://\S+", "", str(value or ""))
    value = re.sub(r"[#*_`>\[\]()]", " ", value)
    return clean(value)


def path_for(url):
    path = urlparse(url).path.rstrip("/")
    return path or "/"


def content_blocks(rendered):
    soup = BeautifulSoup(rendered or "", "html.parser")
    for node in soup(["script", "style", "noscript"]):
        node.decompose()
    blocks = []
    seen = set()
    for node in soup.find_all(["h1", "h2", "h3", "h4", "p", "li", "blockquote"]):
        text = clean(node.get_text(" ", strip=True))
        if len(text) < 2:
            continue
        fingerprint = re.sub(r"\W+", "", text.lower())
        if fingerprint in seen:
            continue
        seen.add(fingerprint)
        kind = "heading" if node.name in {"h1", "h2", "h3", "h4"} else "quote" if node.name == "blockquote" else "list" if node.name == "li" else "paragraph"
        blocks.append({"kind": kind, "text": text})
    return blocks


def markdown_lines(value):
    urls = re.findall(r"https?://[^\s)]+", value or "")
    return sorted(set(url.rstrip(".,") for url in urls))


audit = json.loads((ROOT / "audit_prexion_legacy_urls.json").read_text(encoding="utf-8"))["results"]
audit_by_url = {entry["output"].get("url") or entry["input"]: entry["output"] for entry in audit if entry.get("output")}

pages = json.loads((ROOT / "wp_pages.json").read_text(encoding="utf-8"))
posts = json.loads((ROOT / "wp_posts.json").read_text(encoding="utf-8"))
wp_by_url = {item.get("link"): item for item in pages + posts if item.get("link")}

known_targets = {
    "/": "/",
    "/why-prexion": "/about",
    "/imaging-products": "/product",
    "/evolve-2d-pan": "/product/evolve-2d",
    "/discover-the-evolve-2d-pan": "/product/evolve-2d",
    "/prexion-3d-evolve": "/product/evolve-3d",
    "/prexion-excelsior-mid": "/product/excelsior-mid",
    "/prexion-excelsior-max-lfov": "/product/excelsior-max",
    "/prexion-excelsior-endo": "/product/excelsior-endo",
    "/evolve-scan-intraoral-scanner": "/product/evolve-scan",
    "/prexion-3d-intraoral-sensor": "/product/evolve-sensor",
    "/discover-the-prexion-3d-intraoral-sensor": "/product/evolve-sensor",
    "/evolve-x-ray-hand-held-dental-x-rays": "/product/evolve-xray",
    "/applications-by-specialty": "/applications-by-specialty",
    "/education-and-support": "/support",
    "/remote-support": "/support/remote",
    "/training-videos": "/support/training",
    "/news-2": "/news",
    "/category/blog": "/news",
    "/upcoming_events": "/events",
    "/careers-at-prexion": "/careers",
    "/apply-job": "/careers/apply",
    "/sales-info": "/contact",
    "/contact": "/contact",
    "/request-a-demo": "/contact",
    "/product-specialists": "/product-specialists",
    "/distributor-locations": "/distributors",
    "/roi-calculator": "/roi-calculator",
    "/downloadable-assets": "/resources",
    "/download-ebook-library": "/resources",
    "/privacy-policy": "/privacy-policy",
    "/accessibility-statement": "/accessibility-statement",
}

legacy_pages = {}
migration_rows = []

for url in sorted(audit_by_url):
    audit_item = audit_by_url[url]
    wp_item = wp_by_url.get(url)
    route = path_for(url)
    target = known_targets.get(route, route)
    if audit_item.get("content_type") == "product" and target == route:
        target = "/product"
    rendered = wp_item.get("content", {}).get("rendered", "") if wp_item else ""
    title = clean(BeautifulSoup(wp_item.get("title", {}).get("rendered", ""), "html.parser").get_text(" ", strip=True)) if wp_item else clean(audit_item.get("title"))
    blocks = content_blocks(rendered)
    if not blocks:
        summary = audit_item.get("sections_markdown", "")
        for raw in summary.splitlines():
            text = clean(re.sub(r"^#+\s*|^-\s*", "", raw))
            if text:
                blocks.append({"kind": "heading" if raw.lstrip().startswith("#") else "paragraph", "text": text})

    links = []
    images = []
    if rendered:
        soup = BeautifulSoup(rendered, "html.parser")
        for node in soup.find_all(["a", "iframe"]):
            href = (node.get("href") or node.get("src") or "").strip()
            if (href.startswith("http") or href.startswith("mailto:") or href.startswith("tel:")) and "elite" not in href.lower():
                label = clean(node.get_text(" ", strip=True)) or clean(node.get("title", "")) or ("Embedded video" if node.name == "iframe" else href)
                links.append({"label": label, "url": href})
        for node in soup.find_all("img", src=True):
            src = node.get("src", "").strip()
            if src.startswith("http") and "logo" not in src.lower() and "elite" not in src.lower():
                images.append({"alt": clean(node.get("alt", "")) or title, "url": localize(src)})

    downloads = sorted(set(localize(url) for url in markdown_lines(audit_item.get("downloads", "")) + [item["url"] for item in links if re.search(r"\.(pdf|zip|docx?|xlsx?|pptx?)(?:$|\?)", item["url"], re.I)]))
    external = sorted(set(markdown_lines(audit_item.get("external_links", ""))))

    legacy_pages[route] = {
        "sourceUrl": url,
        "route": route,
        "canonicalTarget": target,
        "title": title or clean(audit_item.get("title")),
        "type": audit_item.get("content_type", "page"),
        "relevance": audit_item.get("current_relevance", "medium"),
        "summary": clean_summary(audit_item.get("sections_markdown", ""))[:720],
        "blocks": blocks,
        "callsToAction": clean(audit_item.get("calls_to_action", "")),
        "downloads": downloads,
        "externalLinks": external,
        "links": links[:40],
        "images": images[:12],
        "migrationAction": audit_item.get("migration_action", "create"),
        "notes": clean(audit_item.get("notes_pt", "")),
    }

    if route == target:
        implementation = "dedicated legacy route"
    elif target in {"/", "/about", "/product", "/support", "/contact"} or target.startswith("/product/"):
        implementation = "canonical modern page + preserved legacy route"
    else:
        implementation = "modern grouped page + preserved legacy route"

    migration_rows.append({
        "source_url": url,
        "source_path": route,
        "title": title or clean(audit_item.get("title")),
        "content_type": audit_item.get("content_type", "page"),
        "relevance": audit_item.get("current_relevance", "medium"),
        "recommended_action": audit_item.get("migration_action", "create"),
        "canonical_target": target,
        "implementation": implementation,
        "content_blocks": len(blocks),
        "downloads": len(downloads),
        "external_links": len(external),
        "migration_status": "ready-for-implementation",
    })

with (ROOT / "migration_map.csv").open("w", encoding="utf-8", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=migration_rows[0].keys())
    writer.writeheader()
    writer.writerows(migration_rows)

(ROOT / "migration_map.json").write_text(json.dumps(migration_rows, ensure_ascii=False, indent=2), encoding="utf-8")

ts = """/**\n * Design philosophy: Precision in Motion — complete legacy content registry preserving every public PreXion URL.\n */\n\nexport type LegacyBlock = { kind: \"heading\" | \"paragraph\" | \"list\" | \"quote\"; text: string };\nexport type LegacyPage = {\n  sourceUrl: string; route: string; canonicalTarget: string; title: string; type: string; relevance: string; summary: string;\n  blocks: LegacyBlock[]; callsToAction: string; downloads: string[]; externalLinks: string[];\n  links: Array<{ label: string; url: string }>; images: Array<{ alt: string; url: string }>; migrationAction: string; notes: string;\n};\n\nexport const legacyPages: Record<string, LegacyPage> = """ + json.dumps(legacy_pages, ensure_ascii=False, indent=2) + ";\n"
(CLIENT_DATA / "legacyPages.ts").write_text(ts, encoding="utf-8")

print(f"Mapped {len(migration_rows)} URLs")
print(f"Generated {sum(len(page['blocks']) for page in legacy_pages.values())} structured content blocks")
print(f"Preserved {sum(len(page['downloads']) for page in legacy_pages.values())} download references")
print(f"Preserved {sum(len(page['externalLinks']) for page in legacy_pages.values())} external link references")
