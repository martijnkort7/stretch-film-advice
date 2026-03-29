import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { results } from '@/lib/content';

export function ResultsHero() {
  return (
    <section className="bg-navy-950 pt-24 pb-12 md:pt-40 md:pb-20">
      <Container>
        <FadeIn>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-red-400 uppercase">
            {results.header.overline}
          </p>
          <h1 className="max-w-4xl font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
            {results.header.heading}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-14">
            {results.intro.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-blue-500 pl-5">
                <p className="font-serif text-2xl text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
