import { ui, type Translator, type UiKey } from './ui';
import { DEFAULT_LANG, type Lang } from './languages';

export function useTranslations(lang: Lang): Translator {
  const dict = ui[lang] ?? ui[DEFAULT_LANG];
  return (key: UiKey) => dict[key] ?? ui[DEFAULT_LANG][key] ?? key;
}

export function localizedPath(lang: Lang, path: string = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'es' || segments[0] === 'en') segments.shift();
  return '/' + segments.join('/');
}

export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg === 'es' || seg === 'en') return seg;
  return DEFAULT_LANG;
}