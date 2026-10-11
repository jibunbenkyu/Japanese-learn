/* ===================== 預覽用邏輯 ===================== */
const LEVEL_BRACKETS = [
  { key: "70+", label: "70以上", min: 70, max: Infinity },
  { key: "65-69", label: "65～69", min: 65, max: 69.999 },
  { key: "60-64", label: "60～64", min: 60, max: 64.999 },
  { key: "55-59", label: "55～59", min: 55, max: 59.999 },
  { key: "50-54", label: "50～54", min: 50, max: 54.999 },
  { key: "45-49", label: "45～49", min: 45, max: 49.999 },
  { key: "40-44", label: "40～44", min: 40, max: 44.999 },
  { key: "<40", label: "40未滿", min: -Infinity, max: 39.999 },
];
function parseLevelRange(res){
  if (!res.level || typeof res.level !== "string") return null;
  const m = res.level.match(/([\d.]+)\s*[～~]\s*([\d.]+)/);
  return m ? { min: parseFloat(m[1]), max: parseFloat(m[2]) } : null;
}
function matchesLevelBracket(res, b){ const r = parseLevelRange(res); return !!r && r.max >= b.min && r.min <= b.max; }
function formatLevel(l){ if(!l) return "不限程度"; return Array.isArray(l) ? (l.length ? l.join("、") : "不限程度") : String(l); }
function priceClass(p){ return p === "免費" ? "price-free" : p === "部分免費" ? "price-partial" : "price-paid"; }
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const DARK_GLASS = "linear-gradient(135deg,rgba(255,255,255,.16),rgba(255,255,255,0) 42%),rgba(12,18,34,.46)";
const LIGHT_GLASS = "linear-gradient(135deg,rgba(255,255,255,.34),rgba(255,255,255,.08) 45%,rgba(255,255,255,.2))";
/* 四個大類別：配色沿用站內分類色（學習藍／檢定朱／留學金／閱讀苔綠） */
const CATS = [
  {key:"日語學習",       tab:"學習", giant:"日語學習", bg:"#16243f", tone:"#22385f", ink:"#f1ead9", accent:"#7fa6d6", on:"#16243f", glass:DARK_GLASS,
   lead:"辭典、單字、文法等學習網站與 App，比較優缺點、適合程度與費用。"},
  {key:"日語相關檢定",   tab:"檢定", giant:"日語檢定", bg:"#8f2e24", tone:"#a8362b", ink:"#f1ead9", accent:"#c6a15b", on:"#1e1b16", glass:DARK_GLASS,
   lead:"JLPT、BJT、J.TEST、JFT-Basic 的報名方式、時間與費用，一次比較。"},
  {key:"日本留學",       tab:"留學", giant:"日本留學", bg:"#c6a15b", tone:"#d3b374", ink:"#1e1b16", accent:"#16243f", on:"#f1ead9", glass:LIGHT_GLASS,
   lead:"日本各大學的偏差值區間、科系與入學管道，依程度篩選。"},
  {key:"日文閱讀與影音", tab:"影音", giant:"閱讀影音", bg:"#4f6b52", tone:"#5f7d63", ink:"#f1ead9", accent:"#e0d5b8", on:"#1e1b16", glass:DARK_GLASS,
   lead:"這個分類還沒有收錄資源，整理完成後會出現在這裡。"},
];
const inCat = key => RESOURCES.filter(r => r.category.includes(key));

/* 每個大類別的小類別列：全部由資料算出 */
function railFor(c){
  const rs = inCat(c.key);
  if (c.key === "日語學習"){
    return ["文法","JLPT","背單字","字典","漢字","聽力"].map(t => ({
      id:t, glyph:t, sub:`${rs.filter(r => (r.tags||[]).includes(t)).length} 筆`, test:r => (r.tags||[]).includes(t), label:t }));
  }
  if (c.key === "日語相關檢定"){
    return rs.map(r => { const m = r.name.match(/^[A-Za-z.\-]+/), g = m ? m[0] : r.name;
      return { id:r.id, glyph:g, sub:r.name.slice(g.length).trim() || formatLevel(r.level), test:x => x.id === r.id, label:g }; });
  }
  if (c.key === "日本留學"){
    return LEVEL_BRACKETS.map(b => ({ id:b.key, glyph:b.label, sub:`${rs.filter(r => matchesLevelBracket(r,b)).length} 所`,
      test:r => matchesLevelBracket(r,b), label:`偏差值 ${b.label}` }));
  }
  return [];
}
function subcats(rs){ return [...new Set(rs.flatMap(r => r.subcategory))]; }

