import { ResultsHero } from '@/components/sections/results/ResultsHero';
import { CaseStudySlider } from '@/components/sections/results/CaseStudySlider';
import { CTASection } from '@/components/sections/home/CTASection';
import { results } from '@/lib/content';
import { resultsMetadata, breadcrumbSchema } from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';

export const metadata = resultsMetadata;

export default function ResultsPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema(
          'Case Studies',
          'https://www.stretchfilmadvice.com/case-studies',
        )}
      />
      <ResultsHero />
      <CaseStudySlider />
      <CTASection
        heading={results.cta.heading}
        subtitle={results.cta.subtitle}
        button={results.cta.button}
      />
    </>
  );
}
