import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { localizedPath } from '../i18n/utils';
import type { Lang } from '../i18n/languages';

interface Props {
  lang: Lang;
}

export function NotFoundPage({ lang }: Props) {
  const t = useTranslations(lang);

  const meta = useMeta({
    title: t('notFound.title'),
    description: t('notFound.description'),
    lang,
    pathname: '/404',
    type: 'website',
  });

  return (
    <>
      {meta}
      <div className="text-center">
        <SectionHeading title={t('notFound.title')} level={1} />
        <p className="mb-6 text-[14px] text-fg-muted">{t('notFound.description')}</p>
        <Button href={localizedPath(lang, '/')} variant="primary" size="md">
          {t('notFound.cta')}
        </Button>
      </div>
    </>
  );
}