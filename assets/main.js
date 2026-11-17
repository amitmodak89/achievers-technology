/* Achievers Technology — achievers.os
   All editable content lives in DATA below. */
(() => {
'use strict';

const DATA = {
  email: 'support@achieverstechnology.com',
  eras: [
    { when: 'Oct 2013', year: 2013, title: 'The first commit', glow: 'rgba(45,156,255,.28)',
      text: 'A one-laptop studio building websites for schools, classes and local businesses. Hand-written HTML5, PHP and every CMS worth knowing.',
      tech: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'jQuery', 'WordPress', 'Joomla', 'Drupal'] },
    { when: '2014', year: 2014, title: 'Going mobile', glow: 'rgba(255,177,59,.25)',
      text: 'Apps for every pocket: Android, iOS, BlackBerry and even Tizen. A Windows 8 launcher, exam-prep apps, utilities and games.',
      tech: ['Android', 'Java', 'iOS', 'Objective-C', 'BlackBerry', 'Tizen', 'Windows 8'] },
    { when: '2015 — 2016', year: 2015, title: 'Cross-platform & commerce', glow: 'rgba(25,195,125,.22)',
      text: 'One codebase, many screens. E-commerce stores, desktop software in Java and .NET, SEO, and portals for legal and education clients.',
      tech: ['Cordova', 'Ionic', '.NET', 'C#', 'CodeIgniter', 'OpenCart', 'Magento', 'SEO'] },
    { when: '2017 — 2022', year: 2017, title: 'Inside the enterprise', glow: 'rgba(160,110,255,.25)',
      text: 'Development embedded with companies across industries: APIs, integrations, dashboards and products serving real users at scale.',
      tech: ['Node.js', 'React', 'Angular', 'Spring', 'REST', 'AWS', 'Docker', 'CI/CD'] },
    { when: '2023 — now', year: 2023, title: 'AI-native', glow: 'rgba(255,90,120,.22)',
      text: 'Agentic flows that automate the daily routine of an existing company, LLM pipelines, automated media production and mobile games.',
      tech: ['Python', 'LLMs', 'Claude', 'MCP', 'Agents', 'GCP', 'AWS', 'Flutter'] },
  ],
  stack: [
    { name: 'Web', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'PHP', 'Laravel', 'WordPress'] },
    { name: 'Mobile', items: ['Android', 'Kotlin', 'iOS', 'Swift', 'Flutter', 'React Native', 'Ionic', 'Tizen'] },
    { name: 'Backend', items: ['Node.js', 'Java', 'Spring', '.NET', 'C#', 'Python', 'REST', 'GraphQL'] },
    { name: 'Data & Cloud', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'AWS', 'GCP', 'Docker'] },
    { name: 'IoT & Hardware', items: ['Sensors', 'Microcontrollers', 'Telemetry', 'OCR', 'Image processing', 'Scanners'] },
    { name: 'AI & Automation', items: ['LLMs', 'Claude', 'OpenAI', 'MCP', 'Agents', 'RAG', 'TTS', 'Workflows'] },
  ],
  lab: [
    { tag: 'Research', title: 'Phone-to-phone calls. No internet. No SIM.', glyph: 'calls',
      text: 'R&D into voice calls that travel directly between handsets, with no mobile network, no data plan and no SIM card in the loop.',
      tech: ['Android', 'Device-to-device', 'Real-time audio', 'Networking'] },
    { tag: 'Hardware', title: 'Automated cheque scanning machines', glyph: 'cheque',
      text: 'Software for machines that capture, read and process cheques automatically, turning paper into clean, verified data.',
      tech: ['Image processing', 'OCR', 'Device drivers', 'Banking workflows'] },
    { tag: 'Embedded', title: 'Sensor-driven IoT programming', glyph: 'iot',
      text: 'Programming sensors and connected devices, and the pipelines and dashboards that turn their readings into decisions.',
      tech: ['Sensors', 'Microcontrollers', 'Telemetry', 'Dashboards'] },
    { tag: 'Now', title: 'Agentic flows for the daily grind', glyph: 'agents',
      text: 'AI agents that take over the routine daily workflows of an existing company — reading, deciding, updating systems and reporting back.',
      tech: ['LLM agents', 'MCP', 'Integrations', 'Workflow automation'] },
  ],
  domains: [
    { t: 'Education & EdTech', d: 'School websites, exam-prep apps, tutorials and learning portals.', px: '..#...###.#####.#.#..###.', wide: true },
    { t: 'Banking & Finance', d: 'Cheque scanning automation, tax apps, invoicing and finance dashboards.', px: '....#...##..###.##########' },
    { t: 'Legal', d: 'Portals for advocates: cases, clients and registrations.', px: '..#..#####.#.#...#...###.' },
    { t: 'E-commerce & Retail', d: 'Storefronts, catalogues, carts and payment flows.', px: '.###..#.#.###############' },
    { t: 'Media & Content', d: 'Automated video and podcast pipelines, publishing at daily cadence.', px: '#....###..########..#....', wide: true },
    { t: 'Gaming', d: 'Casual mobile games with ad monetisation.', px: '.#.#.######.#.#######...#' },
    { t: 'Social & Consumer', d: 'Messaging, sharing and privacy utilities for everyday phones.', px: '######.#.######.#...#....' },
    { t: 'Telecom', d: 'Device-to-device calling research — no network, no SIM.', px: '..#...#.#.#.#.#..#....#..' },
    { t: 'Enterprise Operations', d: 'Agentic automation of daily routines, internal tools and integrations inside larger companies.', px: '###..#.#..######.#.######', wide: true },
    { t: 'IoT & Smart Devices', d: 'Sensor programming, connected devices and real-time telemetry.', px: '#.#.#.###.#####.###.#.#.#', wide: true },
    { t: 'Cloud & SaaS', d: 'Cloud management on AWS and GCP, and SaaS product work.', px: '......##..##########.....' },
    { t: 'Corporate Training', d: 'One-to-one and group training programmes.', px: '######...######..#...#.#.' },
  ],
  shipped: ['Resonier', 'RacerRadar', 'CorpEngage', 'Windows 8 Launcher', 'NEET Prep', 'Indian Tax Info', 'Android Tutorial', 'PHP Tutorial', 'Dosti Ka Paigam', 'Gallery Hider', 'Tic Tac Toe', 'Advocate Portal', 'School Websites'],
  worked: ['RNV', 'IES', 'Tweak The Future Innovations', 'Digital Cloud Cafe', 'Agile Clouds', 'Bharadia Brothers'],
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(pointer: fine)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

