const CACHE_VERSION='safari-guide-v5';
const CORE=['./','./index.html','./styles.css','./app.js','./species.js','./manifest.json'];
const CACHE_NAMES=[CACHE_VERSION,'safari-guide-v4','safari-guide-v3'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_VERSION);
    // Cache the shell only here. The app's explicit Offline Download step
    // verifies and stores every photograph before declaring Safari Mode ready.
    await Promise.all(CORE.map(async url=>{try{await cache.add(url)}catch{}}));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keep=new Set([CACHE_VERSION]);
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('safari-guide-')&&!keep.has(k)).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_VERSION);
    const cached=await cache.match(req,{ignoreSearch:true});
    if(cached)return cached;
    try{
      const response=await fetch(req);
      if(response.ok && (req.destination==='document'||req.destination==='script'||req.destination==='style'||req.destination==='image'||req.destination==='font'||req.destination==='manifest')){
        cache.put(req,response.clone()).catch(()=>{});
      }
      return response;
    }catch{
      // Navigation fallback to the cached app shell when offline.
      if(req.mode==='navigate'){
        const shell=await cache.match('./index.html');
        if(shell)return shell;
      }
      return new Response('Offline resource unavailable',{status:503,headers:{'Content-Type':'text/plain'}});
    }
  })());
});
