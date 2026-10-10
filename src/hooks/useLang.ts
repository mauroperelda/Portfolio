import { useEffect, useState } from 'react';
import { DEFAULT_LANG, type Lang } from '../i18n/languages';

const STORAGE_KEY = 'lang';

/**
 * Read stored language and persist new selections. Useful for the lang switcher.
 */
export function useLangPreference() {
  const [storedLang, setStoredLang] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === 'es' || v === 'en') setStoredLang(v);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (lang: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en-US';
      setStoredLang(lang);
    } catch {
      /* ignore */
    }
  };

  return { storedLang: storedLang ?? DEFAULT_LANG, setLang };
}