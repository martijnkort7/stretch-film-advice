import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { homepage } from '@/lib/content';

export function HowWeWorkSection() {
  const { howWeWork } = homepage;

  return (
    <Section variant="light">
      <Container>
        <SectionHeading
          overline={howWeWork.overline}
          heading={howWeWork.heading}
          align="center"
        />

        <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.steps.map((step) => (
            <StaggerItem key={step.number}>
              <div>
                <span className="font-serif text-5xl text-blue-100">
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

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-red-600"
          >
            {howWeWork.linkLabel}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
