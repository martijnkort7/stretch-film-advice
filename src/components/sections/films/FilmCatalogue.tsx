import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FadeIn } from '@/components/motion/FadeIn';
import { films } from '@/lib/content';

export function FilmCatalogue() {
  const { catalogue } = films;

  return (
    <Section variant="dark">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={catalogue.overline}
            heading={catalogue.heading}
            subtitle={catalogue.body}
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16">
          <div className="mb-6 flex items-baseline justify-between border-b border-slate-200 pb-3">
            <h3 className="text-navy-950 font-serif text-2xl tracking-tight md:text-3xl">
              {catalogue.machineWrap.heading}
            </h3>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              {catalogue.machineWrap.rows.length} films
            </span>
          </div>
          <ComparisonTable
            headers={catalogue.machineWrap.headers}
            rows={catalogue.machineWrap.rows}
          />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16">
          <div className="mb-6 flex items-baseline justify-between border-b border-slate-200 pb-3">
            <h3 className="text-navy-950 font-serif text-2xl tracking-tight md:text-3xl">
              {catalogue.handWrap.heading}
            </h3>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              {catalogue.handWrap.rows.length} films
            </span>
          </div>
          <ComparisonTable
            headers={catalogue.handWrap.headers}
            rows={catalogue.handWrap.rows}
          />
        </FadeIn>
      </Container>
    </Section>
  );
}
