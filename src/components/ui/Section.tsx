import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'navy';
  className?: string;
  id?: string;
}

export function Section({
  children,
  variant = 'light',
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        variant === 'light' && 'text-navy-950 bg-white',
        variant === 'dark' && 'text-navy-950 bg-slate-50',
        variant === 'navy' && 'bg-navy-950 text-white',
        className,
      )}
    >
      {children}
    </section>
  );
}
