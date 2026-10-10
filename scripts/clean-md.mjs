// One-off cleanup: remove duplicate trailing "---" added by an earlier bash script.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) yield* walk(p);
    else if (p.endsWith('.md')) yield p;
  }
}

for (const f of walk('src/content')) {
  let txt = readFileSync(f, 'utf8');
  // collapse "---\n\n---\n" or "---\n---\n" trailing
  while (/\n---\s*\n---\s*$/.test(txt)) {
    txt = txt.replace(/\n---\s*\n---\s*$/, '\n---\n');
  }
  writeFileSync(f, txt);
}
console.log('cleaned');
