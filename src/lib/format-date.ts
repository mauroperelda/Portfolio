import type { Lang } from '../i18n/languages';

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

export function shortMonthYear(yyyyMm: string, lang: Lang): string {
  const [year, month] = yyyyMm.split('-');
  const monthIdx = Math.max(0, Math.min(11, Number(month) - 1));
  const label = MONTHS_BY_LANG[lang][monthIdx];
  return `${label} ${year}`;
}

export function formatPeriod(
  period: { from: string; to: string | null } | string,
  toOrLang: string | Lang | null,
  langArg?: Lang,
): string {
  if (typeof period === 'string') {
    // legacy 3-arg signature
    const from = period;
    const to = typeof toOrLang === 'string' ? toOrLang : null;
    const lang = (typeof toOrLang === 'string' ? langArg : toOrLang) ?? 'es';
    const fromLabel = shortMonthYear(from, lang);
    if (!to) {
      const present = lang === 'es' ? 'actualidad' : 'present';
      return `${fromLabel} – ${present}`;
    }
    return `${fromLabel} – ${shortMonthYear(to, lang)}`;
  }

  const lang: Lang = (typeof toOrLang === 'string' ? null : toOrLang) ?? 'es';
  const fromLabel = shortMonthYear(period.from, lang);
  if (!period.to) {
    const present = lang === 'es' ? 'actualidad' : 'present';
    return `${fromLabel} – ${present}`;
  }
  return `${fromLabel} – ${shortMonthYear(period.to, lang)}`;
}