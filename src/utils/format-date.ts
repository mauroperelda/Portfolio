/**
 * Date formatting helpers (period labels, locale-aware).
 */

import type { Lang } from '../i18n/languages';
import { getLanguage } from '../i18n/languages';

const MONTHS_BY_LANG: Record<Lang, Array<string>> = {
  es: [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
  ],
  en: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ],
};

/**
 * Renders a YYYY-MM string as a short month label, e.g. "ene 2025".
 */
export function shortMonthYear(yyyyMm: string, lang: Lang): string {
  const [year, month] = yyyyMm.split('-');
  const monthIdx = Math.max(0, Math.min(11, Number(month) - 1));
  const label = MONTHS_BY_LANG[lang][monthIdx];
  return `${label} ${year}`;
}

/**
 * Renders a period as a human label:
 *   - both months → "Oct 2025 – Sept 2026"
 *   - open-ended (to === null) → "Oct 2025 – present"
 */
export function formatPeriod(
  from: string,
  to: string | null,
  lang: Lang,
): string {
  const fromLabel = shortMonthYear(from, lang);
  if (!to) {
    const present = lang === 'es' ? 'actualidad' : 'present';
    return `${fromLabel} – ${present}`;
  }
  return `${fromLabel} – ${shortMonthYear(to, lang)}`;
}

/**
 * Uses Intl.DateTimeFormat to format an ISO date.
 */
export function formatDate(iso: string, lang: Lang): string {
  const { dateLocale } = getLanguage(lang);
  return new Intl.DateTimeFormat(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}