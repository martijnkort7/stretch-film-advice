import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';

interface PageHeaderProps {
  overline: string;
  heading: string;
  subtitle?: string;
}

export function PageHeader({ overline, heading, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 pt-24 pb-12 md:pt-40 md:pb-28">
      <Container>
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            {overline}
          </p>
          <h1 className="max-w-4xl font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
            {heading}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
