import { PageHeader } from '@/components/sections/PageHeader';
import { MultilayerDifference } from '@/components/sections/films/MultilayerDifference';
import { CaseStudyDM } from '@/components/sections/films/CaseStudyDM';
import { BrakeSystemSelector } from '@/components/sections/films/BrakeSystemSelector';
import { PalletGuide } from '@/components/sections/films/PalletGuide';
import { FilmCatalogue } from '@/components/sections/films/FilmCatalogue';
import { FilmsFAQ } from '@/components/sections/films/FilmsFAQ';
import { CTASection } from '@/components/sections/home/CTASection';
import { films } from '@/lib/content';
import {
  filmsMetadata,
  breadcrumbSchema,
  filmsFaqSchema,
} from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';

export const metadata = filmsMetadata;

export default function FilmsPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema(
          'Films & Applications',
          'https://www.stretchfilmadvice.com/films',
        )}
      />
      <SchemaScript schema={filmsFaqSchema} />
      <PageHeader
        overline={films.header.overline}
        heading={films.header.heading}
        subtitle={films.header.subtitle}
      />
      <MultilayerDifference />
      <CaseStudyDM />
      <BrakeSystemSelector />
      <PalletGuide />
      <FilmCatalogue />
      <FilmsFAQ />
      <CTASection
        heading={films.cta.heading}
        subtitle={films.cta.subtitle}
        button={films.cta.button}
      />
    </>
  );
}
