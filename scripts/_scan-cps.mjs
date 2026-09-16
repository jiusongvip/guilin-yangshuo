import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else if (e.endsWith(".html") || e.endsWith(".tsx") || e.endsWith(".ts") || e.endsWith(".astro")) yield p;
  }
}
const set = new Set();
for (const f of walk("dist")) {
  const s = readFileSync(f, "utf8");
  for (const ch of s) set.add(ch.codePointAt(0));
}
for (let cp = 0x20; cp <= 0x7e; cp++) set.add(cp);
for (const extra of [0xa0, 0xa9, 0xae, 0xb7, 0xd7, 0x2013, 0x2014, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2026, 0x2192, 0x2190, 0x2191, 0x2193, 0x2039, 0x203a, 0x00b0]) set.add(extra);
const cps = [...set].sort((a, b) => a - b);
writeFileSync("used-cps.txt", cps.map((c) => "U+" + c.toString(16).toUpperCase().padStart(4, "0")).join(","));
console.log("unique code points:", cps.length);
