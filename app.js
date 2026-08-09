const $ = (s,root=document)=>root.querySelector(s);
const view = document.querySelector('#view');
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const places = ['All','Victoria Falls','Chobe','Khwai','Okavango'];
const groups = [['All','All'],['mammal','Mammals'],['bird','Birds'],['reptile','Reptiles'],['amphibian','Amphibians']];
const seenKey='safariSeenV3';
let route=location.hash.slice(1)||'home';
let place='All', group='All', query='';
let identifyState={step:0, answers:{}};

const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const readSeen=()=>{try{return JSON.parse(localStorage.getItem(seenKey)||'{}')}catch{return {}}};
const saveSeen=o=>localStorage.setItem(seenKey,JSON.stringify(o));
const isSeen=id=>!!readSeen()[id];
const pct=(a,b)=>b?Math.round(a/b*100):0;

function groupLabel(g){return ({mammal:'Mammal',bird:'Bird',reptile:'Reptile',amphibian:'Amphibian'})[g]||g}
function locationLabel(p){return p==='All'?'All locations':p}
function speciesImage(s){return s.image}
function card(s){
  const seen=isSeen(s.id);
  return `<article class="species-card" data-id="${s.id}">
    <div class="photo-wrap"><img loading="lazy" src="${esc(speciesImage(s))}" alt="${esc(s.name)}"></div>
    <div class="species-body">
      <button class="seen ${seen?'yes':''}" data-seen="${s.id}" aria-label="${seen?'Unmark':'Mark'} ${esc(s.name)} as seen">${seen?'✓ Seen':'○ Seen'}</button>
      <div class="eyebrow small">${groupLabel(s.group)}</div>
      <h3>${esc(s.name)}</h3>
      <div class="muted"><i>${esc(s.scientific)}</i></div>
      <span class="badge">${esc(s.likelihood)}</span>
    </div>
  </article>`;
}
function filtered(){
  const q=query.trim().toLowerCase();
  return SPECIES.filter(s=>
    (place==='All'||s.places.includes(place)) &&
    (group==='All'||s.group===group) &&
    (!q||[s.name,s.scientific,s.desc,s.clue,s.habitat,s.pattern,s.feature].join(' ').toLowerCase().includes(q))
  );
}
function progressBlock(){
  const seen=readSeen(), n=SPECIES.filter(s=>seen[s.id]).length;
  return `<div class="progress-label"><b>Safari progress</b><span>${n} / ${SPECIES.length} species · ${pct(n,SPECIES.length)}%</span></div>
    <div class="progress"><div style="width:${pct(n,SPECIES.length)}%"></div></div>`;
}
function locationChips(){
  return `<div class="chips" aria-label="Location">
    ${places.map(p=>`<button class="chip ${p===place?'active':''}" data-place="${esc(p)}">${esc(p)}</button>`).join('')}
  </div>`;
}
function groupChips(){
  return `<div class="chips" aria-label="Animal group">
    ${groups.map(([v,t])=>`<button class="chip ${group===v?'active':''}" data-group="${v}">${t}</button>`).join('')}
  </div>`;
}

