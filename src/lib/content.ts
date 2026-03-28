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
  { label: 'Results', href: '/results' },
];

export const homepage = {
  hero: {
    overline: 'Stretch Film Advisory',
    heading: 'Cut Your Stretch Film\nCosts by 30-50%',
    subtitle:
      'I help companies across Europe use less stretch film and get more stable pallets. Through the right multilayer film and proper machine settings, most clients save 30-50% on film costs, with results visible on the first day.',
    cta: 'Get Your Free Savings Report',
    ctaSecondary: 'See How It Works',
    ctaSubtext:
      'No obligation. I visit your site for half a day, measure everything, and deliver a detailed savings report within one week.',
  },
  stats: [
    { value: 45, suffix: '+', label: 'Years of Experience' },
    { value: 25, suffix: '+', label: 'Countries Across Europe' },
    { value: 1000, suffix: '+', label: 'Sites Assessed' },
    { value: 50, suffix: '%', prefix: 'up to ', label: 'Cost Reduction' },
  ],
  value: {
    overline: 'The Problem',
    heading: 'You Are Probably Using Twice the Film You Need',
    body: 'Most companies I visit have good machines, but the wrong settings. Their pre-stretch is set to 200% when 300% is achievable. They use 23-micron film when 10-micron performs better. They wrap five times when three would hold. The root cause is always the same: not knowing what modern film and proper settings can do.',
    points: [
      'A company wrapping 200 pallets a day can save over €30,000 per year',
      'Modern 67-layer multilayer film outperforms conventional film at half the thickness',
      '95% of my assessments achieve more than 30% film reduction',
    ],
  },
  howWeWork: {
    overline: 'The Process',
    heading: 'How It Works',
    linkLabel: 'View full process',
    steps: [
      {
        number: '01',
        heading: 'Assessment',
        body: 'I visit your site for half a day. I measure holding force, stretch percentage, film weight per pallet, and wrap patterns.',
      },
      {
        number: '02',
        heading: 'Recommendation',
        body: 'Within a week, you receive a detailed report: current situation with photos, recommended changes, and projected savings in euros.',
      },
      {
        number: '03',
        heading: 'Implementation',
        body: 'I configure your machines on-site, adjusting pre-stretch ratios, wrap force, and overlap patterns. I train your operators on the new settings.',
      },
      {
        number: '04',
        heading: 'Verification',
        body: 'Results are measured the same day. I verify holding force to confirm pallet stability equals or exceeds your previous setup.',
      },
    ],
  },
  expertise: {
    overline: 'Why Stretch Film Advice',
    heading: 'Expertise Meets Experience',
    advisor: {
      heading: 'The Advisor',
      body: '45 years in pallet wrapping. Over 1,000 sites assessed across 25+ countries. I was one of the first people in Europe to sell pallet wrapping machines, back in 1981. I know roughly 40 different machine brands and types, and I know exactly how to set each one for minimum film usage.',
      link: '/about',
      linkLabel: 'Learn more',
      icon: 'user' as const,
      image: '/images/egbert-kort.webp',
    },
    approach: {
      heading: 'The Approach',
      body: 'A half-day assessment, a detailed report within a week, and same-day verified results. The assessment is completely free. I work as an agent for the world\u2019s largest stretch film producer, so my costs are covered through film supply.',
      link: '/services',
      linkLabel: 'View services',
      icon: 'clipboard-check' as const,
    },
  },
  beforeAfter: {
    overline: 'Typical Results',
    heading: 'Real-World Impact',
    subtitle: 'Real numbers from an actual client assessment.',
    headers: ['Metric', 'Before', 'After', 'Improvement'],
    rows: [
      {
        metric: 'Film Thickness',
        before: '23 micron conventional',
        after: '10 micron Elite multilayer',
        improvement: '57% thinner',
      },
      {
        metric: 'Pre-stretch',
        before: '0% (no pre-stretch)',
        after: '300%',
        improvement: 'From zero to full pre-stretch',
      },
      {
        metric: 'Film per Pallet',
        before: '540 grams',
        after: '200 grams',
        improvement: '63% less film',
      },
      {
        metric: 'Load Stability',
        before: 'Adequate',
        after: 'Equal or improved',
        improvement: 'Holding force verified',
      },
    ],
  },
  industries: {
    overline: 'Industries We Serve',
    heading: 'Saving Film Across Every Sector',
    items: [
      {
        heading: 'Manufacturing',
        body: 'From automotive parts to building materials. High-volume lines with the most to gain from optimised settings and modern multilayer film.',
        icon: 'factory' as const,
      },
      {
        heading: 'FMCG & Food',
        body: 'Fast-moving consumer goods require stable pallets and consistent wrapping. I optimise for speed and stability on high-throughput lines.',
        icon: 'package' as const,
      },
      {
        heading: 'Logistics & 3PL',
        body: 'Distribution centres wrapping hundreds of pallets daily. Even small per-pallet savings add up to tens of thousands per year.',
        icon: 'truck' as const,
      },
      {
        heading: 'Retail & Distribution',
        body: 'Mixed loads, varying pallet heights, multiple product types. I configure machines to handle the full range without film waste.',
        icon: 'store' as const,
      },
    ],
  },
  cta: {
    heading: 'Find Out How Much Film You Are Wasting',
    subtitle:
      'The assessment is free and takes half a day. Most companies discover they can cut film costs by 30-50% while improving pallet stability.',
    button: 'See How Much You Can Save',
  },
};

