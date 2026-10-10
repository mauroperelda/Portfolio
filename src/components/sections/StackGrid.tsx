import type { StackItem as StackItemType } from '../../content.config';
import { Tag } from '../ui/Tag';

interface Props {
  items: StackItemType[];
}

export function StackGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((cat) => (
        <section
          key={cat.slug}
          className="rounded-xl border border-border bg-bg-elev p-5"
        >
          <h3 className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-fg-muted">
            {cat.category}
          </h3>
          <ul className="space-y-2.5">
            {cat.items.map((it) => (
              <li key={it.name} className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="truncate text-[13.5px] text-fg">{it.name}</span>
                  {it.level && (
                    <Tag
                      variant={it.level === 'expert' ? 'accent' : 'muted'}
                      size="sm"
                    >
                      {it.level}
                    </Tag>
                  )}
                </div>
                {typeof it.years === 'number' && (
                  <span className="shrink-0 text-[12px] text-fg-dim">
                    {it.years}y
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}