const ID_STYLE=`
.id-summary{display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:14px}
.id-selected-chip{background:#e4eee1;color:#274c37;border:1px solid #c9d9c5;border-radius:999px;padding:8px 11px;font-size:13px}
.id-location-note{margin-top:12px;padding:10px 12px;border-radius:10px;background:#eef3e9;color:#405548;font-size:13px}
.id-filters{display:flex;flex-direction:column;gap:12px;margin-top:16px}
.id-category{background:#fffdf8;border:1px solid #ddd9cf;border-radius:16px;padding:16px}
.id-category-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:11px}
.id-category-head h3{margin:0 0 3px}
.id-category-head p{margin:0;color:#6c756e;font-size:12px}
.id-options{display:flex;flex-wrap:wrap;gap:8px}
.id-option{background:#f3f1ea;color:#334038;border:1px solid #d7d4ca;border-radius:11px;padding:11px 13px;font-size:14px;font-weight:600}
.id-option.selected{background:#2f6448;color:#fff;border-color:#2f6448}
.id-results-section{margin-top:16px}
.id-result{cursor:pointer;display:grid;grid-template-columns:32px 78px 1fr;gap:12px;align-items:center}
.id-result img{width:78px;height:68px;object-fit:cover;border-radius:9px}
.id-result-body{min-width:0}
.result-top{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}
.result-top h3{margin:0}
.match-label{font-size:11px;white-space:nowrap;border-radius:999px;padding:5px 8px;background:#e8efe5;color:#31573f;font-weight:700}
.match-meter{height:5px;background:#e3e0d7;border-radius:5px;overflow:hidden;margin-top:8px}
.match-meter span{display:block;height:100%;background:#5f856a;border-radius:5px}
@media(max-width:600px){
 .id-option{font-size:13px;padding:10px 11px}
 .id-result{grid-template-columns:26px 68px 1fr;gap:9px}
 .id-result img{width:68px;height:60px}
 .match-label{font-size:10px}
}
`;
if(!document.getElementById('id-overhaul-style')){const st=document.createElement('style');st.id='id-overhaul-style';st.textContent=ID_STYLE;document.head.appendChild(st);}
const $ = (s,root=document)=>root.querySelector(s);
const view = document.querySelector('#view');
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const places = ['All','Victoria Falls','Chobe','Khwai','Okavango'];
const groups = [['All','All'],['mammal','Mammals'],['bird','Birds'],['reptile','Reptiles'],['amphibian','Amphibians']];
const seenKey='safariSeenV4';
const OFFLINE_DB='safariWildlifeOffline';
const OFFLINE_DB_VERSION=1;
const OFFLINE_STORE='assets';
const OFFLINE_CACHE='safari-guide-v5';
const OFFLINE_META='safari-offline-meta-v1';
const offlineImageUrls=new Map();
let offlineDbPromise=null;

function openOfflineDB(){
  if(offlineDbPromise)return offlineDbPromise;
  offlineDbPromise=new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){reject(new Error('IndexedDB unavailable'));return;}
    const req=indexedDB.open(OFFLINE_DB,OFFLINE_DB_VERSION);
    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains(OFFLINE_STORE)) db.createObjectStore(OFFLINE_STORE,{keyPath:'url'});
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error||new Error('Could not open offline database'));
  });
  return offlineDbPromise;
}
async function putOfflineAsset(url,blob){
  const db=await openOfflineDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(OFFLINE_STORE,'readwrite');
    tx.objectStore(OFFLINE_STORE).put({url,blob,savedAt:Date.now()});
    tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error);
  });
}
async function getOfflineAsset(url){
  try{
    const db=await openOfflineDB();
    return await new Promise((resolve,reject)=>{
      const tx=db.transaction(OFFLINE_STORE,'readonly');
      const req=tx.objectStore(OFFLINE_STORE).get(url);
      req.onsuccess=()=>resolve(req.result?.blob||null);
      req.onerror=()=>reject(req.error);
    });
  }catch{return null}
}
async function setOfflineMeta(meta){
  try{localStorage.setItem(OFFLINE_META,JSON.stringify(meta));}catch{}
}
function getOfflineMeta(){try{return JSON.parse(localStorage.getItem(OFFLINE_META)||'null')}catch{return null}}
async function hydrateOfflineImages(){
  if(!getOfflineMeta()?.ready)return;
  await Promise.all(SPECIES.map(async s=>{
    const blob=await getOfflineAsset(s.image);
    if(blob){
      const url=URL.createObjectURL(blob);
      offlineImageUrls.set(s.image,url);
    }
  }));
}
function revokeOfflineImageUrls(){for(const url of offlineImageUrls.values())URL.revokeObjectURL(url);offlineImageUrls.clear();}
let route=location.hash.slice(1)||'home';
let place='All', group='All', query='';

