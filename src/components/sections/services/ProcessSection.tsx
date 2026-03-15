import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { services } from '@/lib/content';

export function ProcessSection() {
  const { process } = services;

  return (
    <Section variant="light">
      <Container>
        <SectionHeading
          overline={process.overline}
          heading={process.heading}
        />

        <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="font-serif text-6xl text-blue-100">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl text-navy-950">
                  {step.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
