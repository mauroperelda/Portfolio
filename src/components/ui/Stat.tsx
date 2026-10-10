interface Props {
  label: string;
  value: string;
  sub?: string;
}

export function Stat({ label, value, sub }: Props) {
  return (
    <div className="rounded-xl border border-border bg-bg-elev px-5 py-[18px]">
      <div className="text-[12px] uppercase tracking-wider text-fg-dim">{label}</div>
      <div className="mt-1 text-[28px] font-bold text-fg">{value}</div>
      {sub && <div className="mt-0.5 text-[12px] text-fg-muted">{sub}</div>}
    </div>
  );
}