const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const readSeen=()=>{try{return JSON.parse(localStorage.getItem(seenKey)||'{}')}catch{return {}}};
const saveSeen=o=>localStorage.setItem(seenKey,JSON.stringify(o));
const isSeen=id=>!!readSeen()[id];
const pct=(a,b)=>b?Math.round(a/b*100):0;

function groupLabel(g){return ({mammal:'Mammal',bird:'Bird',reptile:'Reptile',amphibian:'Amphibian'})[g]||g}
function locationLabel(p){return p==='All'?'All locations':p}
function speciesImage(s){return offlineImageUrls.get(s.image)||s.image}
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
    (!q||[s.name,s.scientific,s.desc,s.clue,s.habitat,s.pattern,s.feature,Object.values(s.identification||{}).flat().join(' ')].join(' ').toLowerCase().includes(q))
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


const IDENT_CATEGORIES = [
  {key:'group', label:'Animal group', single:true, options:[
    ['mammal','Mammal'],['bird','Bird'],['reptile','Reptile'],['amphibian','Amphibian']
  ]},
  {key:'size', label:'Size', single:true, options:[
    ['tiny','Tiny · mouse / small frog'],['small','Small · squirrel / small bird'],['medium','Medium · hare / dove / small antelope'],['large','Large · eagle / large antelope'],['very large','Very large · elephant / stork / big reptile']
  ]},
  {key:'habitat', label:'Habitat', single:false, options:[
    ['open grassland / floodplain','Open grassland / floodplain'],['woodland / bush','Woodland / bush'],['dense thicket','Dense thicket'],
    ['wetland / marsh','Wetland / marsh'],['permanent water / river','Permanent water / river'],['riverbank / sandbank','Riverbank / sandbank'],
    ['rocky / dry ground','Rocky / dry ground'],['sandy ground','Sandy ground'],['around camps / buildings','Around camps / buildings']
  ]},
  {key:'colour', label:'Colour', single:false, options:[
    ['grey','Grey'],['brown / grey-brown','Brown / grey-brown'],['tawny / sandy','Tawny / sandy'],['reddish / chestnut','Reddish / chestnut'],
    ['mostly dark','Mostly dark'],['mostly white','Mostly white'],['black & white','Black & white'],['green','Green'],
    ['blue','Blue'],['yellow','Yellow'],['orange / red','Orange / red'],['multi-coloured','Multi-coloured']
  ]},
  {key:'pattern', label:'Markings & pattern', single:false, options:[
    ['spotted / rosettes','Spotted / rosettes'],['striped / banded','Striped / banded'],['patchy / irregular markings','Patchy / irregular markings'],
    ['barred','Barred'],['bold black-and-white pattern','Bold black-and-white pattern'],['mostly plain','Mostly plain'],['zigzag','Zigzag']
  ]},
  {key:'feature', label:'Distinctive features', single:false, options:[
    ['horns / antlers','Horns / antlers'],['tusks','Tusks'],['long neck','Long neck'],['very long legs','Very long legs'],
    ['very large ears','Very large ears'],['crest / crown / casque','Crest / crown / casque'],['distinctive bill','Distinctive bill'],
    ['long / specialised bill','Long / specialised bill'],['very large bill','Very large bill'],['distinctive tail','Distinctive tail'],
    ['long tail','Long tail'],['forked tail','Forked tail'],['ringed tail','Ringed tail'],['ear tufts','Ear tufts'],
    ['facial mask','Facial mask'],['bare head / face','Bare head / face'],['long trunk','Long trunk'],
    ['webbed / splayed feet','Webbed / splayed feet'],['long toes','Long toes'],['stocky / heavy body','Stocky / heavy body'],
    ['slender body','Slender body'],['long body / snake-like','Long body / snake-like'],['domed shell','Domed shell'],
    ['broad / flat body','Broad / flat body'],['distinctive throat / pouch','Distinctive throat / pouch'],
    ['colourful face','Colourful face'],['red / yellow bill','Red / yellow bill'],['hooked bill','Hooked bill'],
    ['bushy tail','Bushy tail'],['white back','White back'],['yellow eye','Yellow eye'],['distinctive eyes','Distinctive eyes'],
    ['tiny ears','Tiny ears']
  ]},
  {key:'ecology', label:'Behaviour / lifestyle', single:false, options:[
    ['aquatic / semi-aquatic','Aquatic / semi-aquatic'],['tree-dwelling / arboreal','Tree-dwelling / arboreal'],
    ['burrowing / underground','Burrowing / underground'],['nocturnal','Nocturnal'],['ground-dwelling','Ground-dwelling'],
    ['often around water','Often around water'],['social / often in groups','Social / often in groups']
  ]}
];

