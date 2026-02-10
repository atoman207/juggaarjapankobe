#!/usr/bin/env python3
"""
Column page image scraper for https://juggaarjapankobe.com/column/
- Scrapes images from /html/body/main/section[2]/div/div[1] (article list).
- 5 pagination pages (target 50 images total).
- Registry: src/assets/image/column/ — column_01.jpg, column_02.jpg, ... column_50.jpg

Run from project root: python .cursor/rules/column.py
Requires: pip install requests beautifulsoup4
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Install dependencies: pip install requests beautifulsoup4")
    sys.exit(1)

BASE_URL = "https://juggaarjapankobe.com/column/"
OUT_DIR = Path(__file__).resolve().parent.parent.parent / "src" / "assets" / "image" / "column"
SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ja,en;q=0.9",
})


def get_page_url(page: int) -> str:
    base = BASE_URL.rstrip("/")
    if page <= 1:
        return base + "/"
    # WordPress-style pagination: ?paged=2, ?paged=3, ...
    return base + "/" + f"?paged={page}"


def extract_image_urls(soup: BeautifulSoup) -> list[str]:
    urls = []
    # Articles: .entry_body .inner_item_img img or article img
    for article in soup.select("article"):
        img = article.select_one(".inner_item_img img, .entry_body img, .inner_item_img a img")
        if img and img.get("src"):
            urls.append(img["src"])
    # Fallback: any img in main content area
    if not urls:
        main = soup.select_one("main")
        if main:
            for img in main.select("img[src]"):
                src = img["src"].strip()
                if "/upload_data/" in src or src.endswith((".jpg", ".jpeg", ".png", ".webp")):
                    urls.append(src)
    return urls


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    all_urls = []
    for page in range(1, 6):
        url = get_page_url(page)
        try:
            r = SESSION.get(url, timeout=15)
            r.raise_for_status()
        except Exception as e:
            print(f"Page {page} ({url}): {e}")
            continue
        soup = BeautifulSoup(r.text, "html.parser")
        urls = extract_image_urls(soup)
        for u in urls:
            all_urls.append(urljoin(BASE_URL, u))
        print(f"Page {page}: found {len(urls)} images (total so far: {len(all_urls)})")

    # Deduplicate preserving order, then take first 50
    seen = set()
    unique = []
    for u in all_urls:
        if u not in seen:
            seen.add(u)
            unique.append(u)

    for i, img_url in enumerate(unique[:50], start=1):
        name = f"column_{i:02d}.jpg"
        path = OUT_DIR / name
        try:
            r = SESSION.get(img_url, timeout=15)
            r.raise_for_status()
            path.write_bytes(r.content)
            print(f"Saved {name}")
        except Exception as e:
            print(f"Failed {name}: {e}")

    print(f"Done. Images in {OUT_DIR}")


if __name__ == "__main__":
    main()