export const about = {
  header: {
    overline: 'About',
    heading: '45 Years of Pallet Wrapping, from Day One',
    subtitle:
      'I was one of the first people in Europe to sell pallet wrapping machines. Since 1981, I have assessed over 1,000 sites in 25+ countries, and I still find savings at almost every one.',
  },
  story: {
    heading: 'The Story Behind the Expertise',
    quote:
      'We were among the first in Europe. We had to sell the concept of pallet wrapping itself.',
    paragraphs: [
      'In 1981, I started selling pallet wrapping machines at Matco BV. Pallet wrapping was so new in Europe that I had to sell the concept itself. Most companies had never seen a machine wrap a pallet. My first sale was a Full Web machine to Bendien in Naarden (The Netherlands), a company producing Pokon and Cysal, using 150-centimetre wide film.',
      'Over the following decades, I worked across the full supply chain. Matco was acquired by Bordex, which became part of AEP, the American packaging group. That evolved into AFP, and later Trioworld. Through every transition, I deepened my knowledge of both machines and film, a combination that very few people in this industry have.',
      'After retiring, I found I could not sit still. I had spent over four decades building expertise that companies across Europe still need. So I founded Stretch Film Advice, working as an independent expert and agent for the world\u2019s largest stretch film producer. Today, I visit sites across Europe, and the pattern I see everywhere is the same: companies wasting thousands of euros on film because nobody has shown them what is possible with modern 67-layer multilayer technology and proper machine settings.',
    ],
  },
  timeline: {
    heading: 'Key Milestones',
    items: [
      {
        year: '1981',
        label: 'Started in stretch wrapping',
        description:
          'Began selling some of Europe\u2019s first pallet wrapping machines at Matco BV. Had to sell the concept of pallet wrapping to an industry that had never seen it.',
      },
      {
        year: '1999',
        label: 'Moved into stretch film',
        description:
          'Moved from machines to film as Senior Account Manager at AFP, gaining deep expertise in multilayer stretch film technology.',
      },
      {
        year: '2020',
        label: 'Broadened industry expertise',
        description:
          'Senior Sales Engineer at Trioworld, combining machine and film knowledge across 25+ European markets.',
      },
      {
        year: '2022',
        label: 'Stretch Film Advice founded',
        description:
          'Founded Stretch Film Advice as an independent expert, representing the world\u2019s largest stretch film producer. Over 1,000 sites assessed and counting.',
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
      body: 'I know approximately 40 different machine brands and types. From manual turntables to fully automatic ring wrappers, I understand exactly which settings (gear ratios, pre-stretch percentages, wrap force, overlap patterns) deliver the best results for each machine.',
    },
    {
      heading: 'Film Knowledge',
      body: 'As an agent for the world\u2019s largest stretch film producer, I work with the latest 67-layer multilayer technology. I know which film construction works for which application, and why a 10-micron multilayer film can outperform a 23-micron conventional film.',
    },
    {
      heading: 'European Network',
      body: 'Active in over 25 European countries, from Latvia to Greece and everywhere in between. I work with a network of distributors and visit end-users directly, wherever the pallets are.',
    },
    {
      heading: 'Proven Results',
      body: '95% of my assessments achieve more than 30% savings. In the most dramatic case, a client went from 540 grams of film per pallet to 200 grams, achieving over 63% reduction with a more stable load.',
    },
  ],
  different: {
    overline: 'The Difference',
    heading: 'Why the Combination Matters',
    body: 'Film sellers know film. Machine suppliers know machines. I have spent 45 years working with both. That is why I can walk onto a site, look at the machine, look at the film, and tell you within minutes where the waste is and how to fix it.',
    comparison: {
      headers: ['', 'Film Sellers', 'Machine Suppliers', 'Stretch Film Advice'],
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
    heading: '45 Years of Experience, One Phone Call Away',
    subtitle:
      'Whether you distribute stretch film or use it on your own line, I can show you exactly where your savings are. The first step is always a conversation.',
    button: 'Let\u2019s Talk',
  },
};

export const services = {
  header: {
    overline: 'Services',
    heading: 'From Assessment to Verified Savings',
    subtitle:
      'A proven 4-step process that has delivered measurable results at over 1,000 sites across Europe. The assessment is completely free.',
  },
  process: {
    overline: 'The Process',
    heading: 'How I Work',
    steps: [
      {
        number: '01',
        heading: 'Assessment',
        body: 'I visit your facility for half a day. Using printed stretch film, I measure the exact pre-stretch percentage your machine achieves. I weigh the film on every pallet. I measure holding force to assess load stability. I photograph everything. By the end of the visit, I know exactly where your film is being wasted and how much you can save.',
      },
      {
        number: '02',
        heading: 'Recommendation',
        body: 'Within a week, you receive a detailed report. It covers your current situation with photos and measurements, the specific improvements I recommend (including film specification, machine settings, and wrap patterns) and the projected savings in euros per pallet and per year. No vague promises: concrete numbers based on what I measured on your floor.',
      },
      {
        number: '03',
        heading: 'Implementation',
        body: 'For fully automatic lines, I return on-site to configure your machines myself. This typically takes two or more hours per machine: adjusting gear ratios for optimal pre-stretch, setting wrap force profiles, and programming wrap patterns. I train your operators on the new settings, teach them how to monitor performance, and establish control procedures so the savings stick long-term.',
      },
      {
        number: '04',
        heading: 'Verification',
        body: 'Results are verified the same day as implementation. I measure holding force on the newly wrapped pallets to confirm stability meets or exceeds your previous configuration. I weigh the film per pallet to calculate the exact reduction achieved. You receive a complete before-and-after report with photos, measurements, and verified savings.',
      },
    ],
  },
  offerings: {
    overline: 'What I Offer',
    heading: 'Services',
    items: [
      {
        heading: 'Film Supply & Selection',
        body: 'I supply high-performance multilayer stretch film from the world\u2019s largest producer through a network of distributors across 25+ European countries. I match the right film to your specific products, pallet configurations, and wrapping equipment.',
      },
      {
        heading: 'Machine Configuration',
        body: 'On-site adjustment of your pallet wrapping machines. I work with approximately 40 different brands and types, configuring pre-stretch ratios, wrap force, rotation speed, and wrap patterns for maximum performance with minimum film.',
      },
      {
        heading: 'On-Site Audits & Training',
        body: 'Comprehensive audit of your pallet wrapping process. I train your operators on optimal settings, monitoring procedures, and what to check when film performance drops. For distributors, I train your sales teams to have informed conversations about film performance.',
      },
      {
        heading: 'Troubleshooting',
        body: 'When pallets fail in transit, film breaks during wrapping, or results are inconsistent, I diagnose the root cause, whether it is the machine, the film, the settings, or the combination. Most problems I can solve in a single visit.',
      },
    ],
  },
  results: {
    overline: 'Typical Results',
    heading: 'What You Can Expect',
    subtitle: 'Real numbers from actual client assessments.',
    headers: [
      'Metric',
      'Before',
      'After',
      'Improvement',
    ],
    rows: [
      {
        metric: 'Film Specification',
        before: '23 micron conventional stretch film',
        after: '10 micron Elite multilayer film',
        improvement: '57% thinner film',
      },
      {
        metric: 'Machine Pre-stretch',
        before: '0% (no pre-stretch)',
        after: '300%',
        improvement: 'From zero to full pre-stretch',
      },
      {
        metric: 'Film Consumption',
        before: '540 grams per pallet',
        after: '200 grams per pallet',
        improvement: '63% less film',
      },
      {
        metric: 'Load Stability',
        before: 'Adequate containment force',
        after: 'Equal or improved (holding force verified)',
        improvement: 'More stable with less film',
      },
    ],
    tiltTest: {
      overline: 'Proof of Performance',
      heading: 'How I Verify Results',
      body: 'Every assessment includes holding force measurement, the most reliable indicator of pallet stability. Holding force tells you exactly how tightly the film grips the load, regardless of product type or pallet shape. In some cases, I also perform the 26-degree tilt test as an additional visual demonstration of load integrity.',
      caption:
        'The 26-degree tilt test provides a visual demonstration of load stability. These pallets, wrapped with optimised multilayer film, exceed the stability of their previous conventional wrapping despite using significantly less film.',
      image: '/images/tilt-test-cans.webp',
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
        answer:
          'In 95% of my assessments, I achieve more than 30% savings on film costs. The most dramatic result I have seen was over 50%. One client using 23-micron film with no pre-stretch switched to 10-micron Elite film and went from 540 grams per pallet to 200 grams. For a company wrapping 200 pallets a day, that translates to over \u20AC30,000 per year. The exact savings depend on your current setup, but the results are visible immediately during the test.',
      },
      {
        question: 'Will thinner film compromise pallet stability?',
        answer:
          'No. In fact, most clients end up with more stable pallets after the switch. Modern 67-layer multilayer film at 10 microns has superior holding force compared to conventional 23-micron film. I verify this on every project by measuring holding force before and after. Holding force is the most reliable indicator of pallet stability, and it consistently improves with the right film and settings combination.',
      },
      {
        question: 'Do I need to buy a new wrapping machine?',
        answer:
          'Almost never. The issue is rarely the machine. It is the settings. Most companies have good equipment running at a fraction of its capability. A machine set to 150% or 200% pre-stretch can often achieve 300% with the right gear ratio. I work with approximately 40 different machine brands and types, and the vast majority can be configured on-site without any hardware changes.',
      },
      {
        question: 'How long does the process take?',
        answer:
          'The initial assessment takes half a day. You receive a detailed report with recommendations within a week. Implementation, where I configure your machines and train your operators, typically takes two or more hours per machine. Verification happens the same day: I measure holding force and film weight per pallet to confirm the results before I leave. From first visit to verified savings, most projects are completed within two weeks.',
      },
      {
        question: 'Do you work with distributors or end-users?',
        answer:
          'Both. The process is essentially the same. I work with distributors who want to offer their clients a value-added service, proving that a better film combined with proper machine settings saves money. And I work directly with end-users who want to cut their wrapping costs. Whether I am contacted by a distributor or an end-user, the first step is always a phone call to understand the situation.',
      },
      {
        question: 'What if the projected savings are not achieved?',
        answer:
          'In 45 years and over 1,000 site visits, 95% of my tests achieve more than 30% savings. The results are visible immediately during the assessment. You see the film weight drop on every pallet in real time. If the savings are not there, you have lost nothing: the assessment is completely free.',
      },
    ],
  },
  cta: {
    heading: 'See the Results on Your Own Pallets',
    subtitle:
      'I will visit your site, measure your current setup, and show you exactly how much film you can save. The assessment is free and takes half a day.',
    button: 'Get Your Free Savings Report',
  },
};

export const results = {
  header: {
    overline: 'Results',
    heading: 'Real Savings, Real Clients',
    subtitle:
      'Every number on this page comes from an actual on-site assessment. These are not projections. These are verified results.',
  },
  intro: {
    heading: 'Proof, Not Promises',
    body: 'I measure before, I measure after. Every assessment produces a detailed report with photos, weights, and holding force readings. The cases below are representative of what I see across the industry: companies using far more film than necessary, simply because nobody showed them what is possible.',
    stats: [
      { value: '95%', label: 'of assessments achieve 30%+ savings' },
      { value: '1,000+', label: 'sites assessed across Europe' },
      { value: '€30,000+', label: 'typical annual savings (200 pallets/day)' },
    ],
  },
  cases: [
    {
      id: 'dm-hungary',
      title: 'Retail Distribution Centre',
      industry: 'Retail / FMCG',
      country: 'Hungary',
      client: 'DM Keten',
      challenge:
        'High film consumption across multiple automatic wrapping lines. Conventional film with suboptimal machine settings resulted in excessive cost per pallet.',
      solution:
        'Switched to high-performance multilayer film. Reconfigured pre-stretch ratios and wrap patterns on all automatic lines. Trained operators on monitoring procedures.',
      metrics: {
        filmBefore: 'Conventional stretch film',
        filmAfter: 'Multilayer high-performance film',
        savingsPercent: '30%+',
        palletStability: 'Equal or improved',
      },
      image: '',
      imageAlt: 'Pallet wrapping optimisation at retail distribution centre in Hungary',
      quote: '',
    },
    {
      id: 'no-prestretch',
      title: 'From 540g to 200g Per Pallet',
      industry: 'Manufacturing',
      country: 'Europe',
      client: '',
      challenge:
        'Client was using a wrapping machine without pre-stretch, applying 23-micron conventional film. Film consumption was 540 grams per pallet, far above what was necessary.',
      solution:
        'Switched to 10-micron Elite multilayer film. Even without a pre-stretch unit on the machine, the superior film technology delivered dramatically better results.',
      metrics: {
        filmBefore: '23 micron conventional, 540g per pallet',
        filmAfter: '10 micron Elite multilayer, 200g per pallet',
        savingsPercent: '63%',
        palletStability: 'More stable than before (holding force verified)',
      },
      image: '',
      imageAlt: 'Before and after film optimisation showing 63% reduction in film usage',
      quote:
        'Over 50% savings in film consumption and a more stable pallet. This is what modern multilayer film can do, even on a machine without pre-stretch.',
    },
    {
      id: 'high-volume',
      title: '€30,000+ Annual Savings',
      industry: 'Logistics',
      country: 'Europe',
      client: '',
      challenge:
        'High-volume operation wrapping 200 pallets per day. Using conventional film with standard machine settings. Annual film costs were significantly higher than necessary.',
      solution:
        'Implemented high-performance multilayer film combined with optimised machine settings. Adjusted pre-stretch ratios and wrap patterns to reduce film consumption per pallet.',
      metrics: {
        filmBefore: 'Conventional film, standard settings',
        filmAfter: 'Multilayer film, optimised settings',
        savingsPercent: '30-50%',
        palletStability: 'Equal or improved',
      },
      image: '',
      imageAlt: 'High-volume pallet wrapping operation achieving over 30000 euros annual savings',
      quote: '',
    },
  ],
  slider: {
    overline: 'Case Studies',
    heading: 'Verified Results from the Field',
    caseLabel: 'Case',
    ofLabel: 'of',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    beforeLabel: 'Before',
    afterLabel: 'After',
    savingsLabel: 'Savings',
    stabilityLabel: 'Stability',
    previousCase: 'Previous case study',
    nextCase: 'Next case study',
  },
  cta: {
    heading: 'These Results Are Typical, Not Exceptional',
    subtitle:
      'I see the same pattern at almost every site I visit. Let me show you what is possible at your facility. The assessment is free.',
    button: 'See How Much You Can Save',
  },
};

export const contact = {
  header: {
    overline: 'Contact',
    heading: 'Request Your Free Film Assessment',
    subtitle:
      'Whether you distribute stretch film or use it on your production line, the first step is always a conversation. Tell me about your situation and I will get back to you within 48 hours.',
  },
  audiences: {
    heading: 'Who I Work With',
    cards: [
      {
        title: 'End-Users',
        description:
          'Companies using pallet wrapping machines who want to cut film costs and improve load stability. Whether you wrap 50 pallets a day or 500, the process is the same.',
        expectation:
          'I visit your site for half a day, deliver a detailed report within a week, and verify the results on the same day as implementation. Most projects are completed within two weeks.',
      },
      {
        title: 'Distributors',
        description:
          'Stretch film distributors looking to offer their clients proven cost savings through better film and proper machine settings.',
        expectation:
          'I provide on-site assessments at your clients\u2019 facilities, train your sales team on film performance, and deliver measurable results that strengthen your client relationships.',
      },
    ],
  },
  form: {
    submitLabel: 'Send Message',
    submitting: 'Sending...',
    success: 'Thank you for your message. I will get back to you within 48 hours.',
    error:
      'Something went wrong. Please try emailing me directly at egbertkort@stretchfilmadvice.com.',
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
    body: 'Based in the Netherlands, active across 25+ European countries. I help distributors and end-users achieve 30-50% reductions in stretch film costs through the right combination of film and machine settings.',
  },
  microcopy: 'I respond to all inquiries within 48 hours. If urgent, call or WhatsApp directly.',
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
  body: 'The page you\u2019re looking for doesn\u2019t exist or has been moved.',
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
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
};

export const footer = {
  description:
    'Independent stretch film expert. I supply premium multilayer film from the world\u2019s largest producer through distributors across Europe, and advise on machine settings to reduce film costs by 30-50%.',
  europeanCoverage: 'Active in 25+ European countries',
  copyright: `\u00A9 ${new Date().getFullYear()} Stretch Film Advice. All rights reserved.`,
};