const identifyState={answers:{}, initialised:false};

function traitValues(s,key){
  if(key==='group') return [s.group];
  return (s.identification&&s.identification[key])||[];
}
function selectedFor(key){
  const v=identifyState.answers[key];
  if(!v) return [];
  return Array.isArray(v)?v:[v];
}
function hasAnySelected(s,key){
  const chosen=selectedFor(key);
  if(!chosen.length) return true;
  const vals=traitValues(s,key);
  return chosen.some(v=>vals.includes(v));
}
function candidatePool(excludeKey=null){
  return SPECIES.filter(s=>{
    if(place!=='All'&&!s.places.includes(place)) return false;
    for(const cat of IDENT_CATEGORIES){
      if(cat.key===excludeKey) continue;
      if(!hasAnySelected(s,cat.key)) return false;
    }
    return true;
  });
}
function relevantOptions(cat){
  const base=candidatePool(cat.key);
  const selected=selectedFor(cat.key);
  const present=new Set();
  base.forEach(s=>traitValues(s,cat.key).forEach(v=>present.add(v)));
  // Keep selected values visible even if another selection has made the intersection narrow.
  selected.forEach(v=>present.add(v));
  return cat.options.filter(([v])=>present.has(v));
}
function toggleTrait(key,value){
  const cat=IDENT_CATEGORIES.find(c=>c.key===key);
  if(cat.single){
    if(identifyState.answers[key]===value) delete identifyState.answers[key];
    else identifyState.answers[key]=value;
  }else{
    const current=new Set(selectedFor(key));
    current.has(value)?current.delete(value):current.add(value);
    if(current.size) identifyState.answers[key]=[...current];
    else delete identifyState.answers[key];
  }
  renderIdentify();
}
function clearCategory(key){delete identifyState.answers[key];renderIdentify();}
function clearIdentification(){identifyState.answers={};renderIdentify();}
function traitChip(key,value){
  const cat=IDENT_CATEGORIES.find(c=>c.key===key);
  const label=(cat.options.find(o=>o[0]===value)||[value,value])[1];
  return `<button class="id-selected-chip" data-id-remove="${esc(key)}" data-id-value="${esc(value)}">${esc(label)} ×</button>`;
}
function matchScore(s){
  let score=0, matched=0, possible=0;
  for(const cat of IDENT_CATEGORIES){
    const chosen=selectedFor(cat.key);
    if(!chosen.length) continue;
    possible += cat.key==='group'?10:cat.key==='size'?8:cat.key==='feature'?8:cat.key==='habitat'?6:cat.key==='pattern'?5:cat.key==='colour'?5:3;
    const vals=traitValues(s,cat.key);
    if(cat.key==='group'){
      if(vals.includes(chosen[0])){score+=10;matched+=10}
      continue;
    }
    const hits=chosen.filter(v=>vals.includes(v)).length;
    if(hits){
      const weight=cat.key==='size'?8:cat.key==='feature'?8:cat.key==='habitat'?6:cat.key==='pattern'?5:cat.key==='colour'?5:3;
      // Multiple observations within one category are alternatives, not requirements.
      score += weight*(hits/chosen.length);
      matched += weight*(hits/chosen.length);
    }
  }
  if(place!=='All'&&s.places.includes(place)) score+=1.5;
  if(s.likelihood==='very likely') score+=0.35;
  else if(s.likelihood==='likely') score+=0.2;
  const pct=possible?Math.round(Math.min(100,(matched/possible)*100)):0;
  return {score,pct};
}
function identifyCandidates(){
  return SPECIES
    .filter(s=>place==='All'||s.places.includes(place))
    .map(s=>({...s,...matchScore(s)}))
    .filter(s=>!selectedFor('group').length||s.group===selectedFor('group')[0])
    .sort((a,b)=>b.score-a.score);
}
function matchStrength(s,index){
  if(!Object.values(identifyState.answers).some(v=>Array.isArray(v)?v.length:v)) return 'Broad match';
  if(index===0&&s.pct>=75)return 'Strongest match';
  if(s.pct>=60)return 'Strong match';
  if(s.pct>=40)return 'Good match';
  return 'Possible';
}
function renderIdentify(){
  const chosenCount=Object.values(identifyState.answers).reduce((n,v)=>n+(Array.isArray(v)?v.length:(v?1:0)),0);
  const results=identifyCandidates();
  const meaningful=chosenCount>0;
  view.innerHTML=`
    <section class="hero id-hero">
      <div class="eyebrow">IDENTIFICATION</div>
      <h2>Tell me what you can see</h2>
      <p class="lead">Select any observations you are confident about. You can skip anything you cannot see clearly.</p>
      ${place!=='All'?`<div class="id-location-note">Location: <b>${esc(place)}</b> — used to improve ranking.</div>`:''}
      <div class="id-summary">
        ${chosenCount?Object.entries(identifyState.answers).flatMap(([k,v])=>(Array.isArray(v)?v:[v]).map(x=>traitChip(k,x))).join(''):'<span class="muted">No observations selected yet</span>'}
        ${chosenCount?'<button class="textbtn" data-id-clear="1">Clear all</button>':''}
      </div>
    </section>
    <section class="id-filters">
      ${IDENT_CATEGORIES.map(cat=>{
        const opts=relevantOptions(cat);
        if(!opts.length)return '';
        const selected=new Set(selectedFor(cat.key));
        return `<div class="id-category">
          <div class="id-category-head"><div><h3>${esc(cat.label)}</h3><p>${cat.key==='group'||cat.key==='size'?'Choose one':'Choose any that apply'}</p></div>
          ${selected.size?`<button class="textbtn" data-id-clear-category="${esc(cat.key)}">Clear</button>`:''}</div>
          <div class="id-options">${opts.map(([v,label])=>`<button class="id-option ${selected.has(v)?'selected':''}" data-id-toggle="${esc(cat.key)}" data-id-value="${esc(v)}">${esc(label)}</button>`).join('')}</div>
        </div>`;
      }).join('')}
    </section>
    ${meaningful?`
    <section class="section id-results-section">
      <div class="section-head"><div><h2>Likely matches</h2><p class="muted">${results.length} species ranked from your observations.</p></div></div>
      <div class="result-list">${results.slice(0,10).map((s,i)=>`
        <article class="result id-result" data-id="${s.id}">
          <div class="rank">${i===0?'★':i<3?'☆':'#'+(i+1)}</div>
          <img src="${esc(s.image)}" alt="${esc(s.name)}">
          <div class="id-result-body"><div class="result-top"><div><h3>${esc(s.name)}</h3><p class="muted"><i>${esc(s.scientific)}</i></p></div><span class="match-label">${matchStrength(s,i)}</span></div>
          <p>${esc(s.clue)}</p>
          <div class="match-meter"><span style="width:${Math.max(8,s.pct)}%"></span></div></div>
        </article>`).join('')}</div>
    </section>`:''}
    <div class="row"><button class="bigbtn secondary" data-route="browse">Browse all species</button></div>`;
}
function identify(){renderIdentify();}
function settings(){
  const meta=getOfflineMeta();
  const ready=!!meta?.ready;
  const online=navigator.onLine;
  view.innerHTML=`<section class="hero"><div class="eyebrow">OFFLINE & ABOUT</div><h2>Prepare for safari</h2>
    <p>Download and verify the complete guide while online. The app stores the application assets and all ${SPECIES.length} species photographs locally, so normal use does not depend on internet connectivity.</p>
    <div class="offline-box"><div id="offline-detail">${ready?'✓ Safari Mode ready':'○ Safari Mode not prepared'}</div><div id="offline-count" class="muted">${meta?`${meta.images||0}/${SPECIES.length} photographs verified · ${meta.checkedAt?new Date(meta.checkedAt).toLocaleString():''}`:'No offline package verified yet.'}</div></div>
    <div class="row"><button class="bigbtn" id="prepareOffline">${ready?'Verify / update offline package':'Download for Offline Use'}</button><button class="bigbtn secondary" id="verifyOffline">Verify now</button></div>
  </section>
  <section class="section"><h2>Safari Mode</h2><p class="muted">When ready, the guide can be used in Airplane Mode. Going online again is safe: the local package remains available and the app can be updated when you choose.</p>
    <div class="checklist"><div>Network: <b>${online?'Available':'Offline'}</b></div><div>Local database: <b>${'IndexedDB' in window?'Available':'Unavailable'}</b></div><div>Offline package: <b>${ready?'Verified':'Not verified'}</b></div><div>Sightings: <b>Stored locally</b></div></div>
  </section>
  <section class="section"><h2>Photo credits</h2><p class="muted">The offline system stores the project's local image files. Keep your licensed WebP photographs in the existing <code>images/</code> directory and preserve the species image paths.</p></section>`;
  $('#prepareOffline').onclick=prepareOffline;
  $('#verifyOffline').onclick=verifyOffline;
}

