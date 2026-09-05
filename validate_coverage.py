import csv
import json
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent


def normalize_path(url):
    path = urlparse(url).path.rstrip("/")
    return path or "/"


legacy_urls = {
    line.strip()
    for line in (ROOT / "legacy_urls.txt").read_text(encoding="utf-8").splitlines()
    if line.strip()
}
migration = json.loads((ROOT / "migration_map.json").read_text(encoding="utf-8"))
content = json.loads((ROOT / "legacy_content_inventory.json").read_text(encoding="utf-8"))["items"]
asset_map = json.loads((ROOT / "legacy_asset_map.json").read_text(encoding="utf-8"))
missing_assets = {
    line.strip().rstrip(")")
    for line in (ROOT / "legacy_asset_missing.txt").read_text(encoding="utf-8").splitlines()
    if line.strip()
}

map_urls = {row["source_url"] for row in migration}
map_paths = {row["source_path"] for row in migration}
content_urls = {item["url"] for item in content}
sitemap_only = legacy_urls - content_urls

issues = []
for row in migration:
    if row["content_blocks"] <= 0:
        issues.append(f"No content blocks: {row['source_url']}")
    if row["content_type"] == "product" and not row["canonical_target"].startswith("/product"):
        issues.append(f"Product outside /product: {row['source_url']} -> {row['canonical_target']}")

if legacy_urls != map_urls:
    for url in sorted(legacy_urls - map_urls):
        issues.append(f"Missing from migration map: {url}")
    for url in sorted(map_urls - legacy_urls):
        issues.append(f"Unexpected in migration map: {url}")

report = {
    "legacy_urls": len(legacy_urls),
    "mapped_urls": len(map_urls),
    "mapped_paths": len(map_paths),
    "wordpress_content_items": len(content),
    "sitemap_only_routes": sorted(sitemap_only),
    "content_blocks": sum(row["content_blocks"] for row in migration),
    "download_references": sum(row["downloads"] for row in migration),
    "external_link_references": sum(row["external_links"] for row in migration),
    "localized_media_assets": len(asset_map),
    "unresolved_unique_assets": len(missing_assets),
    "product_routes_outside_product": sum(1 for row in migration if row["content_type"] == "product" and not row["canonical_target"].startswith("/product")),
    "issues": issues,
    "coverage_ok": not issues and len(legacy_urls) == len(map_urls) == len(map_paths),
}

(ROOT / "coverage_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

with (ROOT / "coverage_report.csv").open("w", encoding="utf-8", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=["source_url", "source_path", "title", "content_type", "canonical_target", "content_blocks", "downloads", "external_links", "migration_status"])
    writer.writeheader()
    for row in migration:
        writer.writerow({key: row[key] for key in writer.fieldnames})

print(json.dumps(report, ensure_ascii=False, indent=2))
