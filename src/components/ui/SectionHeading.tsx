import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  heading: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  overline,
  heading,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      {overline && (
        <p
          className={cn(
            'mb-4 text-xs font-semibold uppercase tracking-[0.2em]',
            dark ? 'text-blue-400' : 'text-blue-600',
          )}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          'font-serif text-3xl leading-tight tracking-tight md:text-5xl',
          dark ? 'text-white' : 'text-navy-950',
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-lg leading-relaxed',
            dark ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