const stage = document.getElementById('stage'), tabs = document.getElementById('tabs');
const q = document.getElementById('q'), scope = document.getElementById('scope'), resultsEl = document.getElementById('results');
let active = 0, activeItem = null;
const rails = CATS.map(railFor);

CATS.forEach((c,i)=>{
  const rs = inCat(c.key);
  const s = document.createElement('section');
  s.className = 'cat'; s.dataset.i = i; s.setAttribute('aria-label', c.key);
  s.style.cssText = `--c-bg:${c.bg};--c-tone:${c.tone};--c-ink:${c.ink};--c-accent:${c.accent}`;
  s.innerHTML = `
    <div class="giant" aria-hidden="true">${c.giant}</div>
    <header class="intro">
      <h2>${c.key}</h2>
      <p class="lead">${c.lead}</p>
      <div class="facts">
        ${rs.length ? `<span class="count">${rs.length} 筆資源</span>` : ``}
        ${subcats(rs).map(x => `<span class="pill sub">${esc(x)}</span>`).join('')}
      </div>
    </header>
    <nav class="subs ${rails[i].length ? '' : 'empty'}" aria-label="${c.key}小類別">
      ${rails[i].length ? rails[i].map((x,j)=>`<button class="rail-btn" type="button" data-j="${j}" aria-pressed="false"><span class="g">${esc(x.glyph)}</span><span class="l">${esc(x.sub)}</span></button>`).join('') : `還沒有資源，先看看其他分類`}
    </nav>`;
  stage.appendChild(s);

  const b = document.createElement('button');
  b.type = 'button'; b.textContent = c.tab; b.setAttribute('aria-label', c.key);
  b.addEventListener('click', ()=> s.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth'}));
  tabs.appendChild(b);
});

function setActive(i){
  active = i; const c = CATS[i], st = document.documentElement.style;
  st.setProperty('--bg', c.bg); st.setProperty('--ink', c.ink); st.setProperty('--accent', c.accent); st.setProperty('--on', c.on); st.setProperty('--glass-fill', c.glass);
  [...tabs.children].forEach((b,k)=> k===i ? b.setAttribute('aria-current','true') : b.removeAttribute('aria-current'));
  clearScope();
}
function updatePlaceholder(){
  q.placeholder = activeItem == null ? '搜尋 JLPT、N2、檢定' : `在${CATS[active].key}的「${rails[active][activeItem].label}」中搜尋`;
}
function clearScope(){
  activeItem = null; scope.hidden = true;
  document.querySelectorAll('.rail-btn[aria-pressed="true"]').forEach(x=>x.setAttribute('aria-pressed','false'));
  updatePlaceholder(); renderResults();
}
stage.addEventListener('click', e=>{
  const btn = e.target.closest('.rail-btn'); if(!btn) return;
  const j = +btn.dataset.j;
  if (activeItem === j){ clearScope(); return; }
  btn.parentElement.querySelectorAll('.rail-btn').forEach(x=>x.setAttribute('aria-pressed', x===btn ? 'true':'false'));
  activeItem = j; scope.hidden = false; scope.textContent = rails[active][j].label + ' ×';
  updatePlaceholder(); renderResults();
});
scope.addEventListener('click', ()=>{ clearScope(); q.focus(); });

/* 搜尋：未選小類別時搜全站，選了就限縮在該小類別（沿用站內比對欄位） */
function haystack(r){
  return [r.name, r.target, r.priceDetail || "", ...r.category, ...r.subcategory, ...[].concat(r.level || []),
          ...(r.tags||[]), ...(r.strengths||[]), ...(r.weaknesses||[]),
          ...((r.qsRankings||[]).map(x => x.subject || ""))].join(" ").toLowerCase();
}
function renderResults(){
  const term = q.value.trim().toLowerCase();
  if (!term && activeItem == null){ resultsEl.hidden = true; resultsEl.innerHTML = ''; return; }
  let list = RESOURCES;
  if (activeItem != null) list = inCat(CATS[active].key).filter(rails[active][activeItem].test);
  if (term) list = list.filter(r => haystack(r).includes(term));
  resultsEl.hidden = false;
  const limit = activeItem != null ? list.length : 6;
  resultsEl.innerHTML = list.length
    ? `<p class="rc">符合 ${list.length} 筆${list.length > limit ? `，先列出前 ${limit} 筆` : ''}，點選卡片看詳細資訊</p>` + list.slice(0, limit).map(r => `
        <button type="button" class="res" data-id="${esc(r.id)}" data-cat="${esc(r.category[0])}">
          <span class="row"><span class="name">${esc(r.name)}</span><span class="pill ${priceClass(r.price)}">${esc(r.price)}</span></span>
          <span class="meta"><span class="pill sub">${esc(r.subcategory.join('、'))}</span><span>${r.category[0] === '日本留學' ? '偏差值 ' : ''}${esc(formatLevel(r.level))}</span></span>
        </button>`).join('')
    : `<div class="empty-state">沒有符合的資源，換個關鍵字，或清除小類別再試一次。</div>`;
}

/* ---------- 詳細資訊面板 ---------- */
const detail = document.getElementById('detail');
let lastTrigger = null;
const rankNum = v => { const n = parseInt(String(v || '').replace(/\D/g, ''), 10); return Number.isNaN(n) ? 9999 : n; };
const li = a => (a || []).map(x => `<li>${esc(x)}</li>`).join('');
function openDetail(id, trigger){
  const r = RESOURCES.find(x => x.id === id); if (!r) return;
  lastTrigger = trigger;
  const isUni = r.category[0] === '日本留學';
  const fields = (r.fields || []).map(f => typeof f === 'string' ? {name:f} : f);
  const qs = [...(r.qsRankings || [])].sort((a,b) => rankNum(a.worldRank) - rankNum(b.worldRank));
  const hasJp = qs.some(x => x.japanRank);
  const note = r.admissionNote ? `<div class="amber"><span aria-hidden="true">⚠</span><span>${esc(r.admissionNote)}</span></div>` : '';
  const reg = (r.registrationMethod || r.registrationPeriod)
    ? `<div class="kv">${r.registrationMethod ? `<div><div class="lab">報名方式</div><p class="txt">${esc(r.registrationMethod)}</p></div>` : ''}${r.registrationPeriod ? `<div><div class="lab">報名時間</div><p class="txt">${esc(r.registrationPeriod)}</p></div>` : ''}</div>` : '';
  detail.innerHTML = `
    <article class="sheet" data-cat="${esc(r.category[0])}">
      <header class="sheet-head">
        <div>
          <h2 id="d-title">${esc(r.name)}</h2>
          <div class="meta"><span class="pill sub" style="background:#e9e0c8;color:var(--ink-soft)">${esc(r.subcategory.join('、'))}</span><span class="pill ${priceClass(r.price)}">${esc(r.price)}</span></div>
        </div>
        <button type="button" class="close" id="d-close" aria-label="關閉">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
      </header>
      <div class="sheet-body">
        <div class="kv">
          <div><div class="lab">${isUni ? '偏差值' : '程度'}</div><div class="big">${esc(formatLevel(r.level))}</div>${isUni ? `<p class="note-src">資料來源：河合塾 Kei-Net　2027年度　一般選拔</p>` : ''}</div>
          <div><div class="lab">費用</div><p class="txt">${esc(r.priceDetail || r.price)}</p></div>
        </div>
        ${note}
        ${reg}
        ${r.target ? `<div><div class="lab">適合對象</div><div class="tags-row">${[].concat(r.target).map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div></div>` : ''}
        ${fields.length ? `<div><div class="lab">可報考科系領域</div><div class="tags-row">${fields.map(f => `<span class="tag field">${esc(f.name)}</span>`).join('')}</div></div>` : ''}
        ${qs.length ? `<div><div class="lab">QS 學科排名</div>
          <div class="qs" role="table"><span class="h">學科</span><span class="h r">世界</span><span class="h r">${hasJp ? '日本' : ''}</span>
            ${qs.map((x,i) => `<span>${esc(x.subject)}</span><span class="r ${i < 3 ? 'top3' : ''}">${esc(x.worldRank || '—')}</span><span class="r">${hasJp ? esc(x.japanRank || '—') : ''}</span>`).join('')}
          </div></div>` : ''}
        <div class="pc">
          <div class="p"><div class="lab">優點</div><ul>${li(r.strengths)}</ul></div>
          <div class="c"><div class="lab">缺點</div><ul>${li(r.weaknesses)}</ul></div>
        </div>
        <div class="links">
          ${r.officialUrl ? `<a class="btn main" href="${esc(r.officialUrl)}" target="_blank" rel="noopener noreferrer">前往官網</a>` : ''}
          ${r.admissionPdfUrl ? `<a class="btn line" href="${esc(r.admissionPdfUrl)}" target="_blank" rel="noopener noreferrer">入學簡章 PDF</a>` : ''}
        </div>
      </div>
    </article>`;
  detail.showModal();
  detail.querySelector('.sheet').scrollTop = 0;
}
resultsEl.addEventListener('click', e => { const b = e.target.closest('.res'); if (b) openDetail(b.dataset.id, b); });
detail.addEventListener('click', e => { if (e.target === detail || e.target.closest('#d-close')) detail.close(); });
detail.addEventListener('close', () => { if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus(); });
q.addEventListener('input', renderResults);
document.getElementById('search').addEventListener('submit', e => { e.preventDefault(); renderResults(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && !detail.open && (q.value || activeItem != null)){ q.value = ''; clearScope(); } });

const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) setActive(+en.target.dataset.i); }), {root:stage, threshold:.6});
document.querySelectorAll('.cat').forEach(s => io.observe(s));

