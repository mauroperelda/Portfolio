import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  const v = document.documentElement.dataset.theme;
  return v === 'light' ? 'light' : 'dark';
}

function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

/**
 * Theme provider hook. Sets `data-theme` on <html>, persists to localStorage,
 * and exposes the current theme + a toggle function.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(readTheme());
    setMounted(true);
  }, []);

  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    persistTheme(next);
    setThemeState(next);
  };

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, setTheme, toggle, mounted };
}