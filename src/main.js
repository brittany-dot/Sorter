import './style.css';

const categories = {
  Documents: ['pdf','docx','doc','txt','rtf','odt'],
  Spreadsheets: ['xlsx','xls','csv','numbers'],
  Presentations: ['pptx','ppt','key'],
  'Images / Photos': ['jpg','jpeg','png','heic','gif','svg','tiff'],
  'Audio / Video': ['mp4','mov','mkv','avi','mp3','wav','flac'],
  'Archives / Compressed': ['zip','rar','7z','tar.gz'],
  'Code / Developer': ['json','xml','html','css','py','js']
};

const icon = (name) => `<svg aria-hidden="true"><use href="#${name}"/></svg>`;
const app = document.querySelector('#app');

app.innerHTML = `
<svg class="sprite" xmlns="http://www.w3.org/2000/svg"><defs>
  <symbol id="grid" viewBox="0 0 24 24"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></symbol>
  <symbol id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></symbol>
  <symbol id="folder" viewBox="0 0 24 24"><path d="M3 7h7l2 2h9v10H3z"/></symbol>
  <symbol id="spark" viewBox="0 0 24 24"><path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z"/></symbol>
  <symbol id="flow" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h5a3 3 0 0 1 3 3v1M16 14v-4m0 4v2"/></symbol>
  <symbol id="tag" viewBox="0 0 24 24"><path d="M4 4h7l9 9-7 7-9-9z"/><circle cx="8" cy="8" r="1"/></symbol>
  <symbol id="settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/></symbol>
  <symbol id="chev" viewBox="0 0 24 24"><path d="m8 10 4 4 4-4"/></symbol>
  <symbol id="play" viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></symbol>
  <symbol id="dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></symbol>
  <symbol id="file" viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6zM14 2v5h5"/></symbol>
</defs></svg>
<div class="shell">
  <aside>
    <a class="brand"><span class="brandmark">S</span><span>SORTER<small>FILE INTELLIGENCE</small></span></a>
    <nav>
      <span class="nav-label">Workspace</span>
      <button class="active">${icon('grid')} Overview</button>
      <button>${icon('search')} Search <kbd>⌘ K</kbd></button>
      <button>${icon('folder')} Smart folders <em>6</em></button>
      <span class="nav-label">Intelligence</span>
      <button>${icon('spark')} Clusters</button>
      <button>${icon('flow')} Automations <i></i></button>
      <button>${icon('tag')} Entities</button>
    </nav>
    <div class="capacity">
      <div><span>INDEX CAPACITY</span><b>1.2 TB / 4 TB</b></div>
      <div class="meter"><i></i></div><small>30% indexed · 82,419 files</small>
    </div>
    <button class="profile"><span>AK</span><b>Alex Kim<small>Local workspace</small></b>${icon('dots')}</button>
  </aside>
  <main>
    <header><div><p>WORKSPACE / OVERVIEW</p><h1>Good evening, Alex.</h1></div><div class="header-actions"><button class="iconbtn">${icon('settings')}</button><button id="automate" class="auto">${icon('flow')} AUTOMATE <span>⌘↵</span></button></div></header>
    <section class="ingest glass">
      <div class="drop" id="dropZone">
        <input id="folderInput" type="file" webkitdirectory multiple hidden>
        <span class="drop-icon">${icon('folder')}<i>+</i></span>
        <div><h2>Drop a folder to begin</h2><p>Files never leave your machine. Indexing happens locally.</p></div>
        <button id="browse">Browse folders</button>
      </div>
      <div class="route">
        <label>FILE TYPES</label><button class="select" id="typeSelect"><span>All supported types</span>${icon('chev')}</button>
        <div class="popover types" id="typeMenu">${Object.entries(categories).map(([name, ext])=>`<label><input type="checkbox" checked value="${name}"><span><b>${name}</b><small>${ext.map(x=>'.'+x).join(', ')}</small></span></label>`).join('')}</div>
      </div>
      <div class="route">
        <label>DESTINATION</label><button class="select" id="destination"><span>~/Sorted Archive</span>${icon('chev')}</button>
      </div>
      <button class="index-btn" id="runIndex">${icon('spark')} RUN INDEX</button>
    </section>
    <section class="stats">
      <article><span class="stat-icon cyan">${icon('file')}</span><div><label>FILES INDEXED</label><strong id="fileCount">82,419</strong><small><i>↑ 2,841</i> this week</small></div></article>
      <article><span class="stat-icon violet">${icon('folder')}</span><div><label>STORAGE ANALYZED</label><strong id="sizeCount">1.2 <em>TB</em></strong><small>of 4 TB capacity</small></div></article>
      <article><span class="stat-icon pink">${icon('spark')}</span><div><label>DUPLICATES FOUND</label><strong id="dupeCount">3,281</strong><small><i>84.6 GB</i> recoverable</small></div></article>
      <article><span class="stat-icon green">${icon('flow')}</span><div><label>AUTOMATIONS</label><strong>12 <em>active</em></strong><small>Last run 4 min ago</small></div></article>
    </section>
    <div class="workspace-grid">
      <section class="explorer glass">
        <div class="section-title"><div><span class="eyebrow">SEMANTIC EXPLORER</span><h2>Search your universe</h2></div><button>Open full search ↗</button></div>
        <div class="searchbox">${icon('search')}<input id="searchInput" placeholder='Try “money stuff” or tax NEAR/5 2025'><kbd>⌘ K</kbd><button id="searchGo">Search</button></div>
        <div class="filters"><button data-filter="all" class="on">All files</button><button data-filter="pdf">PDF <span>12.4k</span></button><button data-filter="image">Images <span>31.8k</span></button><button data-filter="doc">Documents <span>8.2k</span></button><button data-filter="video">Video <span>4.1k</span></button><button id="moreFilters">+ Filters</button></div>
        <div class="results-head"><span id="resultLabel">SHOWING 4 OF 82,419 FILES</span><button>Relevance ${icon('chev')}</button></div>
        <div class="results" id="results"></div>
        <button class="load" id="loadMore">Load more results</button>
      </section>
      <section class="side-stack">
        <article class="cluster glass">
          <div class="section-title"><div><span class="eyebrow">VISUAL CLUSTERS</span><h2>Topic islands</h2></div><button class="iconbtn">${icon('dots')}</button></div>
          <div class="map" id="clusterMap">
            <button class="bubble finance" data-query="finance"><b>FINANCE</b><span>18,204</span></button><button class="bubble photos" data-query="photos"><b>PHOTOS</b><span>29,810</span></button><button class="bubble work" data-query="work"><b>WORK</b><span>12,482</span></button><button class="bubble legal" data-query="legal"><b>LEGAL</b><span>3,102</span></button><button class="bubble creative" data-query="creative"><b>CREATIVE</b><span>8,821</span></button>
            <span class="dot d1"></span><span class="dot d2"></span><span class="dot d3"></span>
          </div><button class="maplink">Explore cluster map <span>→</span></button>
        </article>
        <article class="automation glass">
          <div class="section-title"><div><span class="eyebrow">AUTOMATION PULSE</span><h2>Running smoothly</h2></div><span class="live">● LIVE</span></div>
          <div class="rule"><span class="rule-icon">↓</span><div><b>Downloads inbox</b><small>14 files sorted · 2 min ago</small></div><em>ACTIVE</em></div>
          <div class="rule"><span class="rule-icon purple">A</span><div><b>Smart rename</b><small>8 invoices renamed · 18 min ago</small></div><em>ACTIVE</em></div>
          <div class="rule"><span class="rule-icon orange">⌁</span><div><b>Archive old projects</b><small>Next run in 3 hours</small></div><em>QUEUED</em></div>
          <button class="manage" id="manageRules">Manage automations <span>→</span></button>
        </article>
      </section>
    </div>
  </main>
</div>
<div class="toast" id="toast"></div>
<dialog id="automationDialog"><form method="dialog"><button class="close">×</button><span class="eyebrow">AUTOMATION STUDIO</span><h2>Set it. Forget it.</h2><p>Build a local pipeline that watches, understands, and routes every new file.</p><label>Watch folder<input value="~/Downloads"></label><label>Action<select><option>Analyze, rename & sort by topic</option><option>Find and group duplicates</option><option>Archive files older than 3 years</option></select></label><label class="toggle"><input type="checkbox" checked><span></span> Dry-run before moving files</label><div><button value="cancel" class="secondary">Cancel</button><button id="saveRule" value="default" class="auto">${icon('play')} Activate pipeline</button></div></form></dialog>
`;

