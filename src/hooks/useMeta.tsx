import { buildMeta, type SeoProps } from '../config/seo';

/**
 * Returns JSX head elements (title, meta, link, script) that React 19
 * automatically hoists into <head>. This works in both SSG (server render)
 * and CSR hydration, so the static HTML is fully SEO-friendly.
 */
export function useMeta(props: SeoProps) {
  const meta = buildMeta(props);
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      {meta.hreflangs.map((h) => (
        <link
          key={h.lang}
          rel="alternate"
          hrefLang={h.lang}
          href={h.href}
        />
      ))}

      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.ogUrl} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:locale" content={meta.ogLocale} />
      <meta property="og:locale:alternate" content={meta.ogLocaleAlternate} />
      <meta property="og:site_name" content="Mauro Perelda — Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.personJsonLd) }}
      />
    </>
  );
}