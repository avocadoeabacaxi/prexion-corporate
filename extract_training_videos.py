import json
import re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
pages = json.loads((ROOT / "wp_pages.json").read_text(encoding="utf-8"))
page = next(item for item in pages if item.get("slug") == "training-videos")
rendered = page.get("content", {}).get("rendered", "")
soup = BeautifulSoup(rendered, "html.parser")

records = []
pending_text = []
for node in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "p", "iframe", "a"]):
    if node.name == "iframe":
        src = (node.get("src") or "").strip()
        if "youtube" not in src and "youtu.be" not in src:
            continue
        title = next((text for text in reversed(pending_text) if len(text) > 4), f"Training video {len(records) + 1}")
        records.append({"title": title, "url": src})
        pending_text = []
        continue
    if node.name == "a":
        href = (node.get("href") or "").strip()
        if "youtube" in href or "youtu.be" in href:
            title = node.get_text(" ", strip=True) or next((text for text in reversed(pending_text) if len(text) > 4), f"Training video {len(records) + 1}")
            records.append({"title": title, "url": href})
            pending_text = []
            continue
    text = re.sub(r"\s+", " ", node.get_text(" ", strip=True)).strip()
    if text:
        pending_text.append(text)
        pending_text = pending_text[-5:]

payload = {
    "page_title": BeautifulSoup(page.get("title", {}).get("rendered", "Training Videos"), "html.parser").get_text(" ", strip=True),
    "source_url": page.get("link"),
    "html_characters": len(rendered),
    "video_count": len(records),
    "videos": records,
}
(ROOT / "training_source.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(payload, ensure_ascii=False, indent=2))
