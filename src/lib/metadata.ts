import type { Metadata } from 'next';
import { services } from '@/lib/content';

const baseUrl = 'https://www.stretchfilmadvice.com';

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Stretch Film Advice | Cut Stretch Film Costs by 30-50%',
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
    'stretch film cost savings',
    'pallet wrapping machine settings',
    'stretch film consultant Europe',
    'stretch film assessment',
    'pallet wrapping optimization',
    'how to reduce stretch film costs',
    'pallet wrapping machine settings optimization',
    'stretch film thickness comparison',
    'multilayer vs conventional stretch film',
    'stretch film waste reduction',
    'pallet load stability testing',
    'stretch film pre-stretch settings',
    'pallet wrap cost calculator',
    '67 layer stretch film',
    'stretch film holding force',
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
    title: 'Stretch Film Advice | Cut Stretch Film Costs by 30-50%',
    description:
      'Cut stretch film costs by 30-50% with expert advice on film selection and machine settings across 25+ European countries.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stretch Film Advice — More Stable Pallets, 30–50% Less Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stretch Film Advice | Cut Stretch Film Costs by 30-50%',
    description:
      'More stable pallets and 30–50% less stretch film. Free on-site assessment across 25+ European countries.',
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
    title: 'More Stable Pallets, 30–50% Less Film | Stretch Film Advice',
    description:
      'Most clients achieve more stable pallets and save 30–50% on stretch film costs — results visible from day one. Free on-site assessment across 25+ European countries.',
  },
};

export const aboutMetadata: Metadata = {
  title: 'About Egbert Kort — 45+ Years of Stretch Film Expertise',
  description:
    'With 45+ years in the pallet wrapping industry across Europe, Egbert Kort combines machine expertise with film knowledge to deliver measurable savings at over 1,000 sites. Learn his story.',
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
  title: 'Free Stretch Film Assessment — Save 30-50% on Film Costs',
  description:
    'From on-site assessment to verified results: a proven 4-step process to cut your stretch film costs by 30-50%. Free half-day assessment, detailed report within one week. Over 1,000 sites assessed.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    url: `${baseUrl}/services`,
    title: 'Free Stretch Film Assessment — Save 30-50% on Film Costs',
    description:
      'Comprehensive stretch film services: free on-site assessments, film selection advisory, machine configuration, training, and troubleshooting.',
  },
};

export const resultsMetadata: Metadata = {
  title: 'Stretch Film Savings — Real Results from 1,000+ Assessments',
  description:
    'Real case studies with verified savings. See how companies across Europe cut stretch film costs by 30-63% through better multilayer film and proper machine settings. 95% success rate.',
  alternates: {
    canonical: `${baseUrl}/results`,
  },
  openGraph: {
    url: `${baseUrl}/results`,
    title: 'Stretch Film Savings — Real Results from 1,000+ Assessments',
    description:
      'Real numbers from real assessments. 95% of projects achieve 30%+ savings on stretch film costs.',
  },
};

export const contactMetadata: Metadata = {
  title: 'Contact — Request Your Free Stretch Film Assessment',
  description:
    'Request a free stretch film assessment for your facility. Get a detailed savings report within one week, covering film selection and machine settings. No obligation, serving 25+ European countries.',
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
    'Hungary',
    'Romania',
    'Greece',
    'Croatia',
    'Slovakia',
    'Slovenia',
    'Latvia',
    'Lithuania',
    'Estonia',
    'Bulgaria',
  ],
  founder: {
    '@type': 'Person',
    name: 'Egbert Kort',
    jobTitle: 'Founder & Stretch Film Consultant',
  },
  sameAs: ['https://www.linkedin.com/in/egbert-kort-73b4b321/'],
  knowsAbout: [
    'stretch film optimization',
    'pallet wrapping machine settings',
    'multilayer stretch film technology',
    'pre-stretch configuration',
    'load stability testing',
    'holding force measurement',
  ],
};

export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Reduce Stretch Film Costs by 30-50%',
  description:
    'A proven 4-step process to cut stretch film costs through proper film selection and machine settings optimisation.',
  totalTime: 'P14D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'On-Site Assessment',
      text: 'A half-day on-site visit to measure pre-stretch percentage, film weight per pallet, holding force, and wrap patterns. Every measurement is documented with photos.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Detailed Recommendation',
      text: 'Within one week, receive a detailed report covering your current situation, recommended film specification, machine settings, wrap patterns, and projected savings in euros.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'On-Site Implementation',
      text: 'Machine configuration on-site: adjusting gear ratios for optimal pre-stretch, setting wrap force profiles, programming wrap patterns, and training operators.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Same-Day Verification',
      text: 'Results verified the same day by measuring holding force and film weight per pallet. A complete before-and-after report confirms the achieved savings.',
    },
  ],
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Stretch Film Consulting',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Stretch Film Advice',
    url: baseUrl,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Europe',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Stretch Film Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free On-Site Assessment',
          description:
            'Half-day on-site measurement of pre-stretch, film weight, holding force, and wrap patterns with a detailed savings report within one week.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machine Configuration',
          description:
            'On-site adjustment of pallet wrapping machines including pre-stretch ratios, wrap force, rotation speed, and wrap patterns for approximately 40 machine brands.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Film Supply & Selection',
          description:
            'High-performance 67-layer multilayer stretch film supply through a European distributor network, matched to specific products and equipment.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'On-Site Audits & Training',
          description:
            'Comprehensive pallet wrapping process audit with operator training on optimal settings, monitoring procedures, and performance maintenance.',
        },
      },
    ],
  },
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

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: services.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};
