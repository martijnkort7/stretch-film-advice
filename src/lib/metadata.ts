import type { Metadata } from 'next';

const baseUrl = 'https://www.stretchfilmadvice.com';

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Stretch Film Advice | Expert Stretch Film Consulting',
    template: '%s | Stretch Film Advice',
  },
  description:
    'Cut stretch film costs by 30-50% with expert advice on film selection and machine settings. 45+ years of pallet wrapping experience across 25+ European countries.',
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
      'Cut stretch film costs by 30-50% with expert advice on film selection and machine settings across 25+ European countries.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stretch Film Advice - Cut stretch film costs by 30-50%',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stretch Film Advice | Expert Stretch Film Consulting',
    description:
      'Cut stretch film costs by 30-50% with expert advice on film selection and machine settings.',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    'theme-color': '#0A1628',
  },
};

export const homeMetadata: Metadata = {
  description:
    'Cut your stretch film costs by 30-50%. Expert advisory on film selection and machine settings, backed by 45+ years of pallet wrapping experience across 25+ European countries.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    url: baseUrl,
    title: 'Expert Stretch Film Consulting | Cut Costs by 30-50%',
    description:
      'Expert stretch film advisory across 25+ European countries. Achieve 30-50% cost reduction through optimal film selection and machine settings.',
  },
};

export const aboutMetadata: Metadata = {
  title: 'About',
  description:
    'With 45+ years in the pallet wrapping industry across Europe, Egbert Kort combines machine expertise with film knowledge to deliver measurable savings at over 1,000 sites.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    url: `${baseUrl}/about`,
    title: 'About Egbert Kort | 45+ Years of Pallet Wrapping Expertise',
    description:
      '45+ years of pallet wrapping machine experience combined with deep stretch film knowledge. Over 1,000 sites assessed across 25+ countries.',
  },
};

export const servicesMetadata: Metadata = {
  title: 'Services',
  description:
    'From on-site assessment to verified results: a proven 4-step process to cut your stretch film costs by 30-50%. Free assessment, over 1,000 sites assessed.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    url: `${baseUrl}/services`,
    title: 'Services | Film Assessment, Machine Configuration & Training',
    description:
      'Comprehensive stretch film services: free on-site assessments, film selection advisory, machine configuration, training, and troubleshooting.',
  },
};

export const resultsMetadata: Metadata = {
  title: 'Results',
  description:
    'Real case studies with verified savings. See how companies across Europe cut stretch film costs by 30-50% through better film and proper machine settings.',
  alternates: {
    canonical: `${baseUrl}/results`,
  },
  openGraph: {
    url: `${baseUrl}/results`,
    title: 'Results | Verified Stretch Film Savings Across Europe',
    description:
      'Real numbers from real assessments. 95% of projects achieve 30%+ savings on stretch film costs.',
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
      'Get in touch for a free stretch film assessment. Serving distributors and end-users across 25+ European countries.',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Stretch Film Advice',
  description:
    'Expert stretch film consulting: cut costs by 30-50% through optimal film selection and machine settings.',
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

export function breadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}
