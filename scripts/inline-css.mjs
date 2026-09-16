import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

function* htmlFiles(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) yield* htmlFiles(p);
    else if (e.endsWith(".html")) yield p;
  }
}

const cache = new Map();
function cssBody(href) {
  if (!cache.has(href)) {
    const file = join(dist, href.replace(/^\//, "").replace(/\//g, "\\").split(/[?#]/)[0]);
    cache.set(href, readFileSync(file, "utf8"));
  }
  return cache.get(href);
}

let pages = 0, inlined = 0;
for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, "utf8");
  const next = html.replace(/<link rel="stylesheet"(?: crossorigin)? href="(\/_astro\/[^"]+\.css)">/g, (m, href) => {
    inlined++;
    return `<style>${cssBody(href)}</style>`;
  });
  if (next !== html) {
    writeFileSync(file, next);
    pages++;
  }
}
console.log(`inline-css: inlined ${inlined} stylesheet link(s) across ${pages} page(s)`);
