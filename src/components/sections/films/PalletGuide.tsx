import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { films } from '@/lib/content';

export function PalletGuide() {
  const { palletGuide } = films;

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={palletGuide.overline}
            heading={palletGuide.heading}
            subtitle={palletGuide.body}
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-3" direction="left">
            <figure>
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-white p-6 md:p-8">
                <Image
                  src={palletGuide.profileImage}
                  alt={palletGuide.profileAlt}
                  width={1200}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                {palletGuide.profileCaption}
              </figcaption>
            </figure>

            <StaggerChildren className="mt-8 grid gap-5 sm:grid-cols-3">
              {palletGuide.profiles.map((profile) => (
                <StaggerItem key={profile.label}>
                  <div className="border-t-2 border-navy-950 pt-4">
                    <p className="text-navy-950 font-serif text-xl tracking-tight">
                      {profile.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {profile.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>

          <FadeIn className="lg:col-span-2" direction="right">
            <div className="bg-slate-50 border border-slate-200 px-6 py-8 md:px-8 md:py-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-red-600 uppercase">
                {palletGuide.weightBands.heading}
              </p>
              <ul className="mt-6 divide-y divide-slate-200">
                {palletGuide.weightBands.bands.map((band) => (
                  <li
                    key={band.range}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className="text-base text-slate-700 tabular-nums">
                      {band.range}
                    </span>
                    <span className="text-navy-950 font-serif text-2xl tracking-tight tabular-nums md:text-3xl">
                      {band.recommendation}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                {palletGuide.weightBands.note}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
