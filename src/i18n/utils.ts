/**
 * i18n utilities shared across pages, layouts and the LangSwitcher island.
 */

import { ui, type Translator, type UiKey } from './ui';
import { DEFAULT_LANG, getLanguage, type Lang } from './languages';

/**
 * Extracts the locale from the URL pathname.
 * Accepts paths like `/es/projects` and `https://host/en/projects`.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, candidate] = url.pathname.split('/');
  if (candidate === 'es' || candidate === 'en') return candidate;
  return DEFAULT_LANG;
}

/**
 * Returns the path without the locale prefix, e.g. `/projects/odontosoft`.
 * Used by the LangSwitcher to navigate to the equivalent page in the other locale.
 */
export function getPathWithoutLocale(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  // Drop the leading locale segment if present
  if (segments[0] === 'es' || segments[0] === 'en') {
    segments.shift();
  }
  return '/' + segments.join('/');
}

/**
 * Builds a URL for a given locale and path.
 * If `path` is empty, returns the locale root (e.g. `/es/`).
 */
export function localizedPath(lang: Lang, path: string = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}

/**
 * Returns a translator bound to the given locale.
 * Falls back to the Spanish string if a key is missing for the target locale.
 */
export function useTranslations(lang: Lang): Translator {
  const dict = ui[lang] ?? ui[DEFAULT_LANG];
  return (key: UiKey) => dict[key] ?? ui[DEFAULT_LANG][key] ?? key;
}

/**
 * Returns the alternate-language URL for a given path. Used by SEO to emit hreflang.
 */
export function alternateUrls(path: string): Record<Lang, string> {
  return {
    es: localizedPath('es', path),
    en: localizedPath('en', path),
  };
}

/**
 * Helper for hreflang <link> tags in <head>.
 */
export function getHreflangs(path: string): Array<{
  lang: string;
  href: string;
}> {
  const alts = alternateUrls(path);
  return [
    { lang: 'es', href: alts.es },
    { lang: 'en', href: alts.en },
    { lang: 'x-default', href: alts.es },
  ];
}

/**
 * Convenience accessor for language metadata.
 */
export function currentLanguage(code: Lang) {
  return getLanguage(code);
}