function home(){
  const seen=readSeen(), n=SPECIES.filter(s=>seen[s.id]).length;
  const likely=place==='All'?SPECIES.filter(s=>s.likelihood==='very likely').slice(0,8):SPECIES.filter(s=>s.places.includes(place)).sort(rankByLikelihood).slice(0,8);
  view.innerHTML=`<section class="hero hero-home">
    <div class="eyebrow">VICTORIA FALLS · CHOBE · KHWAI · OKAVANGO</div>
    <h2>Safari Wildlife Guide</h2>
    <p class="lead">A fast field guide for identifying wildlife, tracking sightings and preparing your guide for offline safari use.</p>
    ${progressBlock()}
    <div class="home-actions">
      <button class="bigbtn" data-route="identify">⌕ Identify something</button>
      <button class="bigbtn secondary" data-route="browse">◉ Browse species</button>
    </div>
  </section>
  <section class="section">
    <div class="section-head"><div><h2>Where are you?</h2><p class="muted">Location changes browsing and identification ranking.</p></div></div>
    ${locationChips()}
  </section>
  <section class="section">
    <div class="section-head"><div><h2>Likely to see here</h2><p class="muted">${locationLabel(place)}</p></div><button class="textbtn" data-route="browse">See all →</button></div>
    <div class="species-grid">${likely.map(card).join('')}</div>
  </section>
  <section class="grid stat-grid">
    <button class="card link-card" data-route="identify"><strong>Identify</strong><span>Use a simple fuzzy field key.</span></button>
    <button class="card link-card" data-route="browse"><strong>Browse</strong><span>Search by species, feature or habitat.</span></button>
    <button class="card link-card" data-route="safari"><strong>My Safari</strong><span>${n} sightings recorded.</span></button>
    <button class="card link-card" data-route="about"><strong>Offline & credits</strong><span>Check offline readiness and image status.</span></button>
  </section>`;
}
function rankByLikelihood(a,b){
  const w={'very likely':4,likely:3,possible:2,uncommon:1};
  return (w[b.likelihood]||0)-(w[a.likelihood]||0);
}

function browse(){
  const list=filtered();
  view.innerHTML=`<section class="section top-section">
    <div class="section-head"><div><h2>Browse species</h2><p class="muted">${list.length} matching species</p></div></div>
    <input id="search" class="search" inputmode="search" autocomplete="off" placeholder="Search name, field mark, habitat…" value="${esc(query)}">
    ${locationChips()}${groupChips()}
  </section>
  <section class="section"><div class="species-grid" id="speciesGrid">${list.length?list.map(card).join(''):'<div class="empty">No exact browse matches. Try a broader search.</div>'}</div></section>`;
}
function detail(id){
  const s=SPECIES.find(x=>String(x.id)===String(id)); if(!s){route='browse';render();return}
  const seen=isSeen(s.id);
  view.innerHTML=`<button class="back" data-route="browse">← Back to species</button>
  <article class="detail">
    <div class="detail-photo"><img src="${esc(s.image)}" alt="${esc(s.name)}"><span class="photo-badge">Local image</span></div>
    <div class="detail-body">
      <div class="eyebrow small">${groupLabel(s.group)} · ${esc(s.likelihood)}</div>
      <div class="detail-title-row"><div><h2>${esc(s.name)}</h2><p class="muted scientific"><i>${esc(s.scientific)}</i></p></div>
      <button class="seen detail-seen ${seen?'yes':''}" data-seen="${s.id}">${seen?'✓ Seen':'○ Mark seen'}</button></div>
      <p class="lead">${esc(s.desc)}</p>
      <div class="fact-grid">
        <div><span>Habitat</span><b>${esc(s.habitat)}</b></div>
        <div><span>Diet</span><b>${esc(s.diet)}</b></div>
        <div><span>Size</span><b>${esc(s.size)}</b></div>
        <div><span>Key clue</span><b>${esc(s.clue)}</b></div>
      </div>
      <h3>Where you might see it</h3>
      <div class="chips">${s.places.map(p=>`<span class="chip ${p===place?'active':''}">${esc(p)}</span>`).join('')}</div>
      ${s.safety?`<aside class="safety"><b>Field safety</b><p>${esc(s.safety)}</p></aside>`:''}
      <div class="row">
        <button class="bigbtn" data-seen="${s.id}">${seen?'Unmark seen':'Mark as seen'}</button>
        <button class="bigbtn secondary" data-route="identify">Try identification</button>
      </div>
      <div class="photo-credit"><b>Image status:</b> local fallback plate bundled with this build. ${esc(s.photo?.note||'')}</div>
    </div>
  </article>`;
}

