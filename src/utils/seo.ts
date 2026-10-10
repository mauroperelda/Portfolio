/**
 * SEO meta tag builder.
 * Returns the props that the SEO.astro component expects.
 */

import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../config/site';
import type { Lang } from '../i18n/languages';
import { getLanguage } from '../i18n/languages';

export interface SeoProps {
  title: string;
  description: string;
  lang: Lang;
  pathname: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  author?: string;
}

export function buildSeo(props: SeoProps) {
  const lang = getLanguage(props.lang);
  const url = new URL(props.pathname, SITE_URL).toString();
  const ogImage = new URL(props.ogImage ?? DEFAULT_OG_IMAGE, SITE_URL).toString();

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
    author: props.author,
  };
}