import urllib.request
import json
import re
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

urls = [
    "https://www.imdb.com/title/tt4253316/",
    "https://www.imdb.com/title/tt6662734/",
    "https://www.imdb.com/title/tt1873562/",
    "https://www.imdb.com/title/tt2910362/",
    "https://www.imdb.com/title/tt0093464/",
    "https://www.imdb.com/title/tt0336218/",
    "https://www.imdb.com/title/tt0456287/",
    "https://www.imdb.com/title/tt4080012/"
]

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
}
results = []
for url in urls:
    req = urllib.request.Request(url, headers=req_headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
        if match:
             data = json.loads(match.group(1))
             results.append(data)
        else:
             results.append({"error": "No ld+json found for " + url})
    except Exception as e:
        results.append({"error": str(e), "url": url})

print(json.dumps(results, ensure_ascii=False, indent=2))
