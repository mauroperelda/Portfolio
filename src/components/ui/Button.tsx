import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  type?: 'button' | 'submit';
  className?: string;
}

const SIZE: Record<Size, string> = {
  sm: 'h-8 px-3 text-[12.5px]',
  md: 'h-10 px-4 text-[13.5px]',
  lg: 'h-11 px-5 text-sm',
};

const VARIANT: Record<Variant, string> = {
  primary: 'bg-accent-strong text-white hover:opacity-90',
  ghost: 'border border-border bg-transparent text-fg hover:bg-bg-hover',
  link: 'bg-transparent text-fg underline-offset-4 hover:underline',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all ${SIZE[size]} ${VARIANT[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}