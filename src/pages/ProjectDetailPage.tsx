import { SectionHeading } from '../components/ui/SectionHeading';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { useMeta } from '../hooks/useMeta';
import { useTranslations } from '../i18n/utils';
import { getProject } from '../content';
import type { Lang } from '../i18n/languages';
import { NotFoundPage } from './NotFoundPage';

interface Props {
  lang: Lang;
  slug: string;
}

export function ProjectDetailPage({ lang, slug }: Props) {
  const t = useTranslations(lang);
  const project = getProject(lang, slug);

  const meta = useMeta({
    title: project ? `${project.title} — Mauro Perelda` : t('notFound.title'),
    description: project?.summary ?? t('notFound.description'),
    lang,
    pathname: `/projects/${slug}`,
    type: 'article',
  });

  if (!project) {
    return (
      <>
        {meta}
        <NotFoundPage lang={lang} />
      </>
    );
  }

  return (
    <>
      {meta}
      <article>
        <SectionHeading title={project.title} subtitle={project.summary} level={1} />

        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s} variant="accent" size="md">
              {s}
            </Tag>
          ))}
        </div>

        {project.description && (
          <div className="prose-body max-w-none text-[14.5px] leading-relaxed text-fg-muted">
            {project.description.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.repoUrl && (
            <Button href={project.repoUrl} variant="primary" size="md">
              {t('projects.code')} ↗
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="ghost" size="md">
              {t('projects.live')} ↗
            </Button>
          )}
        </div>
      </article>
    </>
  );
}