function safari(){
  const ss=readSeen();
  const done=SPECIES.filter(s=>ss[s.id]);
  const unseen=SPECIES.filter(s=>!ss[s.id]);
  const locationProgress=places.slice(1).map(p=>{
    const relevant=SPECIES.filter(s=>s.places.includes(p));
    const got=relevant.filter(s=>ss[s.id]).length;
    return `<div class="mini-progress"><div><b>${esc(p)}</b><span>${got}/${relevant.length}</span></div><div class="progress"><div style="width:${pct(got,relevant.length)}%"></div></div></div>`;
  }).join('');
  view.innerHTML=`<section class="hero"><div class="eyebrow">MY SAFARI</div><h2>What have you spotted?</h2>${progressBlock()}
    <div class="row"><button class="bigbtn secondary" data-safari-filter="seen">Seen (${done.length})</button><button class="bigbtn secondary" data-safari-filter="unseen">Not yet (${unseen.length})</button><button class="bigbtn danger-btn" data-reset="1">Reset sightings</button></div>
  </section>
  <section class="section"><div class="section-head"><h2>Progress by location</h2></div>${locationProgress}</section>
  <section class="section"><div class="species-grid" id="safariGrid">${done.length?done.map(card).join(''):'<div class="empty">Nothing marked seen yet. Start with Identify or Browse.</div>'}</div></section>`;
}

