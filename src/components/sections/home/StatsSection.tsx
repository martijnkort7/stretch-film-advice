import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { homepage } from '@/lib/content';

export function StatsSection() {
  return (
    <Section variant="light" className="py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {homepage.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-navy-950">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="mt-3 text-sm font-medium tracking-[0.15em] text-slate-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