$('#yr').textContent = new Date().getFullYear();

/* ---------- boot ---------- */
function boot() {
  const el = $('.boot'), yEl = $('#bootYear');
  const end = new Date().getFullYear();
  const go = () => { el.classList.add('done'); document.body.classList.add('ready'); setTimeout(() => el.remove(), 1000); };
  let seen = false;
  try { seen = sessionStorage.getItem('booted') === '1'; sessionStorage.setItem('booted', '1'); } catch (e) { /* storage blocked */ }
  if (RM || seen) { el.remove(); requestAnimationFrame(() => document.body.classList.add('ready')); return; }
  const t0 = performance.now(), dur = 1400;
  (function tick(t) {
    const p = clamp((t - t0) / dur);
    yEl.textContent = Math.round(2013 + (end - 2013) * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick); else setTimeout(go, 200);
  })(t0);
}

/* ---------- split hero letters ---------- */
$$('[data-split]').forEach((w, wi) => {
  const txt = w.textContent;
  w.textContent = '';
  w.setAttribute('aria-hidden', 'true');
  [...txt].forEach((c, i) => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c;
    s.style.transitionDelay = (0.25 + wi * 0.18 + i * 0.035) + 's';
    w.appendChild(s);
  });
});

/* ---------- clock ---------- */
const clockEl = $('#clock');
const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
const tickClock = () => { clockEl.textContent = fmt.format(new Date()); };
tickClock(); setInterval(tickClock, 1000);

