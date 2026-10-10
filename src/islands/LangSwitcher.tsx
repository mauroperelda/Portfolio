/**
 * LangSwitcher — React island.
 * Renders a dropdown of supported languages. On click, persists the choice
 * to localStorage and navigates to the equivalent URL in the target locale.
 */

import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, type Lang } from '../i18n/languages';

interface Props {
  current: Lang;
  pathWithoutLocale: string; // e.g. "/projects/odontosoft"
  label: string; // aria-label
}

function persistLang(lang: Lang) {
  try {
    localStorage.setItem('lang', lang);
  } catch {
    /* localStorage unavailable */
  }
}

function buildTargetPath(lang: Lang, pathWithoutLocale: string): string {
  const clean = pathWithoutLocale.startsWith('/')
    ? pathWithoutLocale
    : `/${pathWithoutLocale}`;
  if (clean === '/' || clean === '') return `/${lang}/`;
  return `/${lang}${clean}`;
}

export default function LangSwitcher({ current, pathWithoutLocale, label }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const switchTo = (target: Lang) => {
    if (target === current) {
      setOpen(false);
      return;
    }
    persistLang(target);
    document.documentElement.lang = target === 'es' ? 'es-AR' : 'en-US';
    window.location.href = buildTargetPath(target, pathWithoutLocale);
  };

  const currentLabel = LANGUAGES.find((l) => l.code === current)?.label ?? current;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        title={label}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-border px-2.5 text-xs font-semibold text-fg-muted transition-colors hover:bg-bg-hover hover:text-fg"
      >
        <span aria-hidden="true">🌐</span>
        <span>{mounted ? currentLabel : current.toUpperCase()}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 z-50 mt-1.5 min-w-[10rem] overflow-hidden rounded-lg border border-border bg-bg-elev shadow-lg"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => switchTo(l.code)}
                disabled={l.code === current}
                className="block w-full px-3.5 py-2 text-left text-sm text-fg transition-colors hover:bg-bg-hover disabled:cursor-default disabled:opacity-60 disabled:hover:bg-transparent"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}