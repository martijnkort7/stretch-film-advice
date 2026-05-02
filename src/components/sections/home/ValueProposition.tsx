import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { homepage } from '@/lib/content';

export function ValueProposition() {
  const { value } = homepage;

  return (
    <Section variant="dark">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={value.overline}
            heading={value.heading}
            align="center"
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {value.body}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-y-10 lg:mt-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-4">
          <FadeIn delay={0.15} className="lg:col-span-6 lg:row-start-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200">
              <Image
                src="/images/process/film-usage-comparison.webp"
                alt="Before and after film usage comparison — the larger ball represents excessive film use, the smaller ball shows optimised usage with less material"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-6 lg:col-start-1 lg:row-start-2 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <span className="text-xs font-medium tracking-[0.15em] text-slate-500 uppercase">
                {value.imageCaption.before}
              </span>
              <span className="text-xs font-medium tracking-[0.15em] text-navy-950 uppercase">
                {value.imageCaption.after}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {value.imageCaption.description}
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              {value.imageCaption.tagline}
            </p>
          </FadeIn>

          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-center">
            <StaggerChildren
              stagger={0.08}
              className="divide-y divide-slate-200"
            >
              {value.evidence.map((row) => (
                <StaggerItem
                  key={row.kpi}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 first:pt-0 last:pb-0"
                >
                  <span className="font-serif text-3xl leading-none tracking-tight whitespace-nowrap text-navy-950 tabular-nums md:text-4xl">
                    {row.kpi}
                  </span>
                  <p className="text-base leading-relaxed text-slate-600">
                    {row.caption}
                  </p>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <FadeIn delay={0.45}>
              <div className="mt-8">
                <Button
                  href={value.cta.href}
                  variant="secondary"
                  size="md"
                >
                  {value.cta.label}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
