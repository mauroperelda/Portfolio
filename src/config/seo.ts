import { SITE_URL, SITE_NAME, AUTHOR, DEFAULT_OG_IMAGE, SOCIAL } from './site';
import type { Lang } from '../i18n/languages';
import { getLanguage, LANGUAGES } from '../i18n/languages';

export interface SeoProps {
  title: string;
  description: string;
  lang: Lang;
  pathname: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
}

export function buildMeta(props: SeoProps) {
  const lang = getLanguage(props.lang);
  const path = props.pathname.startsWith('/') ? props.pathname : `/${props.pathname}`;
  const url = new URL(path, SITE_URL).toString();
  const ogImage = new URL(props.ogImage ?? DEFAULT_OG_IMAGE, SITE_URL).toString();

  // hreflang alternates
  const pathWithoutLocale = path.replace(/^\/(es|en)/, '') || '/';
  const hreflangs: Array<{ lang: string; href: string }> = LANGUAGES.map((l) => ({
    lang: l.code,
    href: new URL(`/${l.code}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`, SITE_URL).toString(),
  }));
  hreflangs.push({
    lang: 'x-default',
    href: new URL(`/es${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`, SITE_URL).toString(),
  });

  // og:locale alternates
  const otherLocale = props.lang === 'es' ? 'en_US' : 'es_AR';

  return {
    htmlLang: lang.htmlLang,
    ogLocale: lang.ogLocale,
    title: `${props.title} · ${SITE_NAME}`,
    description: props.description,
    canonical: url,
    ogImage,
    ogUrl: url,
    type: props.type ?? 'website',
    publishedTime: props.publishedTime,
    ogLocaleAlternate: otherLocale,
    hreflangs,
    personJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.role[props.lang],
      url: SITE_URL,
      email: AUTHOR.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: AUTHOR.location.city,
        addressRegion: AUTHOR.location.province,
        addressCountry: AUTHOR.location.country,
      },
      sameAs: [SOCIAL.linkedin, SOCIAL.github],
    },
  };
}