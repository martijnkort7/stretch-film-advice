'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { services } from '@/lib/content';

export function VideoShowcase() {
  const { videoShowcase } = services;

  return (
    <Section variant="navy">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={videoShowcase.overline}
            heading={videoShowcase.heading}
            dark
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <VideoPlayer
              src="/videos/tilt-test-push.mp4"
              poster="/videos/posters/tilt-test-push-poster.webp"
              alt="Pallet stability push test demonstrating holding force after optimised stretch film wrapping"
            />
            <p className="mt-3 text-sm text-slate-400">
              Push test demonstrating pallet stability after optimised wrapping
              with multilayer stretch film.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <VideoPlayer
              src="/videos/fast-machine.mp4"
              poster="/videos/posters/fast-machine-poster.webp"
              alt="Automatic pallet wrapping machine running at high speed in industrial facility"
            />
            <p className="mt-3 text-sm text-slate-400">
              Automatic pallet wrapping machine in operation — the type of
              equipment we optimise settings for.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
