export type Lang = 'es' | 'en';

export interface Language {
  code: Lang;
  label: string;
  short: string;
  htmlLang: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
  dateLocale: string;
}

export const LANGUAGES: ReadonlyArray<Language> = [
  {
    code: 'es',
    label: 'Español',
    short: 'ES',
    htmlLang: 'es-AR',
    ogLocale: 'es_AR',
    dir: 'ltr',
    dateLocale: 'es-AR',
  },
  {
    code: 'en',
    label: 'English',
    short: 'EN',
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    dir: 'ltr',
    dateLocale: 'en-US',
  },
] as const;

export const DEFAULT_LANG: Lang = 'es';

export function getLanguage(code: Lang): Language {
  const found = LANGUAGES.find((l) => l.code === code);
  if (!found) throw new Error(`Unknown language code: ${code}`);
  return found;
}