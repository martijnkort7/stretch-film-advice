export const siteConfig = {
  name: 'Stretch Film Advice',
  tagline: 'Expert Stretch Film Consulting',
  url: 'https://www.stretchfilmadvice.com',
  email: 'egbertkort@stretchfilmadvice.com',
  emailInfo: 'info@stretchfilmadvice.com',
  phone: '+31 651571072',
  phoneDisplay: '+31 6 5157 1072',
  linkedin: 'https://www.linkedin.com/in/egbert-kort-73b4b321/',
  kvk: '86668188',
  owner: 'Egbert Kort',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
];

export const homepage = {
  hero: {
    overline: 'Stretch Film Advisory',
    heading: 'Reduce Your Stretch Film\nCosts by 30-50%',
    subtitle:
      'Expert advice on optimal film selection and machine settings, backed by 20 years of pallet wrapping experience across Europe.',
    cta: 'Get in Touch',
    ctaSecondary: 'Our Approach',
  },
  stats: [
    { value: 20, suffix: '+', label: 'Years of Experience' },
    { value: 17, suffix: '', label: 'European Countries' },
    { value: 50, suffix: '%', prefix: 'up to ', label: 'Cost Reduction' },
  ],
  value: {
    overline: 'The Problem',
    heading: 'Most Companies Use Far More Stretch Film Than Necessary',
    body: 'The majority of stretch film users do not fully utilise the capabilities of modern multilayer films. Combined with suboptimal machine settings, this results in excessive film usage, higher costs, and less stable pallets.',
    points: [
      'Thinner, higher-performance films can replace conventional options',
      'Proper machine settings maximise film pre-stretch and load containment',
      'The combination of better film and optimised settings delivers 30-50% reduction',
    ],
  },
  expertise: {
    overline: 'Why Stretch Film Advice',
    advisor: {
      heading: 'The Advisor',
      body: 'With nearly 20 years selling pallet wrapping machines, Egbert Kort brings a rare combination of machine expertise and film knowledge. He understands both sides of the equation.',
      link: '/about',
      linkLabel: 'Learn more',
    },
    approach: {
      heading: 'The Approach',
      body: 'A structured process from assessment to implementation. We analyse your current setup, recommend optimal film and settings, and verify the results on-site.',
      link: '/services',
      linkLabel: 'View services',
    },
  },
  cta: {
    heading: 'Ready to Optimise Your Stretch Film Usage?',
    subtitle:
      'Get in touch to discuss how we can reduce your film costs while improving pallet stability.',
    button: 'Contact Us',
  },
};

export const about = {
  header: {
    overline: 'About',
    heading: 'Two Decades of Pallet Wrapping Expertise',
  },
  story: {
    heading: 'The Story Behind the Expertise',
    paragraphs: [
      'For nearly 20 years, Egbert Kort sold and serviced pallet wrapping machines across Europe. Working directly with manufacturers and end-users, he developed a deep understanding of how machines, settings, and film interact to create stable, efficient pallet loads.',
      'This hands-on experience revealed a consistent pattern: most companies were using far more stretch film than necessary. The issue was not the machines or the film, it was the lack of knowledge about how to optimise both together.',
      'That insight led to the founding of Stretch Film Advice. Today, Egbert works with distributors across 17 European countries, helping their customers achieve significant cost reductions through better film selection and optimised machine settings.',
    ],
  },
  highlights: [
    {
      heading: 'Machine Expertise',
      body: 'Nearly 20 years of selling and configuring pallet wrapping machines provides unmatched technical knowledge of settings, pre-stretch systems, and load containment.',
    },
    {
      heading: 'Film Knowledge',
      body: 'Deep understanding of multilayer stretch film technology: how different film constructions perform under various conditions and applications.',
    },
    {
      heading: 'European Network',
      body: 'An established network of distributors across 17 European countries, enabling efficient advisory services throughout the continent.',
    },
    {
      heading: 'Proven Results',
      body: 'Hundreds of optimisation projects with consistent results: 30-50% less film usage with equal or improved pallet stability.',
    },
  ],
  different: {
    overline: 'The Difference',
    heading: 'What Sets This Apart',
    body: 'Most stretch film sellers know film. Most machine suppliers know machines. Egbert knows both, and that combination is what delivers results.',
    points: [
      {
        heading: 'Film Sellers',
        body: 'Know their product, but often lack understanding of machine settings that determine actual performance.',
      },
      {
        heading: 'Machine Suppliers',
        body: 'Understand the equipment, but typically do not advise on optimal film selection for specific applications.',
      },
      {
        heading: 'Stretch Film Advice',
        body: 'Combines both worlds: the right film matched with optimal machine settings for maximum efficiency.',
      },
    ],
  },
};