const seedFiles = [
  {name:'Q4_Tax_Return_2025.pdf', path:'Finance / Taxes', size:'2.4 MB', date:'Today, 6:42 PM', topic:'Tax document', confidence:98, type:'pdf', color:'red', text:'tax return 2025 finance money invoice paid'},
  {name:'Untitled (3).txt', path:'Downloads', size:'18 KB', date:'Today, 5:18 PM', topic:'Budget planning', confidence:91, type:'doc', color:'blue', text:'budget planning spreadsheets money stuff finance forecast'},
  {name:'Kyoto_night_0142.heic', path:'Photos / Japan', size:'4.8 MB', date:'Yesterday', topic:'Travel · Night photography', confidence:96, type:'image', color:'purple', text:'photos travel Kyoto night city creative'},
  {name:'Project_Aurora_Final_v7.pptx', path:'Work / Aurora', size:'38.1 MB', date:'Aug 12, 2026', topic:'Project presentation', confidence:94, type:'doc', color:'orange', text:'work project aurora presentation final creative'},
  {name:'Vendor_Agreement_Adobe.docx', path:'Legal / Contracts', size:'840 KB', date:'Aug 10, 2026', topic:'Legal agreement', confidence:92, type:'doc', color:'blue', text:'legal vendor agreement contract Adobe work'},
  {name:'coffee_receipt_scan.png', path:'Inbox / Receipts', size:'1.1 MB', date:'Aug 9, 2026', topic:'Receipt · Food & drink', confidence:89, type:'image', color:'purple', text:'coffee receipt invoice paid finance money'},
];
let files = [...seedFiles], shown = 4, activeFilter = 'all';
const $ = (s) => document.querySelector(s);
const toast = (message) => { const el=$('#toast'); el.textContent=message; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2600); };

