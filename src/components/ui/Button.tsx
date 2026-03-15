import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-red-600 focus-visible:ring-blue-500',
  secondary:
    'border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-navy-950',
  ghost:
    'border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    disabled && 'cursor-not-allowed opacity-50',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
