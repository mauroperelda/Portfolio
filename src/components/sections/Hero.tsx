import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { IconPin } from '../ui/Icons';
import type { Lang } from '../../i18n/languages';
import { localizedPath } from '../../i18n/utils';
import { useTranslations } from '../../i18n/utils';

interface Props {
  lang: Lang;
  author: { name: string; role: string; location: string; tagline: string };
  stackPreview: string[];
}

export function Hero({ lang, author, stackPreview }: Props) {
  const t = useTranslations(lang);

  return (
    <section>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elev px-3 py-1 text-[11.5px] text-fg-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
        <span>{t('home.hero.available')}</span>
      </div>

      <h1 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-tight text-fg md:text-[48px]">
        {author.name}
      </h1>
      <p className="mt-2 text-[18px] font-medium text-fg-muted md:text-[20px]">
        {author.role}
      </p>
      <p className="mt-1 flex items-center gap-1.5 text-[13.5px] text-fg-dim">
        <IconPin className="h-4 w-4" />
        <span>{author.location}</span>
      </p>

      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
        {author.tagline}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={localizedPath(lang, '/projects')} variant="primary" size="md">
          {t('home.cta.projects')}
        </Button>
        <Button href={localizedPath(lang, '/contact')} variant="ghost" size="md">
          {t('home.cta.contact')}
        </Button>
      </div>

      <div className="mt-7 flex flex-wrap gap-1.5">
        {stackPreview.map((s) => (
          <Tag key={s} variant="muted" size="sm">
            {s}
          </Tag>
        ))}
      </div>
    </section>
  );
}