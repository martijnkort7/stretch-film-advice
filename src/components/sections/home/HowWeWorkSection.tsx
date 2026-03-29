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
  {
    src: '/images/Holding%20Force%20meten%20.jpg',
    alt: 'Measuring holding force on a wrapped pallet with a digital scale',
  },
  {
    src: '/images/Improved%20pre%20stretch.jpg',
    alt: 'Pre-stretch percentage marking written on wrapped pallet film',
  },
  {
    src: '/images/egbert-machine-inspection.webp',
    alt: 'Egbert Kort inspecting pallet wrapping equipment on-site during assessment',
  },
  {
    src: '/images/26%20degrees%20tilt%20test.JPG',
    alt: 'Wrapped pallet on 26-degree tilt test verifying load stability',
  },
];

export function HowWeWorkSection() {
  const { howWeWork } = homepage;

  return (
    <Section variant="dark">
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
                <h3 className="text-navy-950 mt-2 font-serif text-xl">
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
