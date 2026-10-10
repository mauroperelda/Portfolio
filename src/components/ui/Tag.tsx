import type { CSSProperties, ReactNode } from 'react';

type Variant = 'accent' | 'solid' | 'muted';
type Size = 'sm' | 'md';

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
}

const SIZE: Record<Size, string> = {
  sm: 'text-[12px] px-2.5 py-1',
  md: 'text-[13px] px-2.5 py-1',
};

const VARIANT: Record<Variant, string> = {
  accent: 'bg-accent-soft text-accent border-accent-border',
  solid: 'bg-accent-strong text-white border-transparent',
  muted: 'bg-bg-hover text-fg-muted border-border',
};

export function Tag({ children, variant = 'accent', size = 'sm', href, className = '' }: Props) {
  const base = `inline-flex items-center rounded-md border font-medium transition-colors ${SIZE[size]} ${VARIANT[variant]} ${className}`;
  const Tag = href ? 'a' : 'span';
  const style: CSSProperties | undefined = undefined;
  return (
    <Tag className={base} {...(href ? { href } : {})} style={style}>
      {children}
    </Tag>
  );
}