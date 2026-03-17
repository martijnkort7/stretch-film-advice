export const siteConfig = {
  name: 'Stretch Film Advice',
  tagline: 'Expert Stretch Film Consulting',
  url: 'https://www.stretchfilmadvice.com',
  email: 'egbertkort@stretchfilmadvice.com',
  emailInfo: 'info@stretchfilmadvice.com',
  phone: '+31 651571072',
  phoneDisplay: '+31 6 5157 1072',
  whatsapp: 'https://wa.me/31651571072',
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
      'We supply premium multilayer stretch film through distributors across Europe and advise on optimal film selection and machine settings, backed by over 40 years of pallet wrapping experience.',
    cta: 'Request a Free Film Assessment',
    ctaSecondary: 'See How We Work',
    ctaSubtext:
      'Receive a detailed report on your current film usage and savings potential, completely free of obligation.',
  },
  stats: [
    { value: 40, suffix: '+', label: 'Years of Experience' },
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
  howWeWork: {
    overline: 'Our Process',
    heading: 'How We Work',
    linkLabel: 'View full process',
    steps: [
      {
        number: '01',
        heading: 'Assessment',
        body: 'On-site analysis of your current film usage and machine settings.',
      },
      {
        number: '02',
        heading: 'Recommendation',
        body: 'Optimal film type and machine configuration for your specific needs.',
      },
      {
        number: '03',
        heading: 'Implementation',
        body: 'We adjust settings and trial the recommended film with your team.',
      },
      {
        number: '04',
        heading: 'Verification',
        body: 'Measure actual savings and confirm results meet expectations.',
      },
    ],
  },
  expertise: {
    overline: 'Why Stretch Film Advice',
    heading: 'Expertise Meets Experience',
    advisor: {
      heading: 'The Advisor',
      body: 'With over 40 years in the pallet wrapping industry, Egbert Kort brings a rare combination of machine expertise and film knowledge. He understands both sides of the equation.',
      link: '/about',
      linkLabel: 'Learn more',
      icon: 'user' as const,
      image: '/images/Photo Egbert Kort.jpeg',
    },
    approach: {
      heading: 'The Approach',
      body: 'A structured process from assessment to implementation. We analyse your current setup, recommend optimal film and settings, and verify the results on-site.',
      link: '/services',
      linkLabel: 'View services',
      icon: 'clipboard-check' as const,
    },
  },
  beforeAfter: {
    overline: 'Typical Results',
    heading: 'Real-World Impact',
    subtitle: 'See what optimisation achieves in actual operations.',
    headers: ['Metric', 'Before', 'After', 'Improvement'],
    rows: [
      {
        metric: 'Film Thickness',
        before: '23 micron conventional',
        after: '12 micron multilayer',
        improvement: '48% thinner',
      },
      {
        metric: 'Pre-stretch',
        before: '150-200%',
        after: '280-350%',
        improvement: '+87% efficiency',
      },
      {
        metric: 'Film per Pallet',
        before: 'High consumption',
        after: '30-50% reduction',
        improvement: 'Significant savings',
      },
      {
        metric: 'Load Stability',
        before: 'Inconsistent',
        after: 'Equal or better',
        improvement: 'Tilt-test verified',
      },
    ],
  },
  logos: {
    heading: 'Trusted Across Europe',
    items: [
      { name: 'Partner 1', src: '' },
      { name: 'Partner 2', src: '' },
      { name: 'Partner 3', src: '' },
      { name: 'Partner 4', src: '' },
      { name: 'Partner 5', src: '' },
      { name: 'Partner 6', src: '' },
    ],
  },
  cta: {
    heading: 'Ready to Optimise Your Stretch Film Usage?',
    subtitle:
      'Get in touch to discuss how we can reduce your film costs while improving pallet stability.',
    button: 'Get Your Free Savings Report',
  },
};

