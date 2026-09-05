import json
import re
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parent


def load_json(name):
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def clean_text(html):
    soup = BeautifulSoup(html or "", "html.parser")
    for node in soup(["script", "style", "noscript"]):
        node.decompose()
    text = soup.get_text("\n", strip=True)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def absolute_links(html):
    soup = BeautifulSoup(html or "", "html.parser")
    links = []
    for tag in soup.find_all(["a", "img", "source"]):
        value = tag.get("href") or tag.get("src") or tag.get("srcset")
        if not value:
            continue
        for candidate in str(value).split(","):
            url = candidate.strip().split(" ")[0]
            if url.startswith("http"):
                links.append(url)
    return sorted(set(links))


def classify(url, title, text):
    slug = urlparse(url).path.strip("/")
    haystack = f"{slug} {title} {text[:1500]}".lower()
    if any(term in haystack for term in ["privacy policy", "accessibility statement"]):
        return "legal"
    if any(term in slug for term in ["thank-you", "success", "subscription-success"]):
        return "thank-you"
    if any(term in slug for term in ["download", "ebook", "assets"]):
        return "resource"
    if any(term in slug for term in ["career", "apply-job"]):
        return "careers"
    if any(term in slug for term in ["event", "conference", "meeting", "dentistry-2026", "midwinter"]):
        return "event"
    if any(term in slug for term in ["support", "training"]):
        return "support"
    if any(term in slug for term in ["contact", "request-a-demo", "specialist", "sales-info", "distributor"]):
        return "sales"
    if any(term in slug for term in ["prexion-3d", "excelsior", "evolve", "explorer", "expedition", "imaging-products", "cbct-scanner"]):
        return "product"
    if any(term in slug for term in ["application", "specialty"]):
        return "application"
    if any(term in slug for term in ["roi-calculator"]):
        return "tool"
    if any(term in slug for term in ["why-prexion", "prexion-care"]):
        return "institutional"
    return "landing-page"


def normalized_item(item, source):
    html = item.get("content", {}).get("rendered", "")
    title_html = item.get("title", {}).get("rendered", "")
    title = BeautifulSoup(title_html, "html.parser").get_text(" ", strip=True)
    text = clean_text(html)
    url = item.get("link", "")
    links = absolute_links(html)
    return {
        "id": item.get("id"),
        "source": source,
        "url": url,
        "slug": item.get("slug", ""),
        "title": title,
        "date": item.get("date", ""),
        "modified": item.get("modified", ""),
        "status": item.get("status", ""),
        "template": item.get("template", ""),
        "type": classify(url, title, text),
        "excerpt": clean_text(item.get("excerpt", {}).get("rendered", "")),
        "content_text": text,
        "all_links": links,
        "internal_links": [link for link in links if urlparse(link).netloc.endswith("prexion.com")],
        "external_links": [link for link in links if not urlparse(link).netloc.endswith("prexion.com")],
        "downloads": [link for link in links if re.search(r"\.(pdf|zip|docx?|xlsx?|pptx?)(?:$|\?)", link, re.I)],
        "images": [link for link in links if re.search(r"\.(png|jpe?g|webp|gif|svg)(?:$|\?)", link, re.I)],
    }


pages = load_json("wp_pages.json")
posts = load_json("wp_posts.json")
items = [normalized_item(item, "page") for item in pages] + [normalized_item(item, "post") for item in posts]

sitemap_urls = set(
    line.strip()
    for line in (ROOT / "legacy_urls.txt").read_text(encoding="utf-8").splitlines()
    if line.strip()
)
api_urls = {item["url"] for item in items if item["url"]}

for item in items:
    item["in_sitemap"] = item["url"] in sitemap_urls

all_urls = sorted(sitemap_urls | api_urls)
api_only = sorted(api_urls - sitemap_urls)
sitemap_only = sorted(sitemap_urls - api_urls)

(ROOT / "legacy_content_inventory.json").write_text(
    json.dumps({"items": items}, ensure_ascii=False, indent=2), encoding="utf-8"
)
(ROOT / "all_legacy_urls.txt").write_text("\n".join(all_urls) + "\n", encoding="utf-8")
(ROOT / "api_only_urls.txt").write_text("\n".join(api_only) + "\n", encoding="utf-8")
(ROOT / "sitemap_only_urls.txt").write_text("\n".join(sitemap_only) + "\n", encoding="utf-8")

counts = {}
for item in items:
    counts[item["type"]] = counts.get(item["type"], 0) + 1

summary = {
    "sitemap_urls": len(sitemap_urls),
    "api_published_items": len(items),
    "api_urls": len(api_urls),
    "all_unique_urls": len(all_urls),
    "api_only_urls": len(api_only),
    "sitemap_only_urls": len(sitemap_only),
    "content_type_counts": dict(sorted(counts.items())),
}
(ROOT / "inventory_summary.json").write_text(
    json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
)

print(json.dumps(summary, ensure_ascii=False, indent=2))