function offlineAssetList(){
  const core=['./','./index.html','./styles.css','./app.js','./species.js','./manifest.json','./service-worker.js'];
  const icons=['./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
  return [...new Set([...core,...icons,...SPECIES.map(s=>`./${s.image}`)])];
}

async function fetchAndStoreAsset(asset){
  const response=await fetch(asset,{cache:'no-store'});
  if(!response.ok)throw new Error(`${response.status} ${response.statusText}`);
  const blob=await response.blob();
  await putOfflineAsset(asset,blob);
  return blob;
}

async function prepareOffline(){
  const btn=$('#prepareOffline'); if(!btn)return;
  if(!window.isSecureContext && location.hostname!=='localhost'){
    alert('Open the app from HTTPS (for example GitHub Pages) before preparing offline.');return;
  }
  if(!navigator.onLine){alert('Connect to the internet first so the complete offline package can be downloaded and verified.');return;}
  btn.disabled=true;btn.textContent='Downloading…';
  const assets=offlineAssetList(), failures=[]; let done=0;
  try{
    if('serviceWorker' in navigator){
      const reg=await navigator.serviceWorker.register('./service-worker.js');
      await navigator.serviceWorker.ready;
      if(reg.active) reg.active.postMessage({type:'SET_CACHE_VERSION',version:OFFLINE_CACHE});
    }
    const cache=await caches.open(OFFLINE_CACHE);
    for(const asset of assets){
      try{
        const blob=await fetchAndStoreAsset(asset);
        await cache.put(asset,new Response(blob,{headers:{'Content-Type':blob.type||'application/octet-stream'}}));
        done++;
        const el=$('#offline-count');if(el)el.textContent=`Downloading ${done}/${assets.length} assets…`;
      }catch(e){failures.push(`${asset} — ${e.message||e}`)}
    }
    const missing=[];
    for(const asset of assets){
      const blob=await getOfflineAsset(asset); const cached=await cache.match(asset);
      if(!blob||!cached)missing.push(asset);
    }
    const imageCount=SPECIES.filter(s=>offlineImageUrls.has(s.image)).length;
    if(failures.length||missing.length){
      localStorage.removeItem(OFFLINE_META);
      $('#offline-detail').innerHTML='✕ Offline package incomplete';
      $('#offline-count').textContent=`${failures.length+missing.length} assets failed verification. First: ${(failures[0]||missing[0]||'unknown')}`;
      btn.disabled=false;btn.textContent='Try again';return;
    }
    const meta={ready:true,images:SPECIES.length,assets:assets.length,checkedAt:Date.now(),cache:OFFLINE_CACHE};
    await setOfflineMeta(meta);
    await hydrateOfflineImages();
    $('#offline-detail').innerHTML='✓ Safari Mode ready';
    $('#offline-count').textContent=`${SPECIES.length}/${SPECIES.length} photographs verified · ${assets.length} assets stored locally`;
    btn.textContent='Offline package verified';
    updateStatus();
  }catch(e){
    $('#offline-detail').innerHTML='✕ Could not prepare offline package';
    $('#offline-count').textContent=String(e.message||e);
    btn.disabled=false;btn.textContent='Try again';
  }
}

async function verifyOffline(){
  const detail=$('#offline-detail'),count=$('#offline-count'); if(!detail)return;
  detail.textContent='Checking local package…';
  const assets=offlineAssetList(); let ok=0,missing=[];
  for(const asset of assets){
    const blob=await getOfflineAsset(asset); const cached=await caches.match(asset);
    if(blob&&cached)ok++;else missing.push(asset);
  }
  if(missing.length){
    detail.textContent='✕ Offline package needs attention';
    count.textContent=`${ok}/${assets.length} assets verified. Missing: ${missing[0]}`;
    localStorage.removeItem(OFFLINE_META);
  }else{
    await setOfflineMeta({ready:true,images:SPECIES.length,assets:assets.length,checkedAt:Date.now(),cache:OFFLINE_CACHE});
    await hydrateOfflineImages();
    detail.textContent='✓ Safari Mode ready';
    count.textContent=`${SPECIES.length}/${SPECIES.length} photographs verified · ${assets.length} assets stored locally`;
  }
  updateStatus();
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
  const ready=!!getOfflineMeta()?.ready;
  s.textContent=navigator.onLine?(ready?'Safari Mode ready':'Online'):(ready?'Safari Mode · Offline':'Offline');
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
  const idToggle=e.target.closest('[data-id-toggle]');
  if(idToggle){toggleTrait(idToggle.dataset.idToggle,idToggle.dataset.idValue);return}
  const idRemove=e.target.closest('[data-id-remove]');
  if(idRemove){toggleTrait(idRemove.dataset.idRemove,idRemove.dataset.idValue);return}
  const idClear=e.target.closest('[data-id-clear]');
  if(idClear){clearIdentification();return}
  const idClearCat=e.target.closest('[data-id-clear-category]');
  if(idClearCat){clearCategory(idClearCat.dataset.idClearCategory);return}
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
document.addEventListener('DOMContentLoaded',async()=>{
  $('#offlineBtn').onclick=()=>navigate('about');
  if('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  await hydrateOfflineImages();
  render();
});
