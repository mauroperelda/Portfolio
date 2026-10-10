import type { Experience } from '../../content.config';
import { formatPeriod } from '../../lib/format-date';
import { Tag } from '../ui/Tag';
import type { Lang } from '../../i18n/languages';

interface Props {
  items: Experience[];
  lang: Lang;
  labels: { current: string };
}

export function ExperienceTimeline({ items, lang, labels }: Props) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((it) => (
        <li key={it.slug} className="relative">
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-[15.5px] font-semibold text-fg">
                {it.role}{' '}
                <span className="font-normal text-fg-muted">@ {it.company}</span>
              </h3>
              <p className="text-[12.5px] text-fg-dim">
                {it.location}
                {it.remote ? ` · ${labels.current === 'Present' ? 'Remote' : 'Remoto'}` : ''}
              </p>
            </div>
            <span className="text-[12px] font-medium text-fg-muted">
              {formatPeriod(it.period, lang)}
            </span>
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
            {it.summary}
          </p>
          {it.highlights.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-fg-muted marker:text-fg-dim">
              {it.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {it.stack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {it.stack.map((s) => (
                <Tag key={s} variant="accent" size="sm">
                  {s}
                </Tag>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}