/* 液態玻璃：以位移貼圖在邊緣做出透鏡折射（Chromium）；其他瀏覽器退回霧面模糊 */
const glass = document.getElementById('search'), map = document.getElementById('lensMap'), filt = document.getElementById('lens');
let lensRaf = 0;
function buildLens(){
  const w = Math.round(glass.offsetWidth), h = Math.round(glass.offsetHeight); if (!w || !h) return;
  const fx = Math.min(.5, 22/w).toFixed(3), fy = Math.min(.5, 22/h).toFixed(3);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><defs>
    <linearGradient id='x' x1='0' x2='1' y1='0' y2='0'><stop offset='0' stop-color='rgb(255,0,0)'/><stop offset='${fx}' stop-color='rgb(128,0,0)'/><stop offset='${1-fx}' stop-color='rgb(128,0,0)'/><stop offset='1' stop-color='rgb(0,0,0)'/></linearGradient>
    <linearGradient id='y' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='rgb(0,255,0)'/><stop offset='${fy}' stop-color='rgb(0,128,0)'/><stop offset='${1-fy}' stop-color='rgb(0,128,0)'/><stop offset='1' stop-color='rgb(0,0,0)'/></linearGradient></defs>
    <rect width='100%' height='100%' fill='rgb(0,0,0)'/><rect width='100%' height='100%' fill='url(#x)'/><rect width='100%' height='100%' fill='url(#y)' style='mix-blend-mode:screen'/></svg>`;
  const href = 'data:image/svg+xml,' + encodeURIComponent(svg);
  [filt, map].forEach(n => { n.setAttribute('width', w); n.setAttribute('height', h); });
  map.setAttribute('href', href); map.setAttributeNS('http://www.w3.org/1999/xlink','href', href);
}
function queueLens(){ cancelAnimationFrame(lensRaf); lensRaf = requestAnimationFrame(buildLens); }
const isChromium = /Chrome|Chromium|Edg\//.test(navigator.userAgent) && !/OPR\/|Firefox/.test(navigator.userAgent);
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
if (isChromium && finePointer && CSS.supports('backdrop-filter','url(#lens)')){
  glass.classList.add('lens');
  new ResizeObserver(queueLens).observe(glass);
  buildLens();
}

/* 滑動中隱藏搜尋框，停止後再浮現。手指還按在螢幕上時保持隱藏，
   避免手機上滑動停頓的空檔讓它反覆閃現；偏好減少動態的人不隱藏。 */
const calmMotion = matchMedia('(prefers-reduced-motion: reduce)');
let moveTimer = 0, touching = false, hiddenNow = false;
function setHidden(h){
  if (h === hiddenNow) return;
  hiddenNow = h;
  glass.classList.toggle('moving', h); resultsEl.classList.toggle('moving', h);
}
function settle(){ clearTimeout(moveTimer); if (!touching) setHidden(false); }
function settleSoon(){ clearTimeout(moveTimer); moveTimer = setTimeout(settle, 140); }
stage.addEventListener('scroll', () => { if (calmMotion.matches) return; setHidden(true); settleSoon(); }, {passive:true});
stage.addEventListener('scrollend', settle);
stage.addEventListener('touchstart', () => { touching = true; }, {passive:true});
const release = () => { touching = false; if (hiddenNow) settleSoon(); };
stage.addEventListener('touchend', release, {passive:true});
stage.addEventListener('touchcancel', release, {passive:true});

setActive(0);
