import { Stat } from '../ui/Stat';

interface StatItem {
  label: string;
  value: string;
  sub?: string;
}

interface Props {
  stats: StatItem[];
}

export function StatsRow({ stats }: Props) {
  return (
    <section className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} label={s.label} value={s.value} sub={s.sub} />
      ))}
    </section>
  );
}