import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';

interface PageHeaderProps {
  overline: string;
  heading: string;
  subtitle?: string;
}

export function PageHeader({ overline, heading, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            {overline}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-white md:text-6xl">
            {heading}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
