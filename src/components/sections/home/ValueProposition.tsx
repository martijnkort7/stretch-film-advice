import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function ValueProposition() {
  const { value } = homepage;

  return (
    <Section variant="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <FadeIn>
              <SectionHeading
                overline={value.overline}
                heading={value.heading}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {value.body}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <ul className="space-y-6">
                {value.points.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-blue-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-slate-700">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