/* ---------- hero particle field ---------- */
const field = (() => {
  const cv = $('#field'), ctx = cv.getContext('2d');
  let W = 0, H = 0, DPR = 1, pts = [], ring = [], step = 4, size = 2.4;
  let cx = 0, cy = 0, lw = 0, lh = 0;
  let mouse = { x: -9999, y: -9999 }, scatter = 0, visible = true, party = false, img = null, t = 0;
  const HEAD = ['#0a5f93', '#1677c4', '#2d9cff'];

  function layout() {
    const r = cv.getBoundingClientRect();
    W = r.width; H = r.height; DPR = Math.min(2, devicePixelRatio || 1);
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const wide = W > 900;
    lh = wide ? Math.min(H * 0.72, 640) : Math.min(H * 0.32, W * 0.8);
    lw = lh * (600 / 644);
    cx = wide ? W * 0.7 : W * 0.55;
    cy = wide ? H * 0.5 : Math.max(lh * 0.5 + 70, H * 0.24);
    step = clamp(Math.round(lh / 105), 3, 6);
    size = step * 0.68;
    if (img) sample();
  }

  function sample() {
    const oc = document.createElement('canvas');
    oc.width = Math.round(lw); oc.height = Math.round(lh);
    const o = oc.getContext('2d');
    o.drawImage(img, 0, 0, oc.width, oc.height);
    let d;
    try { d = o.getImageData(0, 0, oc.width, oc.height).data; } catch (e) { return; }
    const ox = cx - lw / 2, oy = cy - lh / 2;
    const next = [];
    for (let y = 0; y < oc.height; y += step) {
      for (let x = 0; x < oc.width; x += step) {
        const i = (y * oc.width + x) * 4;
        const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
        if (a < 140) continue;
        let kind;
        if (b > r + 40 && b > 90) kind = 0;               // head blue
        else if (r > 190 && g > 120 && b < 140) kind = 1; // orange pixels
        else continue;                                   // grey ring / white: drawn procedurally
        next.push({ tx: ox + x, ty: oy + y, kind, c: kind ? 3 : Math.min(2, Math.floor((1 - y / oc.height) * 2.2 + Math.random() * 0.8)) });
      }
    }
    // reuse existing particles so resizes morph instead of popping
    pts = next.map((n, i) => {
      const p = pts[i] || { x: Math.random() * W, y: Math.random() * H, vx: 0, vy: 0, a: Math.random() * Math.PI * 2, s: 0.4 + Math.random() };
      return Object.assign(p, n);
    });
    ring = [];
    const lanes = 3, N = Math.round(lw / step * 2.2);
    for (let l = 0; l < lanes; l++) for (let k = 0; k < N; k++) ring.push({ th: (k / N) * Math.PI * 2, lane: l, j: Math.random() });
  }

  function ringPos(r) {
    const rx = lw * 0.43 + r.lane * step * 0.9, ry = lh * 0.12 + r.lane * step * 0.5;
    const th = r.th + t * 0.25;
    const ex = Math.cos(th) * rx, ey = Math.sin(th) * ry;
    const tilt = -0.36, ct = Math.cos(tilt), st = Math.sin(tilt);
    return { x: cx - lw * 0.06 + ex * ct - ey * st, y: cy - lh * 0.13 + ex * st + ey * ct, z: Math.sin(th) };
  }

  function drawRing(front, sc) {
    ctx.fillStyle = front ? 'rgba(207,214,226,.85)' : 'rgba(207,214,226,.22)';
    for (const r of ring) {
      const p = ringPos(r);
      if ((p.z > 0) !== front) continue;
      const dx = (r.j - 0.5) * W * 1.4 * sc, dy = (r.lane - 1 + r.j) * H * 0.6 * sc;
      const s = size * (0.8 + 0.35 * (p.z + 1) / 2);
      ctx.fillRect(p.x + dx, p.y + dy, s, s);
    }
  }

  function frame() {
    t += 1 / 60;
    ctx.clearRect(0, 0, W, H);
    const sc = scatter * scatter;
    drawRing(false, sc);
    const buckets = [[], [], [], []];
    for (const p of pts) {
      let tx = p.tx + Math.sin(t * 1.3 + p.a) * 0.9;
      let ty = p.ty + Math.cos(t * 1.1 + p.a) * 0.9;
      if (sc > 0) { tx += Math.cos(p.a) * W * 0.9 * sc * p.s; ty += Math.sin(p.a) * H * 0.9 * sc * p.s - sc * 200; }
      p.vx += (tx - p.x) * 0.045; p.vy += (ty - p.y) * 0.045;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 120 * 120) { const d = Math.sqrt(d2) || 1, f = (1 - d / 120) * 7; p.vx += dx / d * f; p.vy += dy / d * f; }
      p.vx *= 0.86; p.vy *= 0.86;
      p.x += p.vx; p.y += p.vy;
      buckets[p.c].push(p);
    }
    for (let b = 0; b < 4; b++) {
      ctx.fillStyle = party ? `hsl(${(t * 120 + b * 70) % 360} 90% 60%)` : (b === 3 ? '#ffb13b' : HEAD[b]);
      for (const p of buckets[b]) ctx.fillRect(p.x, p.y, size, size);
    }
    drawRing(true, sc);
    if (visible && !RM) requestAnimationFrame(frame);
  }

  function shock(x, y) {
    for (const p of pts) {
      const dx = p.x - x, dy = p.y - y, d = Math.sqrt(dx * dx + dy * dy) || 1;
      if (d < 320) { const f = (1 - d / 320) * 38; p.vx += dx / d * f; p.vy += dy / d * f; }
    }
  }

  function init() {
    layout();
    img = new Image();
    img.onload = () => {
      sample();
      if (RM) { pts.forEach(p => { p.x = p.tx; p.y = p.ty; }); frame(); }
      else requestAnimationFrame(frame);
    };
    img.src = 'assets/logo-2013.png';
    addEventListener('resize', () => { layout(); if (RM) { pts.forEach(p => { p.x = p.tx; p.y = p.ty; }); frame(); } });
    const hero = cv.parentElement;
    hero.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    hero.addEventListener('pointerdown', e => { if (e.target.closest('a')) return; const r = cv.getBoundingClientRect(); shock(e.clientX - r.left, e.clientY - r.top); });
    new IntersectionObserver(([e]) => {
      const was = visible; visible = e.isIntersecting;
      if (visible && !was && !RM && img && img.complete) requestAnimationFrame(frame);
    }).observe(hero);
  }
  return { init, setScatter: v => { scatter = v; }, party: () => { party = !party; } };
})();

