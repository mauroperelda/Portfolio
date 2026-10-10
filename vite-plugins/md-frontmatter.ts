/**
 * Vite plugin that transforms `.md` files into JS modules exporting their
 * frontmatter (parsed) and body. This keeps `gray-matter` (which depends on
 * Node's `Buffer` via `js-yaml`) out of the client bundle.
 *
 * Imports look like:
 *   import { data, body } from './foo.md'
 *   // data: the parsed frontmatter (already with `locale` injected)
 *   // body: the markdown body as a string
 */
import type { Plugin } from 'vite';
import matter from 'gray-matter';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const MD_QUERY = '?md-frontmatter';

function parseId(id: string): { file: string; isVirtual: boolean } | null {
  // Strip query suffix
  const clean = id.split('?')[0];
  if (!clean.endsWith('.md')) return null;
  return { file: clean, isVirtual: id.includes(MD_QUERY) };
}

export function mdFrontmatter(): Plugin {
  return {
    name: 'md-frontmatter',
    enforce: 'pre',

    resolveId(id, importer) {
      if (!id.endsWith('.md') && !id.includes('.md?')) return null;

      // If the import didn't include our query, force-rewrite to the virtual id
      // so the load hook runs.
      if (id.endsWith('.md') && importer) {
        const abs = resolve(importer, '..', id);
        return this.resolve(abs + MD_QUERY, importer, { skipSelf: true })
          .then((r) => r ?? abs + MD_QUERY)
          .catch(() => abs + MD_QUERY);
      }
      return null;
    },

    load(id) {
      const parsed = parseId(id);
      if (!parsed) return null;

      // Resolve to absolute path on disk
      const abs = resolve(process.cwd(), parsed.file);
      const raw = readFileSync(abs, 'utf8');

      // Derive locale from the path: ./content/{collection}/{locale}/{slug}.md
      const m = abs.match(/[\\/](es|en)[\\/][^\\/]+\.md$/);
      const locale = m ? m[1] : 'es';

      const { data, content } = matter(raw);
      const dataWithLocale = { ...data, locale };

      return {
        code:
          `export const data = ${JSON.stringify(dataWithLocale)};\n` +
          `export const body = ${JSON.stringify(content)};\n` +
          `export const slug = ${JSON.stringify(parsed.file.replace(/^.*[\\/]/, '').replace(/\.md$/, ''))};\n` +
          `export const locale = ${JSON.stringify(locale)};\n`,
        map: null,
      };
    },
  };
}