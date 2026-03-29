import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { ExpandableText } from '@/components/ui/ExpandableText';
import { services } from '@/lib/content';

const processImages = [
  {
    src: '/images/Holding Force meten .jpg',
    alt: 'Measuring holding force on a wrapped pallet with a digital scale',
    className: 'aspect-[4/3] w-full object-cover object-center',
  },
  {
    src: '/images/Improved pre stretch.jpg',
    alt: 'Pre-stretch percentage marking written on wrapped pallet film',
    className: 'aspect-[4/3] w-full object-cover object-center',
  },
  {
    src: '/images/egbert-machine-inspection.webp',
    alt: 'Egbert Kort inspecting pallet wrapping equipment on-site during assessment',
    className: 'aspect-[4/3] w-full object-cover object-center',
  },
  {
    src: '/images/26 degrees tilt test.JPG',
    alt: 'Wrapped pallet on 26-degree tilt test verifying load stability',
    className: 'aspect-[4/3] w-full object-contain object-center bg-slate-50',
  },
];

export function ProcessSection() {
  const { process } = services;

  return (
    <Section variant="light">
      <Container>
        <SectionHeading overline={process.overline} heading={process.heading} />

        <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <div className="mb-4 overflow-hidden rounded-sm">
                  <Image
                    src={processImages[i].src}
                    alt={processImages[i].alt}
                    width={640}
                    height={480}
                    className={processImages[i].className}
                  />
                </div>
                <span className="font-serif text-6xl text-blue-100">
                  {step.number}
                </span>
                <h3 className="text-navy-950 mt-2 font-serif text-xl">
                  {step.heading}
                </h3>
                <ExpandableText text={step.body} className="mt-3" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
