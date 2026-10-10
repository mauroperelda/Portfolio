import { SectionHeading } from '../components/ui/SectionHeading';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { getExperiences } from '../content';
import type { Lang } from '../i18n/languages';

interface Props {
  lang: Lang;
}

export function ExperiencePage({ lang }: Props) {
  const t = useTranslations(lang);
  const items = getExperiences(lang);

  const meta = useMeta({
    title: t('experience.title'),
    description: t('experience.description'),
    lang,
    pathname: '/experience',
    type: 'website',
  });

  const labels = { current: lang === 'es' ? 'Presente' : 'Present' };

  return (
    <>
      {meta}
      <div>
        <SectionHeading
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
          level={1}
        />
        <ExperienceTimeline items={items} lang={lang} labels={labels} />
      </div>
    </>
  );
}