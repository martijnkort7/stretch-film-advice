import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { homepage } from '@/lib/content';

const stepImages = [
  { src: '/images/egbert-factory-inspection.webp', alt: 'Egbert Kort conducting on-site assessment at a pallet wrapping facility' },
  { src: '/images/force-diagram-screen.webp', alt: 'Film Edge Force analysis diagram showing containment force measurements' },
  { src: '/images/film-stretch-percentage.webp', alt: 'Stretch film with pre-stretch percentage markings during implementation' },
  { src: '/images/holding-force-test.webp', alt: 'Holding force test verifying pallet load containment after optimisation' },
];

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
          {howWeWork.steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div>
                <div className="mb-4 overflow-hidden rounded-sm">
                  <Image
                    src={stepImages[i].src}
                    alt={stepImages[i].alt}
                    width={640}
                    height={480}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
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
