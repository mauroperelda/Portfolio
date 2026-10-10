import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, href, className = '', interactive = false }: Props) {
  const base =
    'rounded-xl border border-border bg-bg-elev overflow-hidden ' +
    (interactive
      ? 'transition-transform duration-150 hover:-translate-y-0.5 hover:border-accent'
      : '');
  const cls = `${base} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
}