import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import {
  IconMenu,
  IconMoon,
  IconSun,
  IconGlobe,
  IconChevronDown,
} from '../ui/Icons';
import { LANGUAGES, type Lang } from '../../i18n/languages';
import { getPathWithoutLocale, localizedPath } from '../../i18n/utils';
import { useState, useRef, useEffect } from 'react';

interface Props {
  lang: Lang;
  breadcrumb: { section: string; sub?: string };
  onOpenDrawer: () => void;
}

export function Topbar({ lang, breadcrumb, onOpenDrawer }: Props) {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const path = getPathWithoutLocale(location.pathname);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchTo = (target: Lang) => {
    document.documentElement.lang = target === 'es' ? 'es-AR' : 'en-US';
    try {
      localStorage.setItem('lang', target);
    } catch {
      /* ignore */
    }
    setLangOpen(false);
    navigate(localizedPath(target, path));
  };

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-bg-elev/80 px-5 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenDrawer}
          className="grid h-9 w-9 place-items-center rounded-lg border border-border text-fg-muted hover:bg-bg-hover hover:text-fg md:hidden"
        >
          <IconMenu className="h-5 w-5" />
        </button>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-fg-muted">
          <span>portfolio</span>
          <span className="text-fg-dim">/</span>
          <span className="font-medium text-fg">{breadcrumb.section}</span>
          {breadcrumb.sub && (
            <>
              <span className="text-fg-dim">/</span>
              <span className="text-fg">{breadcrumb.sub}</span>
            </>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative" ref={langRef}>
          <button
            type="button"
            onClick={() => setLangOpen((o) => !o)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-2.5 text-[12.5px] font-medium text-fg-muted hover:bg-bg-hover hover:text-fg"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            <IconGlobe className="h-4 w-4" />
            <span>{current.short}</span>
            <IconChevronDown className="h-3.5 w-3.5" />
          </button>
          {langOpen && (
            <ul
              role="listbox"
              className="absolute right-0 top-[calc(100%+6px)] w-40 overflow-hidden rounded-lg border border-border bg-bg-elev shadow-xl"
            >
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => switchTo(l.code)}
                    className={
                      'flex w-full items-center justify-between px-3 py-2 text-left text-[12.5px] transition-colors hover:bg-bg-hover ' +
                      (l.code === lang ? 'text-fg' : 'text-fg-muted')
                    }
                  >
                    <span>{l.label}</span>
                    <span className="text-fg-dim">{l.short}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggle}
          className="grid h-9 w-9 place-items-center rounded-lg border border-border text-fg-muted hover:bg-bg-hover hover:text-fg"
        >
          {theme === 'dark' ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}