/* ---------- manifesto words ---------- */
const manifesto = $('[data-words]');
(() => {
  const hl = new Set(['October', '2013', 'stubborn', 'classrooms,', 'courtrooms,', 'storefronts', 'studios.', 'hundred', 'works.']);
  const words = manifesto.textContent.trim().split(/\s+/);
  manifesto.setAttribute('aria-label', manifesto.textContent.trim());
  manifesto.innerHTML = words.map(w => `<span class="w${hl.has(w) ? ' hl' : ''}" aria-hidden="true">${esc(w)}</span>`).join(' ');
})();
const mWords = $$('.w', manifesto);

/* ---------- counters ---------- */
const counted = new WeakSet();
function runCounter(el) {
  if (counted.has(el)) return; counted.add(el);
  const to = +el.dataset.count, suf = el.dataset.suffix || '';
  if (RM) { el.textContent = to + suf; return; }
  const t0 = performance.now();
  (function f(t) { const p = clamp((t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))) + suf; if (p < 1) requestAnimationFrame(f); })(t0);
}

/* ---------- timeline ---------- */
const tlSec = $('#timeline'), tlTrack = $('#tlTrack'), tlYear = $('#tlYear'), tlBar = $('#tlBar');
tlSec.style.setProperty('--n', DATA.eras.length);
tlTrack.innerHTML = DATA.eras.map(e => `
  <article class="era" style="--glow:${e.glow}">
    <span class="era-when">${esc(e.when)}</span>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.text)}</p>
    <div class="chips">${e.tech.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
  </article>`).join('');

