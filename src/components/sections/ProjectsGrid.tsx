import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import type { Project } from '../../content.config';
import type { Lang } from '../../i18n/languages';
import { localizedPath } from '../../i18n/utils';

interface Props {
  items: Project[];
  lang: Lang;
  labels: { viewDetail: string; code: string; live: string };
}

export function ProjectsGrid({ items, lang, labels }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((p) => (
        <Card key={p.slug} interactive className="flex h-full flex-col">
          <div className="flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[16px] font-semibold text-fg">{p.title}</h3>
              {p.featured && (
                <span className="rounded-md border border-accent-border bg-accent-soft px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted">
              {p.summary}
            </p>

            {p.stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 6).map((s) => (
                  <Tag key={s} variant="muted" size="sm">
                    {s}
                  </Tag>
                ))}
              </div>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
              {p.featured && (
                <Button
                  href={localizedPath(lang, `/projects/odontosoft`)}
                  variant="primary"
                  size="sm"
                >
                  {labels.viewDetail}
                </Button>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-8 items-center rounded-lg border border-border px-3 text-[12.5px] font-medium text-fg-muted hover:bg-bg-hover hover:text-fg"
                >
                  {labels.code} ↗
                </a>
              )}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-8 items-center rounded-lg border border-border px-3 text-[12.5px] font-medium text-fg-muted hover:bg-bg-hover hover:text-fg"
                >
                  {labels.live} ↗
                </a>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}