const questions=[
 {key:'group',q:'What are you looking at?',opts:[['mammal','Mammal'],['bird','Bird'],['reptile','Reptile'],['amphibian','Amphibian'],['any','Not sure']]},
 {key:'size',q:'What size is it?',opts:[['tiny','Very small'],['small','Small'],['medium','Medium'],['large','Large'],['very large','Very large'],['any','Not sure']]},
 {key:'habitat',q:'Where is it?',opts:[['water','Water / wetland'],['open','Open grassland / floodplain'],['woodland','Woodland / bush'],['rocky','Rocky / dry ground'],['any','Not sure']]},
 {key:'pattern',q:'What is the strongest visual clue?',opts:[['spotted','Spotted / rosettes'],['striped','Striped / banded'],['patched','Patches / irregular blocks'],['plain','Mostly plain'],['blackwhite','Black and white'],['green','Green / blue-green'],['tawny','Tawny / reddish-brown'],['brown','Brown / grey-brown'],['grey','Grey'],['white','Mostly white'],['dark','Mostly dark'],['any','Not sure']]},
 {key:'feature',q:'Any obvious feature?',opts:[['horns','Horns / antlers'],['tusks','Tusks'],['long neck','Long neck'],['long legs','Very long legs'],['crest','Crest / casque / crown'],['huge ears','Very large ears'],['bill','Distinctive bill'],['tail','Distinctive tail'],['none','None obvious'],['any','Not sure']]}
];
function habitatMatch(s,a){
  if(a==='any') return 0;
  const h=(s.habitat||'').toLowerCase();
  if(a==='water') return /water|wetland|marsh|river|floodplain|lagoon|reed/.test(h)?1:0;
  if(a==='open') return /grassland|open|floodplain|savanna/.test(h)?1:0;
  if(a==='woodland') return /woodland|riverine|thicket|forest|bush/.test(h)?1:0;
  if(a==='rocky') return /rock|dry|sand|scrub/.test(h)?1:0;
  return 0;
}
function attrMatch(s,key,a){
  if(!a||a==='any') return 0;
  if(key==='group') return s.group===a?5:0;
  if(key==='size') return s.size===a?3:0;
  if(key==='pattern') return (s.pattern||'').toLowerCase().includes(a)|| (s.desc||'').toLowerCase().includes(a)?2:0;
  if(key==='feature'){
    const hay=[s.feature,s.clue,s.desc].join(' ').toLowerCase();
    return hay.includes(a)?3:0;
  }
  return 0;
}
function identifyCandidates(){
  const a=identifyState.answers;
  return SPECIES.map(s=>{
    let score=0;
    score+=attrMatch(s,'group',a.group);
    score+=attrMatch(s,'size',a.size);
    score+=habitatMatch(s,a.habitat)*2;
    score+=attrMatch(s,'pattern',a.pattern);
    score+=attrMatch(s,'feature',a.feature);
    if(place!=='All'&&s.places.includes(place)) score+=2;
    if(s.likelihood==='very likely') score+=.8;
    else if(s.likelihood==='likely') score+=.4;
    return {...s,score};
  }).sort((a,b)=>b.score-a.score);
}
function identify(){
  const step=identifyState.step;
  if(step>=questions.length){
    const results=identifyCandidates();
    view.innerHTML=`<section class="hero"><div class="eyebrow">IDENTIFICATION</div><h2>Best matches</h2>
      <p class="muted">The key ranks candidates rather than requiring every feature to match. ${place!=='All'?`Location: <b>${esc(place)}</b>.`:''}</p>
      <div class="answer-summary">${Object.entries(identifyState.answers).filter(([,v])=>v&&v!=='any').map(([k,v])=>`<span class="chip">${esc(k)}: ${esc(v)}</span>`).join('')}</div>
    </section>
    <section class="section"><div class="result-list">${results.slice(0,8).map((s,i)=>`<article class="result" data-id="${s.id}">
      <div class="rank">${i<3?'★'.repeat(3-i):'•'}</div><img src="${esc(s.image)}" alt="${esc(s.name)}">
      <div><h3>${esc(s.name)}</h3><p class="muted"><i>${esc(s.scientific)}</i></p><p>${esc(s.clue)}</p><span class="badge">${esc(s.likelihood)}</span></div>
    </article>`).join('')}</div></section>
    <div class="row"><button class="bigbtn" data-ident-reset="1">Start again</button><button class="bigbtn secondary" data-route="browse">Browse all species</button></div>`;
    return;
  }
  const q=questions[step];
  const current=identifyState.answers[q.key];
  view.innerHTML=`<section class="hero"><div class="eyebrow">IDENTIFICATION · STEP ${step+1} OF ${questions.length}</div><h2>${esc(q.q)}</h2>
    <p class="muted">Choose the closest answer. "Not sure" always keeps alternatives open.</p></section>
    <section class="question">${q.opts.map(([v,t])=>`<button class="option ${current===v?'selected':''}" data-answer="${v}">${esc(t)}</button>`).join('')}</section>
    <div class="identify-footer"><button class="textbtn" data-ident-back="${step}">${step?'← Previous':''}</button><span>${step?`Answered ${step} of ${questions.length}`:'Start broad — you can be approximate.'}</span></div>`;
}
function settings(){
  const prepared=localStorage.getItem('offlinePrepared')==='1';
  view.innerHTML=`<section class="hero"><div class="eyebrow">OFFLINE & ABOUT</div><h2>Prepare for safari</h2>
    <p>All app code and the current ${SPECIES.length} local image assets are bundled in this project. Use the button below while online to warm the browser cache, then test in Airplane Mode.</p>
    <div class="offline-box"><div id="offline-detail">${prepared?'✓ Offline preparation recorded.':'○ Offline preparation not yet confirmed.'}</div><div id="offline-count" class="muted"></div></div>
    <button class="bigbtn" id="prepareOffline">Prepare for Offline Use</button>
  </section>
  <section class="section"><h2>Photo credits</h2><p class="muted">This delivered build uses clearly labelled local fallback plates because licensed source photographs could not be technically downloaded into the project environment during build. No runtime image URLs are used.</p>
  <p><b>Important:</b> replace the fallback plates with licensed photographs before relying on the app as a finished photographic field guide. The species records already include a photo-credit structure for photographer, source and licence.</p></section>
  <section class="section"><h2>Technical status</h2><ul class="checklist"><li>✓ No external API calls in app code</li><li>✓ Species data is local</li><li>✓ Images are local assets</li><li>✓ Sightings use localStorage</li><li>✓ Service worker cache includes core files and images</li><li>✓ Identification uses ranked fuzzy matching</li><li>✓ ${SPECIES.length} species in the local database</li></ul></section>`;
  $('#prepareOffline').onclick=prepareOffline;
}
async function prepareOffline(){
  const btn=$('#prepareOffline'); if(!btn)return;
  if(!window.isSecureContext && location.hostname!=='localhost'){alert('GitHub Pages uses HTTPS. Open this app from HTTPS before preparing offline.');return}
  btn.disabled=true;btn.textContent='Preparing…';
  const assets=['./','./index.html','./styles.css','./app.js','./species.js','./manifest.json','./service-worker.js','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png',...SPECIES.map(s=>`./${s.image}`)];
  const failures=[];
  try{
    if('serviceWorker' in navigator) await navigator.serviceWorker.register('service-worker.js');
    const cache=await caches.open('safari-guide-v3');
    let done=0;
    for(const asset of assets){
      try{await cache.add(asset);done++;$('#offline-count').textContent=`Caching ${done}/${assets.length} assets…`}
      catch(e){failures.push(asset)}
    }
    const missing=[];
    for(const asset of assets){if(!await cache.match(asset))missing.push(asset)}
    const allBad=[...new Set([...failures,...missing])];
    if(allBad.length){
      localStorage.removeItem('offlinePrepared');
      $('#offline-detail').innerHTML=`✕ Offline preparation incomplete`;
      $('#offline-count').textContent=`${allBad.length} assets failed. First failure: ${allBad[0]}`;
      btn.disabled=false;btn.textContent='Try again';return;
    }
    localStorage.setItem('offlinePrepared','1');
    $('#offline-detail').innerHTML=`✓ Offline ready`;
    $('#offline-count').textContent=`${SPECIES.length} species · ${SPECIES.length} local images · ${assets.length} essential assets cached`;
    btn.textContent='Offline ready';
    $('#status').textContent='Offline ready';
  }catch(e){
    $('#offline-detail').innerHTML=`✕ Could not prepare offline cache`;
    $('#offline-count').textContent=String(e.message||e);
    btn.disabled=false;btn.textContent='Try again';
  }
}
function render(){
  if(route==='home')home();
  else if(route==='browse')browse();
  else if(route==='safari')safari();
  else if(route==='identify')identify();
  else if(route==='about')settings();
  else if(route.startsWith('species-'))detail(route.slice(8));
  else {route='home';location.hash='home';home();}
  updateStatus();
}
function updateStatus(){
  const s=$('#status'); if(!s)return;
  const ready=localStorage.getItem('offlinePrepared')==='1';
  s.textContent=navigator.onLine?(ready?'Offline ready':'Online'):'Offline';
}
function navigate(r){route=r;location.hash=r;render();}
document.addEventListener('click',e=>{
  const routeEl=e.target.closest('[data-route]');
  if(routeEl){navigate(routeEl.dataset.route);return}
  const seenEl=e.target.closest('[data-seen]');
  if(seenEl){
    const o=readSeen(),id=seenEl.dataset.seen;
    if(o[id]) delete o[id]; else o[id]=new Date().toISOString();
    saveSeen(o); render(); return;
  }
  const reset=e.target.closest('[data-reset]');
  if(reset){
    if(confirm('Reset all safari sightings? This cannot be undone.')){localStorage.removeItem(seenKey);render();}
    return;
  }
  const placeEl=e.target.closest('[data-place]');
  if(placeEl){place=placeEl.dataset.place;render();return}
  const groupEl=e.target.closest('[data-group]');
  if(groupEl){group=groupEl.dataset.group;render();return}
  const answer=e.target.closest('[data-answer]');
  if(answer){
    identifyState.answers[questions[identifyState.step].key]=answer.dataset.answer;
    identifyState.step++; identify(); return;
  }
  const back=e.target.closest('[data-ident-back]');
  if(back){identifyState.step=Math.max(0,identifyState.step-1);identify();return}
  const resetId=e.target.closest('[data-ident-reset]');
  if(resetId){identifyState={step:0,answers:{}};identify();return}
  const result=e.target.closest('.result[data-id]');
  if(result){navigate('species-'+result.dataset.id);return}
  const species=e.target.closest('.species-card[data-id]');
  if(species){navigate('species-'+species.dataset.id);return}
});
document.addEventListener('input',e=>{
  if(e.target.id==='search'){
    query=e.target.value;
    const grid=$('#speciesGrid');
    if(grid)grid.innerHTML=(filtered().map(card).join('')||'<div class="empty">No exact browse matches. Try a broader search.</div>');
  }
});
window.addEventListener('hashchange',()=>{route=location.hash.slice(1)||'home';render()});
window.addEventListener('online',updateStatus); window.addEventListener('offline',updateStatus);
document.addEventListener('DOMContentLoaded',()=>{
  $('#offlineBtn').onclick=()=>navigate('about');
  if('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  render();
});
