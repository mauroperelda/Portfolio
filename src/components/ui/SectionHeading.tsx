interface Props {
  title: string;
  subtitle?: string;
  level?: 1 | 2;
}

export function SectionHeading({ title, subtitle, level = 1 }: Props) {
  const Tag = level === 1 ? 'h1' : 'h2';
  const cls =
    level === 1
      ? 'mb-1.5 text-[26px] font-bold text-fg'
      : 'mb-2 text-[20px] font-semibold text-fg';
  return (
    <header className="mb-7">
      <Tag className={cls}>{title}</Tag>
      {subtitle && <p className="text-[14px] text-fg-muted">{subtitle}</p>}
    </header>
  );
}