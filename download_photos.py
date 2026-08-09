#!/usr/bin/env python3
"""Download openly licensed wildlife photographs from Wikimedia Commons.

Run from the project root while online:
    python3 download_photos.py

The script searches Commons for each species, accepts only files with an
explicitly recognised free/public-domain licence, downloads a 1600px-ish
thumbnail, and updates species.js to point at the local image. It also writes
PHOTO_CREDITS.md.
"""
import json,re,time,html
from pathlib import Path
from urllib.parse import quote
import urllib.request, urllib.parse

ROOT=Path(__file__).resolve().parent
IMG=ROOT/'images'; IMG.mkdir(exist_ok=True)
API='https://commons.wikimedia.org/w/api.php'
UA='SafariWildlifeGuide/1.0 (personal offline field guide)'
ALLOWED={
 'CC0','Public domain','CC BY','CC BY-SA','CC BY 2.0','CC BY 3.0','CC BY 4.0',
 'CC BY-SA 2.0','CC BY-SA 3.0','CC BY-SA 4.0','CC BY 2.1','CC BY-SA 2.1'
}

def api(params):
    q=urllib.parse.urlencode({'format':'json','formatversion':2,**params})
    req=urllib.request.Request(API+'?'+q,headers={'User-Agent':UA})
    with urllib.request.urlopen(req,timeout=30) as r:return json.load(r)

def species():
    txt=(ROOT/'species.js').read_text(encoding='utf8')
    out=[]
    # Works with the JSON-style delivered species database.
    for m in re.finditer(r'"id"\s*:\s*(\d+).*?"name"\s*:\s*"([^"]+)".*?"scientific"\s*:\s*"([^"]+)".*?"image"\s*:\s*"([^"]+)"',txt,re.S):
        out.append(dict(id=int(m.group(1)),name=m.group(2),scientific=m.group(3),image=m.group(4)))
    return out

def licence_ok(info):
    # Commons machine-readable licence fields vary, so inspect both extmetadata and page text.
    em=info.get('extmetadata') or {}
    vals=[]
    for k in ('LicenseShortName','UsageTerms','Copyrighted'):
        if k in em: vals.append(html.unescape(em[k].get('value','')))
    s=' | '.join(vals)
    return any(x.lower() in s.lower() for x in ALLOWED)

def find_photo(s):
    queries=[s['scientific'],s['name']+' Africa',s['name']]
    for q in queries:
        data=api({'action':'query','generator':'search','gsrsearch':q+' filetype:bitmap','gsrnamespace':6,'gsrlimit':8,
                  'prop':'imageinfo','iiprop':'url|mime|size|extmetadata','iiurlwidth':1600})
        pages=data.get('query',{}).get('pages',[])
        for p in pages:
            ii=(p.get('imageinfo') or [{}])[0]
            mime=ii.get('mime','')
            if not mime.startswith('image/'): continue
            if not licence_ok(ii): continue
            url=ii.get('thumburl') or ii.get('url')
            if not url: continue
            return p.get('title',''),url,ii.get('extmetadata') or {}
    return None

def slug(s):
    return re.sub(r'[^a-z0-9]+','_',s.lower()).strip('_')

rows=[]; sp=species()
print(f'Found {len(sp)} species.')
for i,s in enumerate(sp,1):
    print(f'[{i}/{len(sp)}] {s["name"]} ...',end=' ',flush=True)
    try:r=find_photo(s)
    except Exception as e:
        print('ERROR',e); rows.append((s,None)); continue
    if not r: print('no suitable free image'); rows.append((s,None)); continue
    title,url,em=r
    ext='.jpg'
    mime=''
    # keep jpg/png/webp based on URL; JPEG is preferred for broad iPhone support.
    if '.png' in url.lower(): ext='.png'
    elif '.webp' in url.lower(): ext='.webp'
    path=IMG/f'{s["id"]:03d}_{slug(s["name"])}{ext}'
    try:
        req=urllib.request.Request(url,headers={'User-Agent':UA})
        with urllib.request.urlopen(req,timeout=60) as r0:path.write_bytes(r0.read())
        print('OK',title)
        rows.append((s,(title,url,em,path)))
    except Exception as e:
        print('download failed',e); rows.append((s,None))
    time.sleep(.15)

# Replace image paths only for successfully downloaded photos.
txt=(ROOT/'species.js').read_text(encoding='utf8')
for s,r in rows:
    if not r: continue
    title,url,em,path=r
    old=s['image']; rel='images/'+path.name
    txt=txt.replace('"image": "'+old+'"','"image": "'+rel+'"',1)
(ROOT/'species.js').write_text(txt,encoding='utf8')

with (ROOT/'PHOTO_CREDITS.md').open('w',encoding='utf8') as f:
    f.write('# Photo credits\n\nImages downloaded from Wikimedia Commons by `download_photos.py`.\n\n')
    for s,r in rows:
        f.write(f'## {s["name"]}\n')
        if not r:
            f.write('- Status: no verified free photograph downloaded; local fallback retained.\n\n'); continue
        title,url,em,path=r
        author=html.unescape((em.get('Artist') or {}).get('value','Unknown'))
        lic=html.unescape((em.get('LicenseShortName') or {}).get('value','Unknown'))
        f.write(f'- Local file: `{path.relative_to(ROOT)}`\n- Commons file: {title}\n- Photographer/author: {re.sub("<[^>]+>","",author)}\n- Licence: {lic}\n- Source page: https://commons.wikimedia.org/wiki/{quote(title.replace(" ","_"))}\n- Direct image: {url}\n\n')

ok=sum(1 for _,r in rows if r)
print(f'Finished: {ok}/{len(sp)} photographs downloaded.')
