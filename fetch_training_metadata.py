import json
import re
import time
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import requests

ROOT = Path(__file__).resolve().parent
source = json.loads((ROOT / "training_source.json").read_text(encoding="utf-8"))

def video_id(url):
    parsed = urlparse(url)
    if "youtu.be" in parsed.netloc:
        return parsed.path.strip("/")
    if "/embed/" in parsed.path:
        return parsed.path.split("/embed/", 1)[1].split("/", 1)[0]
    return parse_qs(parsed.query).get("v", [""])[0]

records = []
seen = set()
for item in source["videos"]:
    identifier = video_id(item["url"])
    if not identifier or identifier in seen:
        continue
    seen.add(identifier)
    watch_url = f"https://www.youtube.com/watch?v={identifier}"
    title = item["title"]
    author = "PreXion"
    try:
        response = requests.get("https://www.youtube.com/oembed", params={"url": watch_url, "format": "json"}, timeout=15)
        response.raise_for_status()
        metadata = response.json()
        title = metadata.get("title") or title
        author = metadata.get("author_name") or author
    except Exception:
        pass
    records.append({
        "id": identifier,
        "title": re.sub(r"\s+", " ", title).strip(),
        "author": author,
        "embedUrl": f"https://www.youtube-nocookie.com/embed/{identifier}",
        "watchUrl": watch_url,
        "thumbnail": f"https://i.ytimg.com/vi/{identifier}/hqdefault.jpg",
    })
    time.sleep(0.08)

(ROOT / "training_videos_metadata.json").write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"unique_videos": len(records), "videos": records}, ensure_ascii=False, indent=2))
