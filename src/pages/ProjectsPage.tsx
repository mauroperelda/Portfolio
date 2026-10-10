import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { getProjects } from '../content';
import type { Lang } from '../i18n/languages';

interface Props {
  lang: Lang;
}

export function ProjectsPage({ lang }: Props) {
  const t = useTranslations(lang);
  const items = getProjects(lang);

  const meta = useMeta({
    title: t('projects.title'),
    description: t('projects.description'),
    lang,
    pathname: '/projects',
    type: 'website',
  });

  const labels = {
    viewDetail: t('projects.viewDetail'),
    code: t('projects.code'),
    live: t('projects.live'),
  };

  return (
    <>
      {meta}
      <div>
        <SectionHeading
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          level={1}
        />
        <ProjectsGrid items={items} lang={lang} labels={labels} />
      </div>
    </>
  );
}