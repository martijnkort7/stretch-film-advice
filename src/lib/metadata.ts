import type { Metadata } from 'next';

const baseUrl = 'https://www.stretchfilmadvice.com';

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Stretch Film Advice | Expert Stretch Film Consulting',
    template: '%s | Stretch Film Advice',
  },
  description:
    'Reduce stretch film costs by 30-50% with expert advice on film selection and machine optimisation. 40+ years of pallet wrapping experience across 17 European countries.',
  keywords: [
    'stretch film',
    'pallet wrapping',
    'film optimisation',
    'machine settings',
    'multilayer stretch film',
    'cost reduction',
    'pallet wrapping consultant',
  ],
  authors: [{ name: 'Egbert Kort' }],
  creator: 'Stretch Film Advice',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Stretch Film Advice',
    title: 'Stretch Film Advice | Expert Stretch Film Consulting',
    description:
      'Reduce stretch film costs by 30-50% with expert advice on film selection and machine optimisation across Europe.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stretch Film Advice - Expert Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stretch Film Advice | Expert Stretch Film Consulting',
    description:
      'Reduce stretch film costs by 30-50% with expert advice on film selection and machine optimisation.',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const homeMetadata: Metadata = {
  description:
    'Reduce your stretch film costs by 30-50%. Expert advisory on optimal film selection and machine settings, backed by over 40 years of pallet wrapping experience across Europe.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    url: baseUrl,
    title: 'Expert Stretch Film Consulting | Reduce Costs by 30-50%',
    description:
      'Expert stretch film advisory across 17 European countries. Achieve 30-50% cost reduction through optimal film selection and machine settings.',
  },
};

export const aboutMetadata: Metadata = {
  title: 'About',
  description:
    'With over 40 years in the pallet wrapping industry across Europe, Egbert Kort combines machine expertise with film knowledge to deliver measurable savings.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    url: `${baseUrl}/about`,
    title: 'About Egbert Kort | 40+ Years of Pallet Wrapping Expertise',
    description:
      'Over 40 years of pallet wrapping machine experience combined with deep stretch film knowledge.',
  },
};

export const servicesMetadata: Metadata = {
  title: 'Services',
  description:
    'From on-site assessment to verified results: a structured 4-step process to optimise your stretch film usage and pallet stability.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    url: `${baseUrl}/services`,
    title: 'Services | Film Assessment, Machine Optimisation & Training',
    description:
      'Comprehensive stretch film services: on-site assessments, film selection advisory, machine optimisation, training, and troubleshooting.',
  },
};

export const contactMetadata: Metadata = {
  title: 'Contact',
  description:
    'Request a free stretch film assessment. Get a detailed report on your savings potential - no obligation.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    url: `${baseUrl}/contact`,
    title: 'Contact | Request Your Free Stretch Film Assessment',
    description:
      'Get in touch for a free stretch film assessment. Serving distributors and end-users across 17 European countries.',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Stretch Film Advice',
  description:
    'Expert stretch film consulting: reduce costs by 30-50% through optimal film selection and machine settings.',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  telephone: '+31651571072',
  email: 'egbertkort@stretchfilmadvice.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
  areaServed: [
    'Netherlands',
    'Germany',
    'Belgium',
    'France',
    'United Kingdom',
    'Spain',
    'Italy',
    'Poland',
    'Austria',
    'Switzerland',
    'Czech Republic',
    'Denmark',
    'Sweden',
    'Norway',
    'Finland',
    'Portugal',
    'Ireland',
  ],
  founder: {
    '@type': 'Person',
    name: 'Egbert Kort',
    jobTitle: 'Founder & Stretch Film Consultant',
  },
  sameAs: ['https://www.linkedin.com/in/egbert-kort-73b4b321/'],
};