function render(){
  const q=$('#searchInput').value.toLowerCase().replaceAll('"','').trim();
  const terms=q.split(/\s+(?:and|or|near\/\d+)\s+/i).filter(x=>!['not'].includes(x));
  const filtered=files.filter(f=>(activeFilter==='all'||f.type===activeFilter) && (!q || terms.some(t=>`${f.name} ${f.text} ${f.topic}`.toLowerCase().includes(t.replace(/^not\s+/,'').trim()))));
  $('#resultLabel').textContent=`SHOWING ${Math.min(shown,filtered.length)} OF ${filtered.length} MATCHING FILES`;
  $('#results').innerHTML=filtered.slice(0,shown).map(f=>`<article class="file-row"><span class="filetype ${f.color}">${f.type==='image'?'IMG':f.name.split('.').pop().toUpperCase()}</span><div class="file-main"><b>${f.name}</b><small>${f.path} · ${f.size} · ${f.date}</small></div><span class="topic">${icon('spark')} ${f.topic}</span><span class="confidence"><small>AI CONFIDENCE</small><b>${f.confidence}%</b><i><u style="width:${f.confidence}%"></u></i></span><button class="more">${icon('dots')}</button></article>`).join('') || `<div class="empty">No files match this signal.<small>Try a broader semantic query or clear your filters.</small></div>`;
}
render();

$('#browse').onclick=()=>$('#folderInput').click();
$('#typeSelect').onclick=()=>$('#typeMenu').classList.toggle('open');
document.addEventListener('click',e=>{if(!e.target.closest('.route')) $('#typeMenu').classList.remove('open');});
$('#typeMenu').onchange=()=>{const n=$$('#typeMenu input:checked').length; $('#typeSelect span').textContent=n===7?'All supported types':`${n} categories selected`;};
function $$(s){return document.querySelectorAll(s)}
$('#destination').onclick=()=>toast('Destination picker is ready for desktop integration');
$('#searchGo').onclick=render;
$('#searchInput').onkeydown=e=>{if(e.key==='Enter')render()};
$$('.filters [data-filter]').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');activeFilter=b.dataset.filter;render();});
$('#loadMore').onclick=()=>{shown+=20;render();toast('Loaded the next result window');};
$$('.bubble').forEach(b=>b.onclick=()=>{$('#searchInput').value=b.dataset.query;render();});
$('#automate').onclick=$('#manageRules').onclick=()=>$('#automationDialog').showModal();
$('#saveRule').onclick=()=>toast('Pipeline activated in dry-run mode');
$('#moreFilters').onclick=()=>toast('Metadata facets: size, date, source, confidence');
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();$('#searchInput').focus();}if((e.metaKey||e.ctrlKey)&&e.key==='Enter')$('#automationDialog').showModal();});

const ingest=async list=>{
  const incoming=[...list]; if(!incoming.length)return;
  $('#runIndex').classList.add('working'); $('#runIndex').textContent=`INDEXING 0 / ${incoming.length}`;
  for(let i=0;i<incoming.length;i++){
    const x=incoming[i], ext=x.name.split('.').pop().toLowerCase(), category=Object.entries(categories).find(([,e])=>e.includes(ext))?.[0]||'Other';
    files.unshift({name:x.name,path:x.webkitRelativePath?.split('/').slice(0,-1).join(' / ')||'Dropped files',size:x.size>1048576?`${(x.size/1048576).toFixed(1)} MB`:`${Math.ceil(x.size/1024)} KB`,date:'Just now',topic:category,confidence:85+Math.floor(Math.random()*13),type:['jpg','jpeg','png','heic','gif','svg','tiff'].includes(ext)?'image':ext==='pdf'?'pdf':'doc',color:ext==='pdf'?'red':'blue',text:`${x.name} ${category}`});
    $('#runIndex').textContent=`INDEXING ${i+1} / ${incoming.length}`;
    if(i%20===0) await new Promise(r=>setTimeout(r,20));
  }
  $('#fileCount').textContent=(82419+incoming.length).toLocaleString(); $('#runIndex').classList.remove('working'); $('#runIndex').innerHTML=`${icon('spark')} RUN INDEX`; render(); toast(`${incoming.length} files indexed locally`);
};
$('#folderInput').onchange=e=>ingest(e.target.files);
$('#runIndex').onclick=()=>$('#folderInput').files.length?ingest($('#folderInput').files):$('#folderInput').click();
const dz=$('#dropZone');
['dragenter','dragover'].forEach(n=>dz.addEventListener(n,e=>{e.preventDefault();dz.classList.add('over')}));
['dragleave','drop'].forEach(n=>dz.addEventListener(n,e=>{e.preventDefault();dz.classList.remove('over')}));
dz.addEventListener('drop',e=>ingest(e.dataTransfer.files));