/* ---------- stack orbit ---------- */
const orbit = (() => {
  const el = $('#orbit'), svg = $('#orbitRings'), legend = $('#orbitLegend'), list = $('#orbitList');
  const planets = [];
  let sel = -1, speed = 1, target = 1, t = 0, W = 0, H = 0, running = false;

  DATA.stack.forEach((cat, ri) => {
    cat.items.forEach((name, k) => {
      const d = document.createElement('span');
      d.className = 'planet'; d.textContent = name;
      el.appendChild(d);
      planets.push({ el: d, ri, a0: (k / cat.items.length) * Math.PI * 2 + ri * 0.7 });
      d.addEventListener('mouseenter', () => { target = 0; });
      d.addEventListener('mouseleave', () => { target = 1; });
    });
    const b = document.createElement('button');
    b.className = 'leg'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', 'false');
    b.innerHTML = `<span>${esc(cat.name)}</span><small>${String(cat.items.length).padStart(2, '0')}</small>`;
    b.addEventListener('click', () => select(sel === ri ? -1 : ri));
    b.addEventListener('mouseenter', () => { if (FINE) preview(ri); });
    b.addEventListener('mouseleave', () => { if (FINE) preview(sel); });
    legend.appendChild(b);
  });
  el.addEventListener('mouseenter', () => { target = 0.15; });
  el.addEventListener('mouseleave', () => { target = 1; });

  function radii(ri) {
    const n = DATA.stack.length, f = 0.4 + (ri / (n - 1)) * 0.58;
    return { rx: W * 0.5 * f * 0.92, ry: H * 0.5 * f * 0.86 };
  }
  function drawRings() {
    const r = el.getBoundingClientRect(); W = r.width; H = r.height;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = DATA.stack.map((_, ri) => { const { rx, ry } = radii(ri); return `<ellipse cx="${W / 2}" cy="${H / 2}" rx="${rx}" ry="${ry}" data-ri="${ri}"/>`; }).join('');
    preview(sel);
  }
  function preview(ri) {
    $$('ellipse', svg).forEach(e => e.classList.toggle('on', +e.dataset.ri === ri));
    planets.forEach(p => { p.el.classList.toggle('on', p.ri === ri); p.el.classList.toggle('dim', ri >= 0 && p.ri !== ri); });
    list.textContent = ri >= 0 ? DATA.stack[ri].items.join('  ·  ') : 'Select a ring →  or hover the system to freeze it.';
  }
  function select(ri) {
    sel = ri;
    $$('.leg', legend).forEach((b, i) => b.setAttribute('aria-selected', String(i === ri)));
    preview(ri);
  }
  function frame() {
    speed += (target - speed) * 0.06;
    t += 0.0035 * speed;
    for (const p of planets) {
      const { rx, ry } = radii(p.ri);
      const dir = p.ri % 2 ? -1 : 1;
      const a = p.a0 + t * dir * (1.4 - p.ri * 0.15);
      const z = Math.sin(a);
      const x = W / 2 + Math.cos(a) * rx, y = H / 2 + z * ry;
      const s = 0.72 + 0.38 * (z + 1) / 2;
      p.el.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%) scale(${s.toFixed(3)})`;
      p.el.style.zIndex = z > 0 ? 60 + Math.round(z * 30) : 10 + Math.round((z + 1) * 30);
      p.el.style.opacity = (0.35 + 0.65 * (z + 1) / 2).toFixed(2);
    }
    if (running) requestAnimationFrame(frame);
  }
  function init() {
    drawRings();
    addEventListener('resize', drawRings);
    if (RM) { frame(); return; }
    new IntersectionObserver(([e]) => {
      const was = running; running = e.isIntersecting;
      if (running && !was) requestAnimationFrame(frame);
    }).observe(el);
    frame();
  }
  return { init, select };
})();

/* ---------- domains bento ---------- */
$('#bento').innerHTML = DATA.domains.map((d, i) => `
  <article class="card rv${d.wide ? ' wide' : ''}">
    <span class="card-num">${String(i + 1).padStart(2, '0')}</span>
    <div class="px" aria-hidden="true">${[...d.px].map(c => `<i${c === '#' ? ' class="on"' : ''}></i>`).join('')}</div>
    <h3>${esc(d.t)}</h3>
    <p>${esc(d.d)}</p>
  </article>`).join('');
if (FINE && !RM) {
  $$('.card').forEach(c => {
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty('--mx', x + 'px'); c.style.setProperty('--my', y + 'px');
      c.style.transform = `perspective(900px) rotateX(${((y / r.height) - 0.5) * -7}deg) rotateY(${((x / r.width) - 0.5) * 9}deg)`;
    });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });
}

/* ---------- lab ---------- */
const GLYPHS = {
  calls: `<rect x="8" y="20" width="20" height="40" rx="4" class="g-s"/><rect x="92" y="20" width="20" height="40" rx="4" class="g-s"/>
    ${[0, 1, 2].map(i => `<path d="M${36 + i * 7} ${33 - i * 3} q${6 + i * 2} ${7 + i * 3} 0 ${14 + i * 6}" class="g-s"><animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="${i * 0.25}s" repeatCount="indefinite"/></path>`).join('')}
    ${[0, 1, 2].map(i => `<path d="M${84 - i * 7} ${33 - i * 3} q-${6 + i * 2} ${7 + i * 3} 0 ${14 + i * 6}" class="g-s"><animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="${0.75 + i * 0.25}s" repeatCount="indefinite"/></path>`).join('')}
    <line x1="56" y1="66" x2="64" y2="74" class="g-o-s"/><line x1="64" y1="66" x2="56" y2="74" class="g-o-s"/>`,
  cheque: `<rect x="8" y="16" width="104" height="48" rx="4" class="g-s"/><path d="M18 30h46M18 40h30M76 40h26M18 54h84" class="g-d"/>
    <rect x="8" y="10" width="3" height="60" class="g-o"><animate attributeName="x" values="8;109;8" dur="2.6s" repeatCount="indefinite"/></rect>`,
  iot: (() => { const n = [[20, 18], [60, 10], [102, 22], [24, 64], [96, 62]]; return n.map(([x, y]) => `<line x1="60" y1="40" x2="${x}" y2="${y}" class="g-d"/>`).join('') +
    n.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="4" class="g-b"><animate attributeName="r" values="3;6;3" dur="1.8s" begin="${i * 0.3}s" repeatCount="indefinite"/></circle>`).join('') +
    `<rect x="52" y="32" width="16" height="16" rx="3" class="g-o"/>`; })(),
  agents: `${[8, 47, 86].map((x, i) => `<rect x="${x}" y="26" width="26" height="24" rx="5" class="g-s"><animate attributeName="fill" values="transparent;rgba(255,177,59,.5);transparent" dur="2.4s" begin="${i * 0.8}s" repeatCount="indefinite"/></rect>`).join('')}
    <path d="M34 38h13M73 38h13" class="g-d"/><path d="M99 52 q0 18 -39 18 q-39 0 -39 -18" class="g-d" stroke-dasharray="3 4"/>
    <circle r="3" class="g-o"><animateMotion dur="2.4s" repeatCount="indefinite" path="M21 38 H99 q0 32 -39 32 q-39 0 -39 -32"/></circle>`,
};
$('#labList').innerHTML = DATA.lab.map((l, i) => `
  <article class="lab-row rv">
    <span class="lab-idx">R/${String(i + 1).padStart(2, '0')}</span>
    <svg class="lab-glyph" viewBox="0 0 120 80" aria-hidden="true">${GLYPHS[l.glyph]}</svg>
    <div class="lab-main">
      <span class="lab-tag${l.tag === 'Now' ? ' now' : ''}">${esc(l.tag)}</span>
      <h3>${esc(l.title)}</h3>
      <p>${esc(l.text)}</p>
      <div class="chips">${l.tech.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
    </div>
  </article>`).join('');