export const services = {
  header: {
    overline: 'Services',
    heading: 'From Assessment to Optimisation',
    subtitle:
      'A structured approach to reducing your stretch film costs while maintaining, or improving, pallet stability.',
  },
  process: {
    overline: 'Our Process',
    heading: 'How We Work',
    steps: [
      {
        number: '01',
        heading: 'Assessment',
        body: 'We visit your site to analyse current film usage, machine settings, and pallet wrapping patterns. This gives us a clear picture of your starting point.',
      },
      {
        number: '02',
        heading: 'Recommendation',
        body: 'Based on the assessment, we identify the optimal film type, thickness, and machine settings for your specific products and pallets.',
      },
      {
        number: '03',
        heading: 'Implementation',
        body: 'We adjust machine settings on-site and trial the recommended film. Your team sees the results immediately and learns the new setup.',
      },
      {
        number: '04',
        heading: 'Verification',
        body: 'We measure the actual savings (film usage, cost reduction, and pallet stability) to confirm the results meet expectations.',
      },
    ],
  },
  offerings: {
    overline: 'What We Offer',
    heading: 'Our Services',
    items: [
      {
        heading: 'Film Selection Advisory',
        body: 'Expert guidance on choosing the right multilayer stretch film for your specific application, products, and wrapping equipment.',
      },
      {
        heading: 'Machine Optimisation',
        body: 'On-site adjustment of pallet wrapping machine settings (pre-stretch, force, wrap patterns) to maximise film performance.',
      },
      {
        heading: 'On-Site Audits & Training',
        body: 'Comprehensive audits of your pallet wrapping process, plus training for your team and distributor sales staff.',
      },
      {
        heading: 'Troubleshooting',
        body: 'Diagnosis and resolution of pallet wrapping issues: load failures, film breaks, inconsistent results, and equipment problems.',
      },
    ],
  },
  results: {
    overline: 'Typical Results',
    heading: 'What You Can Expect',
    before: {
      heading: 'Before Optimisation',
      points: [
        '23 micron conventional stretch film',
        'Standard machine pre-stretch (150-200%)',
        'High film consumption per pallet',
        'Inconsistent load stability',
      ],
    },
    after: {
      heading: 'After Optimisation',
      points: [
        '12 micron high-performance multilayer film',
        'Optimised pre-stretch (280-350%)',
        '30-50% reduction in film usage',
        'Equal or improved pallet stability',
      ],
    },
  },
};

export const contact = {
  header: {
    overline: 'Contact',
    heading: 'Discuss Your Stretch Film Optimisation',
    subtitle:
      'Whether you are a distributor looking for advisory support or an end-user seeking to reduce costs, we are here to help.',
  },
  form: {
    submitLabel: 'Send Message',
    submitting: 'Sending...',
    success:
      'Thank you for your message. We will respond within 24 hours.',
    error:
      'Something went wrong. Please try emailing us directly at egbertkort@stretchfilmadvice.com.',
  },
  info: {
    heading: 'Get in Touch',
    body: 'Based in the Netherlands, we help distributors and end-users across Europe achieve 30-50% reductions in stretch film usage through expert advisory.',
  },
  microcopy: 'We aim to respond to all inquiries within one business day.',
};

export const footer = {
  description:
    'Expert stretch film advisory, helping distributors and their customers reduce film costs by 30-50% through optimal film selection and machine settings.',
  copyright: `(c) ${new Date().getFullYear()} Stretch Film Advice. All rights reserved.`,
};
