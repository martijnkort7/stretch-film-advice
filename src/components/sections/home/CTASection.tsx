import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticWrap } from '@/components/ui/MagneticWrap';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

interface CTASectionProps {
  heading?: string;
  subtitle?: string;
  button?: string;
}

export function CTASection({
  heading = homepage.cta.heading,
  subtitle = homepage.cta.subtitle,
  button = homepage.cta.button,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Image
        src="/images/process/banner-factory-pallets.webp"
        alt="Stretch film wrapped pallets in factory"
        fill
        className="object-cover object-center"
      />
      <div className="bg-navy-950/85 absolute inset-0" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 h-0.5 w-12 bg-red-600" />
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl">
              {heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
            <div className="mt-10 inline-flex w-full justify-center">
              <MagneticWrap>
                <Button href="/contact" variant="primary" size="lg">
                  {button}
                </Button>
              </MagneticWrap>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
