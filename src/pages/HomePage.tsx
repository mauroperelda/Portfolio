import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { StatsRow } from '../components/sections/StatsRow';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { Button } from '../components/ui/Button';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { getExperiences, getProjects } from '../content';
import type { Lang } from '../i18n/languages';
import { localizedPath } from '../i18n/utils';

interface Props {
  lang: Lang;
}

export function HomePage({ lang }: Props) {
  const t = useTranslations(lang);
  const experiences = getExperiences(lang).slice(0, 3);
  const projects = getProjects(lang);
  const featured = projects.find((p) => p.featured) ?? projects[0];

  const meta = useMeta({
    title: t('home.title'),
    description: t('home.description'),
    lang,
    pathname: '/',
    type: 'website',
  });

  // hero stack preview — first 10 from backend
  const stackPreview = ['.NET 8', 'C#', 'React', 'TypeScript', 'SQL Server', 'Azure', 'Docker', 'Blazor'];

  const stats = [
    { label: t('home.stats.years'), value: '5+', sub: t('home.stats.yearsSub') },
    { label: t('home.stats.companies'), value: '4', sub: t('home.stats.companiesSub') },
    { label: t('home.stats.projects'), value: '4+', sub: t('home.stats.projectsSub') },
    { label: t('home.stats.stack'), value: '20+', sub: t('home.stats.stackSub') },
  ];

  const author = {
    name: 'Mauro Perelda',
    role: t('home.role'),
    location: t('home.location'),
    tagline: t('home.tagline'),
  };

  const expLabels = { current: lang === 'es' ? 'Presente' : 'Present' };
  const projLabels = {
    viewDetail: t('projects.viewDetail'),
    code: t('projects.code'),
    live: t('projects.live'),
  };

  return (
    <>
      {meta}
      <div>
        <Hero lang={lang} author={author} stackPreview={stackPreview} />
        <StatsRow stats={stats} />

        <section className="mt-14">
          <SectionHeading
            title={t('home.experienceTitle')}
            subtitle={t('home.experienceSubtitle')}
            level={1}
          />
          <ExperienceTimeline items={experiences} lang={lang} labels={expLabels} />
          <div className="mt-6">
            <Button href={localizedPath(lang, '/experience')} variant="ghost" size="md">
              {t('home.experienceAll')}
            </Button>
          </div>
        </section>

        {featured && (
          <section className="mt-14">
            <SectionHeading
              title={t('home.featuredTitle')}
              subtitle={t('home.featuredSubtitle')}
              level={1}
            />
            <ProjectsGrid items={[featured]} lang={lang} labels={projLabels} />
          </section>
        )}
      </div>
    </>
  );
}