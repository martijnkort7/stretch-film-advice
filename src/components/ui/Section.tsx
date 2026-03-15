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
        variant === 'light' && 'bg-white text-navy-950',
        variant === 'dark' && 'bg-slate-50 text-navy-950',
        variant === 'navy' && 'bg-navy-950 text-white',
        className,
      )}
    >
      {children}
    </section>
  );
}