if (RM) $$('.lab-glyph').forEach(s => s.pauseAnimations && s.pauseAnimations());

/* ---------- marquees ---------- */
const mqRow = (arr) => { const h = arr.map(x => `<span>${esc(x)}</span><b></b>`).join(''); return h + h + h; };
$('#mq1').innerHTML = mqRow(DATA.shipped);
$('#mq2').innerHTML = mqRow(DATA.worked.concat(['since 2013']));
const mqs = $$('.marquee').map(m => ({ el: m.firstElementChild, dir: +m.dataset.dir, x: 0 }));
let lastY = scrollY, vel = 0;
function mqFrame() {
  const dy = scrollY - lastY; lastY = scrollY;
  vel += (dy - vel) * 0.1;
  for (const m of mqs) {
    const w = m.el.scrollWidth / 3;
    m.x -= (0.6 + Math.abs(vel) * 0.25) * m.dir;
    if (m.x <= -w) m.x += w; if (m.x > 0) m.x -= w;
    m.el.style.transform = `translateX(${m.x}px) skewX(${clamp(-vel * 0.4, -12, 12)}deg)`;
  }
  requestAnimationFrame(mqFrame);
}
if (!RM) requestAnimationFrame(mqFrame);

/* ---------- scroll driver ---------- */
const navLinks = $$('.nav nav a');
const sections = navLinks.map(a => $(a.getAttribute('href')));
function onScroll() {
  const vh = innerHeight, y = scrollY;
  field.setScatter(clamp(y / (vh * 0.85)));

  const mr = manifesto.getBoundingClientRect();
  const mp = clamp((vh * 0.85 - mr.top) / (mr.height + vh * 0.25));
  const lit = Math.floor(mp * mWords.length * 1.05);
  mWords.forEach((w, i) => w.classList.toggle('lit', RM || i < lit));

  if (innerWidth > 760) {
    const r = tlSec.getBoundingClientRect();
    const p = clamp(-r.top / (r.height - vh));
    const max = tlTrack.scrollWidth - innerWidth;
    tlTrack.style.transform = `translateX(${-p * Math.max(0, max)}px)`;
    tlBar.style.width = (p * 100) + '%';
    const idx = Math.min(DATA.eras.length - 1, Math.floor(p * DATA.eras.length * 0.999));
    const yr = String(DATA.eras[idx].year);
    if (tlYear.textContent !== yr) tlYear.textContent = yr;
  }

  let cur = -1;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * 0.4) cur = i; });
  navLinks.forEach((a, i) => a.classList.toggle('active', i === cur));
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