export const about = {
  header: {
    overline: 'About',
    heading: 'Two Decades of Pallet Wrapping Expertise',
    subtitle:
      'Where most advisors know film or machines, Egbert Kort spent over 40 years mastering both.',
  },
  story: {
    heading: 'The Story Behind the Expertise',
    paragraphs: [
      'For over 40 years, Egbert Kort has worked in the pallet wrapping industry across Europe. Working directly with manufacturers and end-users, he developed a deep understanding of how machines, settings, and film interact to create stable, efficient pallet loads.',
      'This hands-on experience revealed a consistent pattern: most companies were using far more stretch film than necessary. The issue was not the machines or the film, it was the lack of knowledge about how to optimise both together.',
      'That insight led to the founding of Stretch Film Advice. Today, Egbert supplies premium multilayer stretch film through a network of distributors across 17 European countries, and works alongside them to help end-users achieve significant cost reductions through better film selection and optimised machine settings.',
    ],
  },
  timeline: {
    heading: 'Key Milestones',
    items: [
      {
        year: '1981',
        label: 'Started in stretch wrapping',
        description:
          'Began selling stretch wrappers at Matco BV',
      },
      {
        year: '1999',
        label: 'Moved into stretch film',
        description:
          'Senior Account Manager Industrial Stretch Films at AFP',
      },
      {
        year: '2020',
        label: 'Broadened industry expertise',
        description: 'Senior Sales Engineer at Trioworld',
      },
      {
        year: '2022',
        label: 'Stretch Film Advice founded',
        description:
          'Combined 40+ years of machine and film knowledge into independent advisory',
      },
    ],
  },
  highlightsSection: {
    overline: 'Expertise',
    heading: 'Core Competencies',
  },
  highlights: [
    {
      heading: 'Machine Expertise',
      body: 'Over 40 years of selling and configuring pallet wrapping machines provides unmatched technical knowledge of settings, pre-stretch systems, and load containment.',
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
    comparison: {
      headers: [
        '',
        'Film Sellers',
        'Machine Suppliers',
        'Stretch Film Advice',
      ],
      rows: [
        {
          feature: 'Film selection expertise',
          filmSellers: true,
          machineSuppliers: false,
          stretchFilmAdvice: true,
        },
        {
          feature: 'Machine settings knowledge',
          filmSellers: false,
          machineSuppliers: true,
          stretchFilmAdvice: true,
        },
        {
          feature: 'On-site optimisation',
          filmSellers: false,
          machineSuppliers: 'partial' as const,
          stretchFilmAdvice: true,
        },
        {
          feature: 'Verified cost reduction',
          filmSellers: false,
          machineSuppliers: false,
          stretchFilmAdvice: true,
        },
        {
          feature: 'European distributor network',
          filmSellers: 'partial' as const,
          machineSuppliers: false,
          stretchFilmAdvice: true,
        },
      ],
    },
  },
  cta: {
    heading: 'Put Two Decades of Expertise to Work',
    subtitle:
      "Whether you are a distributor seeking advisory support or an end-user looking to cut film costs, let's explore what's possible.",
    button: 'Schedule a Conversation',
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
        body: 'We visit your facility to conduct a comprehensive analysis of your current stretch film usage, pallet wrapping machine settings, and load patterns. This includes measuring actual film consumption per pallet, evaluating pre-stretch percentages, observing operator techniques, and assessing pallet stability after wrapping. The assessment gives us a complete baseline to identify improvement opportunities.',
      },
      {
        number: '02',
        heading: 'Recommendation',
        body: 'Based on the assessment findings, we develop a tailored optimisation plan. This includes selecting the optimal multilayer film specification for your specific products and load types, calculating the ideal machine settings (pre-stretch ratio, wrap force, overlap percentage, top and bottom wraps), and projecting the expected film reduction and cost savings. You receive a detailed report with clear recommendations.',
      },
      {
        number: '03',
        heading: 'Implementation',
        body: 'We return to your site to implement the changes hands-on. This involves adjusting your pallet wrapping machine settings to the optimal configuration, introducing the recommended film, and running test wraps with your team present. Your operators learn the new settings and see the immediate results. We ensure everyone understands the changes and can maintain the optimised process going forward.',
      },
      {
        number: '04',
        heading: 'Verification',
        body: 'After implementation, we measure and verify the actual results against our projections. This includes calculating the exact film reduction achieved (typically 30-50%), confirming cost savings, and conducting load stability tests such as the 26-degree tilt test to verify that pallet integrity meets or exceeds previous standards. You receive documented proof of the improvements.',
      },
    ],
  },
  offerings: {
    overline: 'What We Offer',
    heading: 'Our Services',
    items: [
      {
        heading: 'Film Supply & Selection',
        body: 'We supply high-performance multilayer stretch film through our distributor network and advise on the right film for your specific application, products, and wrapping equipment.',
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
    subtitle: 'Real-world data from actual optimisation projects.',
    headers: ['Metric', 'Before Optimisation', 'After Optimisation', 'Improvement'],
    rows: [
      {
        metric: 'Film Specification',
        before: '23 micron conventional stretch film',
        after: '12 micron high-performance multilayer film',
        improvement: '48% thinner film',
      },
      {
        metric: 'Machine Pre-stretch',
        before: 'Standard setting: 150-200%',
        after: 'Optimised setting: 280-350%',
        improvement: '+87% stretch efficiency',
      },
      {
        metric: 'Film Consumption',
        before: 'High usage per pallet',
        after: '30-50% reduction in film per pallet',
        improvement: 'Significant cost savings',
      },
      {
        metric: 'Load Stability',
        before: 'Inconsistent containment force',
        after: 'Equal or improved stability (tilt-test verified)',
        improvement: 'Verified improvement',
      },
    ],
    tiltTest: {
      overline: 'Proof of Performance',
      heading: 'How We Prove Results',
      body: 'Every optimisation project includes a 26-degree tilt test to verify that pallet stability meets or exceeds the original configuration. This industry-standard test demonstrates maximum containment force and confirms that reduced film usage does not compromise load security.',
      caption:
        'A 26-degree tilt test validates maximum containment force. This pallet, wrapped with optimised 12 micron film, exceeds the stability of conventional 23 micron wrapping.',
      image: '/images/26 degree test with plastic cans.jpeg',
      imageAlt:
        '26-degree tilt test demonstrating pallet stability after film optimisation',
    },
  },
  faq: {
    overline: 'Frequently Asked Questions',
    heading: 'Common Questions',
    items: [
      {
        question: 'How much can I realistically save on stretch film costs?',
        answer: 'Answer coming soon.',
      },
      {
        question: 'Will thinner film compromise pallet stability?',
        answer: 'Answer coming soon.',
      },
      {
        question: 'Do I need to buy a new wrapping machine?',
        answer: 'Answer coming soon.',
      },
      {
        question: 'How long does the optimisation process take?',
        answer: 'Answer coming soon.',
      },
      {
        question: 'Do you work with distributors or end-users?',
        answer: 'Answer coming soon.',
      },
      {
        question: 'What if the projected savings are not achieved?',
        answer: 'Answer coming soon.',
      },
    ],
  },
  cta: {
    heading: 'See the Difference on Your Own Line',
    subtitle:
      'Request a no-obligation assessment of your current wrapping process. Most clients see savings of 30-50% in film usage.',
    button: 'Request a Free Assessment',
  },
};

export const contact = {
  header: {
    overline: 'Contact',
    heading: 'Request Your Free Film Assessment',
    subtitle:
      'Whether you are a distributor looking for advisory support or an end-user seeking to reduce costs, we are here to help.',
  },
  audiences: {
    heading: 'Who We Work With',
    cards: [
      {
        title: 'End-Users',
        description:
          'Companies using pallet wrapping machines looking to reduce film costs and improve load stability.',
        expectation:
          'Get a detailed assessment of your current setup, tailored recommendations, on-site implementation, and verified results within 2-4 weeks.',
      },
      {
        title: 'Distributors',
        description:
          'Stretch film distributors seeking technical advisory support for their clients across Europe.',
        expectation:
          'Partner with an expert who provides on-site assessments, technical training for your sales team, and proven results that strengthen client relationships.',
      },
    ],
  },
  form: {
    submitLabel: 'Send Message',
    submitting: 'Sending...',
    success:
      'Thank you for your message. We will respond within 24 hours.',
    error:
      'Something went wrong. Please try emailing us directly at egbertkort@stretchfilmadvice.com.',
    audienceLabel: 'I am a...',
    audienceOptions: [
      { value: '', label: 'Select one...' },
      { value: 'end-user', label: 'End-User (company using stretch film)' },
      { value: 'distributor', label: 'Distributor (selling stretch film)' },
      { value: 'other', label: 'Other' },
    ],
  },
  info: {
    heading: 'Get in Touch',
    body: 'Based in the Netherlands, we help distributors and end-users across Europe achieve 30-50% reductions in stretch film usage through expert advisory.',
  },
  microcopy: 'We aim to respond to all inquiries within one business day.',
};

export const ui = {
  getInTouch: 'Get in Touch',
  skipToContent: 'Skip to content',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  navigationLabel: 'Navigation',
  contactLabel: 'Contact',
  connectOnLinkedIn: 'Connect on LinkedIn',
  connectOnLinkedInAria: 'Connect with Egbert Kort on LinkedIn',
  whatsAppLabel: 'WhatsApp',
  contactViaWhatsApp: 'Contact via WhatsApp',
  sendAMessage: 'Send a message',
  callNow: 'Call',
  callNowAria: 'Call Stretch Film Advice',
  linkedInLabel: 'LinkedIn',
  whatToExpect: 'What to expect',
  contactInfoEmail: 'Email',
  contactInfoPhone: 'Phone',
};

export const notFoundPage = {
  code: '404',
  heading: 'Page Not Found',
  body: "The page you\u2019re looking for doesn\u2019t exist or has been moved.",
  backToHome: 'Back to Home',
};

export const formLabels = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  phone: 'Phone',
  message: 'Message',
  thankYou: 'Thank you',
  namePlaceholder: 'Your full name',
  emailPlaceholder: 'you@company.com',
  companyPlaceholder: 'Your company name',
  phonePlaceholder: '+31 6 1234 5678',
  messagePlaceholder:
    'Describe your current wrapping process or specific challenges...',
  sendAnother: 'Send another message',
};

export const footer = {
  description:
    'Supplying premium multilayer stretch film through distributors across Europe, with expert advisory to reduce film costs by 30-50% through optimal film selection and machine settings.',
  europeanCoverage: 'Active in 17 European countries',
  copyright: `\u00A9 ${new Date().getFullYear()} Stretch Film Advice. All rights reserved.`,
};
