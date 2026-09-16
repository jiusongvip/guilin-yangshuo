const fs = require('fs');
const s = fs.readFileSync('dist/li-river-cruise/index.html', 'utf8');
const blocks = [...s.matchAll(/application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
for (const b of blocks) {
  try {
    const j = JSON.parse(b);
    if (j['@type'] === 'Article') {
      console.log('Article author:', j.author && j.author.name);
      console.log('datePublished:', j.datePublished, '| dateModified:', j.dateModified);
      console.log('publisher:', j.publisher && j.publisher.name);
    }
  } catch (e) {}
}
console.log('visible byline:', /By <a[^>]*>Guilin &amp; Yangshuo Travel Guide<\/a>/.test(s));
console.log('time tags:', (s.match(/<time/g) || []).length);
console.log('contact footer link:', s.includes('/contact/'));
console.log('privacy footer link:', s.includes('/privacy/'));
// sitemap contains new pages
const sm = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
console.log('sitemap contact/privacy/terms:', ['/contact/', '/privacy/', '/terms/'].every(x => sm.includes(x)), '| total urls:', (sm.match(/<loc>/g) || []).length);
// title/desc range check all pages incl. new
function walk(d, out = []) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = d + '/' + e.name; if (e.isDirectory() && !['_astro', 'images', 'fa', 'fonts'].includes(e.name)) walk(p, out); else if (e.name === 'index.html') out.push(p); } return out; }
let bad = 0, n = 0;
const dec = x => x.replace(/&#38;/g, '&').replace(/&amp;/g, '&');
for (const p of walk('dist')) {
  if (p.includes('404')) continue;
  n++;
  const h = fs.readFileSync(p, 'utf8');
  const t = dec((h.match(/<title>([^<]+)<\/title>/) || [])[1] || '');
  const d = dec((h.match(/name="description" content="([^"]*)"/) || [])[1] || '');
  const f = [];
  if (t.length < 40 || t.length > 60) f.push('T=' + t.length);
  if (d.length < 140 || d.length > 160) f.push('D=' + d.length);
  if ((h.match(/<h1/g) || []).length !== 1) f.push('H1');
  if (f.length) { bad++; console.log('FLAG', p.replace('dist/', ''), f.join(' ')); }
}
console.log(n + ' pages:', bad === 0 ? 'ALL OK' : bad + ' flagged');
