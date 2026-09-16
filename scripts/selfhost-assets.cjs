const fs = require('fs');
const { execFileSync } = require('child_process');

const PROXY = process.env.SELFHOST_PROXY || 'http://127.0.0.1:7897';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

function fetch(url, opts = {}) {
  const args = ['-s', '--max-time', '60', '--proxy', PROXY, '-A', UA];
  if (opts.out) args.push('-o', opts.out);
  args.push(url);
  return execFileSync('curl.exe', args, { encoding: opts.out ? 'buffer' : 'utf8', maxBuffer: 50 * 1024 * 1024 });
}

// ---------- Font Awesome subset ----------
const IC = ['bus','calendar','circle-question','clock','cloud','coins','language','leaf','lock','map','mobile-screen','passport','plane','seedling','sun','train','triangle-exclamation','wifi','city','location-dot','mountain'];
const faCss = fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');
fs.mkdirSync('public/fa/webfonts', { recursive: true });

let out = '';
// @font-face for solid(900) + regular(400), woff2 only, local paths
for (const f of faCss.matchAll(/@font-face\{[^}]*Font Awesome 6 Free[^}]*\}/g)) {
  const m = f[0].match(/url\(([^)]*fa-(solid-900|regular-400)\.woff2)[^)]*\)/);
  if (!m) continue;
  const file = 'fa-' + m[2] + '.woff2';
  fetch('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/webfonts/' + file, { out: 'public/fa/webfonts/' + file });
  const style = (f[0].match(/font-style:(\w+)/) || [])[1];
  const weight = (f[0].match(/font-weight:(\d+)/) || [])[1];
  out += `@font-face{font-family:"Font Awesome 6 Free";font-style:${style};font-weight:${weight};font-display:block;src:url("/fa/webfonts/${file}") format("woff2")}`;
}
// base rules (exact strings present in 6.7.2)
for (const sel of [
  '.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}',
  '.fa,.fa-brands,.fa-regular,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}',
  '.fa-brands:before,.fa-regular:before,.fa-solid:before,.fa:before,.fab:before,.far:before,.fas:before{content:var(--fa)}',
  '.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}',
  '.fa-solid,.fas{font-weight:900}',
  '.fa-regular,.far{font-weight:400}',
]) {
  if (faCss.includes(sel)) out += sel;
  else console.log('MISSING BASE:', sel.slice(0, 40));
}
// icon variable rules
for (const ic of IC) {
  const re = new RegExp(`[^{}]*\\.fa-${ic}(?![a-z0-9-])[^{}]*\\{--fa:"[^"]*"\\}`, 'g');
  const m = faCss.match(re);
  if (m) out += m[0];
  else console.log('MISSING ICON:', ic);
}
fs.writeFileSync('public/fa/fa.min.css', out);
console.log('FA css size:', (fs.statSync('public/fa/fa.min.css').size / 1024).toFixed(1), 'KB');

// ---------- Google Fonts self-host ----------
const gfUrl = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap';
const gfCss = fetch(gfUrl);
fs.mkdirSync('public/fonts', { recursive: true });
const parts = [...gfCss.matchAll(/\/\*\s*([a-z-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)];
let gfOut = '', count = 0;
for (const [, subset, blockRaw] of parts) {
  if (subset !== 'latin') continue;
  const url = (blockRaw.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
  if (!url) continue;
  const fam = (blockRaw.match(/font-family:\s*'([^']+)'/) || [])[1].replace(/[^A-Za-z]/g, '');
  const style = (blockRaw.match(/font-style:\s*(\w+)/) || [])[1];
  const weight = (blockRaw.match(/font-weight:\s*([\d ]+)/) || [])[1].trim().replace(/\s+/g, '-');
  const fname = `${fam.toLowerCase()}-${style}-${weight}.woff2`;
  fetch(url, { out: 'public/fonts/' + fname });
  gfOut += blockRaw.replace(/url\([^)]+\)/, `url("/fonts/${fname}")`);
  count++;
}
fs.writeFileSync('public/fonts/fonts.css', gfOut);
console.log('GF faces:', count, 'css size:', (fs.statSync('public/fonts/fonts.css').size / 1024).toFixed(1), 'KB');