/* ---------- reveal ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  if (e.target.dataset.count) runCounter(e.target);
  io.unobserve(e.target);
}), { threshold: 0.15 });
$$('.section-head, .stat, .term, .contact-title, .mail').forEach(el => { el.classList.add('rv'); io.observe(el); });
$$('.card, [data-count], .lab-row').forEach(el => io.observe(el));
$$('.card').forEach((c, i) => { c.style.transitionDelay = (i % 4) * 0.06 + 's'; });

/* ---------- cursor + magnetic ---------- */
if (FINE && !RM) {
  document.documentElement.classList.add('has-cursor');
  const cur = $('.cursor'), dot = $('.cursor-dot'), ring = $('.cursor-ring');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
  addEventListener('pointerdown', () => cur.classList.add('down'));
  addEventListener('pointerup', () => cur.classList.remove('down'));
  document.addEventListener('pointerover', e => cur.classList.toggle('hover', !!e.target.closest('a,button,.planet,input')));
  (function f() { rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(f); })();

  $$('.magnetic').forEach(m => {
    m.addEventListener('pointermove', e => {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    m.addEventListener('pointerleave', () => { m.style.transition = 'transform .5s cubic-bezier(.2,.9,.1,1)'; m.style.transform = ''; setTimeout(() => { m.style.transition = ''; }, 500); });
  });
}

/* ---------- terminal ---------- */
const term = (() => {
  const out = $('#termOut'), form = $('#termForm'), input = $('#termIn'), body = $('#termBody');
  const hist = []; let hi = 0;
  const line = (html, cls = 'o') => { const d = document.createElement('div'); d.className = cls; d.innerHTML = html; out.appendChild(d); body.scrollTop = body.scrollHeight; };
  const pad = (s, n) => s + ' '.repeat(Math.max(1, n - s.length));
  const LOGO = `<span class="a">   ▪▪</span>
<span class="a">  ▪  ▪▪</span><span class="b">█████</span>
<span class="m"> ◜</span><span class="a"> ▪▪</span><span class="b">█</span>  <span class="b">███</span><span class="m">◝</span>
<span class="m">◟───</span><span class="b">█████████</span><span class="m">──◞</span>
    <span class="b">█████████</span>
     <span class="b">███████</span>
      <span class="b">█████</span>`;

  const cmds = {
    help: () => line([
      ['about', 'who we are'], ['history', 'thirteen years in five lines'], ['stack [ring]', 'technologies, e.g. stack mobile'],
      ['lab', 'R&D: radios, scanners, sensors, agents'],
      ['domains', 'industries we have worked in'], ['projects', 'things we shipped'], ['contact', 'start a conversation'],
      ['logo', 'draw the mark'], ['believe', 'the motto'], ['clear', 'wipe the screen'],
    ].map(([c, d]) => `<span class="a">${pad(c, 16)}</span>${d}`).join('\n') + `\n<span class="m">tip: ↑/↓ for history, tab to autocomplete. There may be a hidden command or two.</span>`),
    about: () => line(`Achievers Technology — an independent software development studio from Maharashtra, India.
Founded October 2013. Proprietorship. Development, the entire time.
Web · Mobile · Backend · Cloud · AI.`),
    history: () => line(DATA.eras.map(e => `<span class="a">${pad(e.when, 14)}</span>${esc(e.title)}`).join('\n')),
    stack: (arg) => {
      const q = (arg || '').toLowerCase();
      const cats = q ? DATA.stack.filter(c => c.name.toLowerCase().includes(q)) : DATA.stack;
      if (!cats.length) return line(`no ring called "${esc(arg)}". try: ${DATA.stack.map(c => c.name.split(' ')[0].toLowerCase()).join(', ')}`);
      line(cats.map(c => `<span class="a">${pad(c.name, 16)}</span>${c.items.map(esc).join(', ')}`).join('\n'));
      if (cats.length === 1) orbit.select(DATA.stack.indexOf(cats[0]));
    },
    lab: () => line(DATA.lab.map((l, i) => `<span class="b">R/${String(i + 1).padStart(2, '0')}</span>  <span class="a">${pad('[' + l.tag + ']', 11)}</span>${esc(l.title)}`).join('\n')),
    training: () => line('One-to-one and group training sessions. Type <span class="a">contact</span> to set one up.'),
    domains: () => line(DATA.domains.map((d, i) => `<span class="b">${String(i + 1).padStart(2, '0')}</span>  ${esc(d.t)}`).join('\n')),
    projects: () => line(DATA.shipped.map(p => `  ▪ ${esc(p)}`).join('\n') + `\n<span class="m">…plus a lot of work under other companies' names.</span>`),
    contact: () => line(`email  → <a href="mailto:${DATA.email}">${DATA.email}</a>\nweb    → achieverstechnology.com`),
    hire: () => cmds.contact(),
    logo: () => line(LOGO),
    believe: () => line(`<span class="a">Believe it.</span> <span class="b">Achieve it.</span>  — since 2013`),
    whoami: () => line('guest. but you could be a client.'),
    date: () => line(new Date().toString()),
    ls: () => line('about.txt  history.log  stack/  domains/  projects/  contact.sh'),
    pwd: () => line('/home/achievers'),
    echo: (a) => line(esc(a || '')),
    clear: () => { out.innerHTML = ''; },
    exit: () => line('there is no exit. only the next project.'),
    sudo: () => line('<span class="a">nice try.</span> but you already have our attention — type <span class="a">contact</span>.'),
    party: () => { field.party(); document.body.classList.toggle('party'); line('🎉 party mode toggled. scroll up.'); },
    matrix: () => line('<span class="b">wake up, neo… the stack has you.</span>'),
    coffee: () => line('☕ brewing… 13 years and counting.'),
  };

  function run(raw) {
    const s = raw.trim();
    line(esc(s), 'c');
    if (!s) return;
    hist.push(s); hi = hist.length;
    const [c, ...rest] = s.split(/\s+/);
    const fn = cmds[c.toLowerCase()];
    if (fn) fn(rest.join(' '));
    else line(`${esc(c)}: command not found. type <span class="a">help</span>.`);
  }

  form.addEventListener('submit', e => { e.preventDefault(); run(input.value); input.value = ''; });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ''; }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const m = Object.keys(cmds).filter(k => k.startsWith(input.value.toLowerCase()));
      if (m.length === 1) input.value = m[0];
      else if (m.length > 1 && input.value) line(m.join('  '), 'o m');
    }
  });
  body.addEventListener('click', () => input.focus({ preventScroll: true }));

  line(`achievers.os v${new Date().getFullYear() - 2013}.0 — last login: Oct 2013 on tty1`, 'o m');
  line(`type <span class="a">help</span> to see what this thing can do.`);
  return { focus: () => { $('#terminal').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); setTimeout(() => input.focus({ preventScroll: true }), RM ? 0 : 600); }, run };
})();

addEventListener('keydown', e => {
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  if ((e.key === '`' || e.key === '~') && !typing) { e.preventDefault(); term.focus(); }
});
$$('a[href="#terminal"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); term.focus(); }));

/* konami */
const K = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let kp = 0;
addEventListener('keydown', e => { kp = (e.key === K[kp]) ? kp + 1 : (e.key === K[0] ? 1 : 0); if (kp === K.length) { kp = 0; field.party(); document.body.classList.toggle('party'); } });

console.log('%cBelieve it. Achieve it.', 'font:700 28px "Space Grotesk",sans-serif;color:#ffb13b');
console.log('%cReading the source? We should talk → ' + DATA.email, 'font:13px monospace;color:#2d9cff');

/* ---------- go ---------- */
boot();
field.init();
orbit.init();
onScroll();
})();
