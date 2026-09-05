import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent

original_to_local = {}
for line in (ROOT / "legacy_asset_manifest.tsv").read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    original, local = line.split("\t", 1)
    original_to_local[original] = local

local_to_storage = {}
pattern = re.compile(r"^\[SUCCESS\]\s+(.+?)\s+->\s+(.+)$")
for line in (ROOT / "legacy_upload_output.txt").read_text(encoding="utf-8").splitlines():
    match = pattern.match(line.strip())
    if match:
        local_to_storage[match.group(1)] = match.group(2)

asset_map = {
    original: local_to_storage[local]
    for original, local in original_to_local.items()
    if local in local_to_storage
}

(ROOT / "legacy_asset_map.json").write_text(
    json.dumps(asset_map, ensure_ascii=False, indent=2), encoding="utf-8"
)

all_urls = {
    line.strip()
    for line in (ROOT / "legacy_image_urls.txt").read_text(encoding="utf-8").splitlines()
    if line.strip()
}
missing = sorted(all_urls - set(asset_map))
(ROOT / "legacy_asset_missing.txt").write_text("\n".join(missing) + ("\n" if missing else ""), encoding="utf-8")

print(f"Mapped assets: {len(asset_map)}")
print(f"Unresolved assets: {len(missing)}")
