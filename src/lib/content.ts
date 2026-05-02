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
  { label: 'About', href: '/about' },
  { label: 'Films', href: '/films' },
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/case-studies' },
];

export const homepage = {
  hero: {
    overline: 'Stretch Film Advisory · 30-50% Less Film',
    heading: 'Get a more stable pallet.',
    subtitle:
      'Most pallets I see are not as stable as they could be, and use far more film than necessary. I optimise your machine settings and supply the right multilayer film to give you a more stable pallet at 30-50% lower cost.',
    cta: 'Book Your Free Assessment',
    ctaSecondary: 'See How It Works',
    ctaSubtext:
      'No obligation. I visit your site for 3-4 hours, measure everything, and deliver a detailed savings report within one week. The assessment is free because I earn from the film, not from the advice.',
    trustLine: 'INDEPENDENT ADVICE & SUPPLY ACROSS 25+ EUROPEAN COUNTRIES',
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
    evidence: [
      {
        kpi: '€30,000+',
        caption: 'Annual savings for a company wrapping 200 pallets a day.',
      },
      {
        kpi: '67-layer',
        caption:
          'Modern multilayer film holds loads tighter at half the thickness — less material, more stable pallet.',
      },
      {
        kpi: '95%',
        caption: 'Of my assessments achieve more than 30% film reduction.',
      },
    ],
    imageCaption: {
      before: 'Standard film · 23 μ',
      after: 'Multilayer film · 10 μ',
      description: 'Two compressed balls of film used to wrap an identical load.',
      tagline: 'Less material, equal protection.',
    },
    cta: {
      label: 'See Verified Results',
      href: '/case-studies',
    },
  },
  howWeWork: {
    overline: 'The Process',
    heading: 'How It Works',
    linkLabel: 'View full process',
    steps: [
      {
        number: '01',
        heading: 'Assessment',
        body: 'I visit your site for half a day. I measure holding force (how tightly the film grips your load), stretch percentage, film weight per pallet, and wrap patterns.',
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
      body: '45 years in pallet wrapping. Over 1,000 sites assessed across 25+ countries. I was one of the first people in Europe to sell pallet wrapping machines, back in 1981. I know roughly 40 different machine brands and types, so I can optimise your equipment regardless of what is on your floor.',
      link: '/about',
      linkLabel: 'Learn more',
      icon: 'user' as const,
      image: '/images/team/egbert-kort.webp',
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
        after: '12 micron Nano Multilayer',
        improvement: '48% thinner',
      },
      {
        metric: 'Pre-stretch',
        before: '180%',
        after: '280%',
        improvement: '56% more stretch force',
      },
      {
        metric: 'Film per Pallet',
        before: '378 grams',
        after: '226 grams',
        improvement: '40% less film',
      },
      {
        metric: 'Load Stability',
        before: '12 kg holding force',
        after: '18 kg holding force',
        improvement: '+50% holding force',
      },
    ],
  },
  industries: {
    overline: 'Industries I Serve',
    heading: 'Saving Film Across Every Sector',
    items: [
      {
        heading: 'Manufacturing',
        body: 'From automotive parts to building materials. High-volume lines where even a small reduction per pallet adds up to five-figure annual savings.',
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
    button: 'Book Your Free Assessment',
  },
};

export const about = {
  header: {
    overline: 'About',
    heading: '45 Years of Pallet Wrapping, from Day One',
    subtitle:
      'In 1981, I started selling pallet wrapping machines across Europe, back when pallet wrapping was a new concept most companies had never seen. Since then, I have assessed over 1,000 sites in 25+ countries, and I still find savings at almost every one.',
  },
  story: {
    heading: 'The Story Behind the Expertise',
    quote:
      'We were among the first in Europe. We had to sell the concept of pallet wrapping itself.',
    paragraphs: [
      'My name is Egbert, and in 1981 I started selling pallet wrapping machines at Matco BV. Pallet wrapping was so new in Europe that I had to sell the concept itself. Most companies had never seen a machine wrap a pallet. My first sale was a Full Web machine to Bendien in Naarden, using 150-centimetre wide film.',
      'Over the following decades, I worked across the full supply chain. Matco became part of AEP, which evolved into AFP, and later Trioworld. Through every transition, I deepened my knowledge of both machines and film, a combination very few people in this industry have.',
      'After I retired, I couldn\u2019t sit still. Four decades of expertise that companies across Europe still need. So I founded Stretch Film Advice, working as an independent expert and agent for the world\u2019s largest stretch film producer.',
      'Today, I visit sites across Europe and see the same pattern everywhere: companies wasting thousands of euros on film. Not because they\u2019re doing anything wrong, but because no one has shown them what is possible with modern 67-layer multilayer technology and proper machine settings.',
      'I\u2019m based in the Netherlands, and I still enjoy travelling and being on site. After all these years, that\u2019s what keeps it interesting: there\u2019s almost always a smarter way to wrap a pallet.',
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
          'Senior Sales Engineer at Trioworld, combining machine and film knowledge across European markets.',
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
    button: 'Book Your Free Assessment',
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
    headers: ['Metric', 'Before', 'After', 'Improvement'],
    rows: [
      {
        metric: 'Film Thickness',
        before: '23 micron conventional',
        after: '12 micron Nano Multilayer',
        improvement: '48% thinner',
      },
      {
        metric: 'Pre-stretch',
        before: '180%',
        after: '280%',
        improvement: '56% more stretch force',
      },
      {
        metric: 'Film per Pallet',
        before: '378 grams',
        after: '226 grams',
        improvement: '40% less film',
      },
      {
        metric: 'Load Stability',
        before: '12 kg holding force',
        after: '18 kg holding force',
        improvement: '+50% holding force',
      },
    ],
    tiltTest: {
      overline: 'Proof of Performance',
      heading: 'How I Verify Results',
      body: 'Every assessment includes holding force measurement, the most reliable indicator of pallet stability. Holding force tells you exactly how tightly the film grips the load, regardless of product type or pallet shape. In some cases, I also perform the 26-degree tilt test as an additional visual demonstration of load integrity.',
      caption:
        'Measurements are taken on-site before and after optimisation. Film consumption, machine settings, and load stability are all documented to quantify the improvement.',
      image: '/images/process/current-weight.webp',
      imageAlt:
        'Digital scale measuring current stretch film consumption per pallet on-site',
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
          'Almost never. The issue is rarely the machine. It is the settings. Most companies have good equipment running at a fraction of its capability. A machine set to 150% or 200% pre-stretch can often achieve 300% with adjusted settings alone. When that is not enough, changing the pre-stretch gearing is usually all it takes. I work with approximately 40 different machine brands and types, and in both cases there is no need to buy new equipment.',
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
          'In 45 years and over 1,000 site visits, 95% of my assessments result in more stable pallets and better load security. Cost savings of more than 30% follow in the vast majority of cases. The results are visible immediately: you see the film weight drop on every pallet in real time. If neither outcome is achieved, you have lost nothing. The assessment is completely free.',
      },
    ],
  },
  videoShowcase: {
    overline: 'See It In Action',
    heading: 'Watch the Process',
  },
  cta: {
    heading: 'See the Results on Your Own Pallets',
    subtitle:
      'I will visit your site, measure your current setup, and show you exactly how much film you can save. The assessment is free and takes half a day.',
    button: 'Book Your Free Assessment',
  },
};

export const films = {
  header: {
    overline: 'Films & Applications',
    heading: 'Multilayer stretch film, matched to your machine.',
    subtitle:
      'Multilayer (nano) stretch film outperforms standard film on every metric that matters: holding force, puncture resistance, and film consumption. The film you choose, however, only delivers if it matches the brake system on your pallet wrapping machine. This page explains the difference, shows the result it produces in the field, and helps you pick the right film for your line.',
  },
  multilayer: {
    overline: 'The Multilayer Difference',
    heading: 'High-tech film. Higher holding force. Less material.',
    body: 'Multilayer stretch film, also known as nano stretch film, is a high-performance film built from dozens of microscopic layers. It is stronger than standard film, thinner than standard film, and as a result you use far less of it for a more stable pallet. We use the terms multilayer and nano interchangeably; the market does the same.',
    pullQuote:
      'A 9-micron multilayer film at 250% pre-stretch routinely outperforms the 17-micron “power” film it replaces.',
    pullQuoteAttribution: 'Egbert Kort',
    benefits: [
      {
        heading: 'Stronger',
        body: 'Higher puncture resistance, higher tear resistance, and a holding force that grips the load tighter. The pallet stays put through cornering, braking, and rough handling.',
      },
      {
        heading: 'Thinner',
        body: 'A 9-micron multilayer at the right pre-stretch routinely outperforms 15- and 17-micron “power” films. Thinner film does not mean a weaker pallet; it means less plastic per pallet.',
      },
      {
        heading: 'Less film, less cost',
        body: 'One metre of multilayer film stretches to as much as five metres on the pallet. You wrap more pallets per roll, with 30–50% lower film consumption. The cost per roll is higher; the cost per pallet is lower.',
      },
    ],
    crossSectionImage: '/images/films/multilayer-cross-section.webp',
    crossSectionAlt:
      'Cross-section of multilayer stretch film showing dozens of coloured microscopic layers stacked together',
    crossSectionCaption:
      'A multilayer film is built from 33 or 67 microscopic layers, each tuned for a specific property: strength, stretch, cling, or puncture resistance.',
    forTechnician: {
      label: 'For the technician',
      lead: 'Multilayer film outperforms single-layer film for eight engineering reasons; together, they explain why a 12-micron multilayer routinely beats a 17- or 23-micron single-layer film.',
      arguments: [
        {
          heading: 'Functional layer separation.',
          body: 'Each layer has its own job: outer layers for cling, core layers for strength, middle layers for stretch. A single-layer film has to compromise on each; a multilayer film does not.',
        },
        {
          heading: 'Crack propagation is stopped.',
          body: 'When a single-layer film tears, the tear runs through the whole film. In a multilayer film, each layer slows the tear at its boundary, so a small puncture stays a small puncture.',
        },
        {
          heading: 'Stress is shared, not concentrated.',
          body: 'The layered structure spreads mechanical load across many interfaces, like laminated safety glass in a car windshield. Sharp pallet edges no longer cause sudden failure.',
        },
        {
          heading: 'Polymers work as a team.',
          body: 'Different polymers are combined in different layers: mLLDPE for strength, C6 and C8 metallocenes for stretch, tackifiers for cling. The combined performance is greater than the sum of the parts.',
        },
        {
          heading: 'Strength at lower thickness.',
          body: 'Thinner individual layers have fewer defects, so a 12-micron multilayer film matches or beats a 17- to 23-micron single-layer film. Material use drops by 30–50%.',
        },
        {
          heading: 'Higher stretch, better recovery.',
          body: 'Multilayer films can be pre-stretched to 300% or 400% and still snap back tight against the load. Yield per roll goes up; holding force goes up.',
        },
        {
          heading: 'Consistent from roll to roll.',
          body: 'Modern multilayer lines control thickness and layer distribution very precisely. Raw materials come from long-term supply contracts, not the open market, so the film performs the same on Monday as it does on Friday.',
        },
        {
          heading: 'Nano (33 to 67 layers) goes further.',
          body: 'With more, thinner layers, there are more interfaces to absorb energy. Puncture resistance climbs again, and the film can be made thinner still.',
        },
      ],
      practical:
        'In the field, this is why a 17-micron film is replaced by a 12-micron film, film weight per pallet drops from 280 g to 160 g, and holding force still goes up. The multilayer film is a better engineered material system, not just a better polymer.',
      strainCurveImage: '/images/films/strain-force-curve.png',
      strainCurveAlt:
        'Strain–force diagram for multilayer stretch film, plotting force in newtons against elongation percentage at three line speeds, with the lockout zone highlighted',
      strainCurveCaption:
        'Strain–force curve at 6, 60, and 240 m/min. The shaded area marks the lockout zone, where the film delivers its working holding force.',
    },
  },
  caseStudy: {
    overline: 'Real-world result',
    heading: 'DM Hungary: €17,800 saved per year, on one line.',
    intro:
      'A DM distribution centre in Hungary wraps roughly 400 pallets a day on automatic lines. Switching from 17-micron standard film at 170% pre-stretch to Nano SE 15-micron at 270% pre-stretch cut film consumption by 42% per pallet. Holding force on the load doubled.',
    savings: {
      value: 17800,
      prefix: '€',
      suffix: '/year',
      label: 'Annual film cost saved',
    },
    metrics: {
      headers: ['Metric', 'Before', 'After', 'Result'],
      rows: [
        {
          metric: 'Film',
          before: '17µm standard',
          after: 'Nano SE 15µm',
          result: 'Multilayer',
        },
        {
          metric: 'Pre-stretch on pallet',
          before: '170%',
          after: '270%',
          result: '+100 pp',
        },
        {
          metric: 'Film per pallet',
          before: '178 g',
          after: '104 g',
          result: '−42%',
        },
        {
          metric: 'Holding force',
          before: '9.5 kg',
          after: '19 kg',
          result: '+100%',
        },
        {
          metric: 'Cost per pallet',
          before: '€0.38',
          after: '€0.24',
          result: '−37%',
        },
      ],
    },
    metricsCaption:
      'Measured on the same line, on the same loads, before and after the switch. Volume: ~400 pallets/day.',
    beforeImage: '/images/films/dm-hungary-before.jpg',
    beforeAlt:
      'DM Hungary pallet wrapped with 17-micron standard film at 170% pre-stretch, before the switch to multilayer.',
    beforeCaption: 'Before: 17µm standard film at 170% pre-stretch.',
    afterImage: '/images/films/dm-hungary-after.jpg',
    afterAlt:
      'Same DM Hungary pallet line wrapped with Nano SE 15-micron multilayer film at 270% pre-stretch, after the switch.',
    afterCaption: 'After: Nano SE 15µm at 270% pre-stretch.',
    eumosImage: '/images/films/eumos-acceleration-test.jpeg',
    eumosAlt:
      'EUMOS 40509 acceleration test of a wrapped pallet, showing the load held within tolerance with less than 2% layer displacement at 1280mm',
    eumosCaption:
      'Independent stability proof, EUMOS 40509: the multilayer-wrapped pallet stays within tolerance under acceleration. Less than 2% layer displacement, less than 10% flexible deviation.',
  },
  brakeSystems: {
    overline: 'Match your machine',
    heading: 'Three brake systems. One film for each.',
    body: 'Every pallet wrapping machine on the market uses one of three brake systems. The brake system determines how much the film is pre-stretched on its way from the roll to the pallet. That, in turn, determines which film will deliver the best result. Identify your brake system, then pick the matched film.',
    cards: [
      {
        id: 'core-electronic',
        name: 'Core / Electronic brake',
        prestretch: '0% pre-stretch',
        prestretchRange: 'No pre-stretch',
        recognise:
          'A single brake acts directly on the film core. There is no pre-stretch unit between the roll and the pallet. The film is applied with little or no pre-stretch.',
        recommendedFilms: [
          { name: 'Elite 8', spec: '8µm, very high puncture resistance' },
          { name: 'Elite 10', spec: '10µm, the all-rounder for this brake type' },
        ],
        pickHint:
          'Default to Elite 10. Reach for Elite 8 only when puncture resistance is the bottleneck: sharp edges, exposed corners, irregular boxes.',
        mechanismImage: '/images/films/brake-core-electronic.jpeg',
        mechanismAlt:
          'Technical illustration of a core/electronic brake system: the brake acts directly on the film core, with no pre-stretch unit',
      },
      {
        id: '1-motor',
        name: '1-motor, fixed gear ratio',
        prestretch: '150–250% pre-stretch',
        prestretchRange: '150–250%',
        recognise:
          'Two brake rollers connected by a fixed pair of gears. The gear ratio sets the pre-stretch: most commonly 200% or 250%, sometimes 300%. To change the pre-stretch you swap the gears.',
        recommendedFilms: [
          { name: 'Nano SE 12', spec: '12µm, lighter A pallets' },
          { name: 'Nano SE 15', spec: '15µm, A and B pallets' },
          { name: 'Nano SP 15', spec: '15µm, higher strength' },
          { name: 'Nano SP 17', spec: '17µm, heavy or unstable loads' },
        ],
        pickHint:
          'Default to Nano SE 15 for A and B pallets. Move to SP 17 when the load is heavier or the boxes irregular.',
        mechanismImage: '/images/films/brake-1-motor-gears.jpeg',
        mechanismAlt:
          'Photograph of a 1-motor fixed-gear-ratio pre-stretch unit: two brake rollers connected by interchangeable gears',
      },
      {
        id: '2-motor',
        name: '2-motor, independently driven',
        prestretch: '200–400% pre-stretch',
        prestretchRange: '200–400%',
        recognise:
          'Two brake rollers, each with its own motor. The pre-stretch is set on the display, anywhere from 100% to 400%, by changing the speed ratio between the two motors. The most flexible type of machine, and the one where multilayer film delivers the biggest savings.',
        recommendedFilms: [
          { name: 'Nano XE 9', spec: '9µm, the light film that beats heavy ones' },
          { name: 'Nano XE 12', spec: '12µm, A and B pallets up to 600 kg' },
          { name: 'Nano XE 15', spec: '15µm, medium-heavy loads' },
          { name: 'Nano XE 17', spec: '17µm, heavy or difficult loads' },
        ],
        pickHint:
          'Default to Nano XE 12 for A and B pallets up to 600 kg. Step up to 15 or 17 for heavier or unstable loads.',
        mechanismImage: '/images/films/brake-2-motor-cad.jpeg',
        mechanismAlt:
          'CAD render of a 2-motor independently-driven pre-stretch unit: two brake rollers each driven by its own motor',
      },
    ],
    mistakes: {
      overline: 'What goes wrong',
      heading: 'Three mistakes I see most often.',
      body: 'Same machine, same film, very different result. The wrong setting almost always follows one of three patterns, one for each type of brake system.',
      items: [
        {
          brakeSystem: 'Core / Electronic brake',
          mistake:
            'Many operations on this machine class run a 15- or 17-micron “power” film and assume the thickness compensates. It does not. Without pre-stretch, the film locks out far below its working range.',
        },
        {
          brakeSystem: '1-motor with fixed gear ratio',
          mistake:
            'Operators often run the machine at the lowest gear ratio out of habit, even when the film can deliver more. A 250% gear set, with the right film, almost always pays back the change in a few weeks.',
        },
        {
          brakeSystem: '2-motor independently driven',
          mistake:
            'The film is rated for 300% but the dial sits at 200%, because that is how the previous film was set. The full multilayer benefit only shows up at 250% and above.',
        },
      ],
    },
    closingQuote: {
      text: 'If the film is rated for 300% pre-stretch and the dial sits at 200%, you’re throwing money out the window every shift.',
      attribution: 'Egbert Kort',
    },
  },
  palletGuide: {
    overline: 'Pick by pallet',
    heading: 'Then check it against the pallet.',
    body: 'Once the brake system has narrowed the family, the pallet itself sets the thickness. The shape of the load (A, B, or C profile) matters, and so does the weight. The two together tell you whether to choose the lighter or heavier micron in the family the brake system points to.',
    profileImage: '/images/films/pallet-types-abc.jpg',
    profileAlt:
      'Diagram showing three pallet load profiles: A profile (regular, fully stacked), B profile (slightly irregular), and C profile (irregular, overhanging or unstable)',
    profileCaption:
      'A, B, and C pallet profiles: regular and stable, slightly irregular, and irregular or unstable.',
    profiles: [
      {
        label: 'A profile',
        body: 'Lighter micron, fewer wraps.',
      },
      {
        label: 'B profile',
        body: 'Same micron, more revolutions.',
      },
      {
        label: 'C profile',
        body: 'Heavier micron, more wraps.',
      },
    ],
    weightBands: {
      heading: 'Weight tells you the micron',
      bands: [
        { range: 'Up to 400 kg', recommendation: '9–12 µm' },
        { range: 'Up to 700 kg', recommendation: '12–15 µm' },
        { range: '≥1000 kg', recommendation: '15–17 µm' },
      ],
      note:
        'The weight band sets the minimum thickness. The brake system sets the film family. Together, they point you to the right product.',
    },
  },
  catalogue: {
    overline: 'The full lineup',
    heading: 'Every film in the range, with the spec that matters.',
    body: 'Two tables, because the choice works differently for each. Machine-wrap films are picked based on your brake system and load. Hand-wrap films are picked based on the operator and how many pallets you wrap per shift.',
    machineWrap: {
      heading: 'Machine-wrap films',
      headers: ['Film', 'Micron', 'Brake system', 'Max pre-stretch', 'Sweet spot'],
      rows: [
        {
          film: 'Elite 8',
          micron: '8 µm',
          brake: 'Core / Electronic',
          stretch: 'n/a',
          spot: 'Very high puncture resistance, light A pallets',
        },
        {
          film: 'Elite 10',
          micron: '10 µm',
          brake: 'Core / Electronic',
          stretch: 'n/a',
          spot: 'All-round film for machines without pre-stretch',
        },
        {
          film: 'Nano SE 12',
          micron: '12 µm',
          brake: '1-motor',
          stretch: '250%',
          spot: 'A pallets, lower film weight per pallet',
        },
        {
          film: 'Nano SE 15',
          micron: '15 µm',
          brake: '1-motor',
          stretch: '250%',
          spot: 'A and B pallets, the SE default',
        },
        {
          film: 'Nano SP 15',
          micron: '15 µm',
          brake: '1-motor',
          stretch: '250%',
          spot: 'B pallets, higher strength',
        },
        {
          film: 'Nano SP 17',
          micron: '17 µm',
          brake: '1-motor',
          stretch: '250%',
          spot: 'B and C pallets, heavier loads',
        },
        {
          film: 'Nano XE 9',
          micron: '9 µm',
          brake: '2-motor',
          stretch: '300%',
          spot: 'The light film that beats heavy ones',
        },
        {
          film: 'Nano XE 12',
          micron: '12 µm',
          brake: '2-motor',
          stretch: '330%',
          spot: 'A and B pallets up to 600 kg, the default',
        },
        {
          film: 'Nano XE 15',
          micron: '15 µm',
          brake: '2-motor',
          stretch: '300%',
          spot: 'B pallets, medium-heavy loads',
        },
        {
          film: 'Nano XE 17',
          micron: '17 µm',
          brake: '2-motor',
          stretch: '300%',
          spot: 'C pallets, heavy or unstable loads',
        },
      ],
    },
    handWrap: {
      heading: 'Hand-wrap films',
      headers: ['Film', 'Micron', 'Application', 'Sweet spot'],
      rows: [
        {
          film: 'Extra Strong 4.5',
          micron: '4.5 µm',
          application: 'Light hand-wrap',
          spot: 'Bundling, light goods, low pallet count',
        },
        {
          film: 'Extra Strong 6',
          micron: '6 µm',
          application: 'General hand-wrap',
          spot: 'Mixed loads, occasional pallets',
        },
        {
          film: 'Extra Strong 8',
          micron: '8 µm',
          application: 'Standard hand-wrap',
          spot: 'Day-to-day pallets, medium throughput',
        },
        {
          film: 'Extra Strong 10',
          micron: '10 µm',
          application: 'Heavy hand-wrap',
          spot: 'Heavier or higher pallets, irregular loads',
        },
      ],
    },
  },
  elite: {
    overline: 'Product spotlight',
    heading: 'Elite: the film for machines without pre-stretch.',
    lead: 'Elite is a stretch film built for machines that have no pre-stretch unit between the roll and the pallet: Core and Electronic brake systems. It locks out at low stretch, so it grips the load even on machines that cannot pre-stretch the film for you. The range covers two films, one for each common job.',
    skus: [
      {
        name: 'Elite 8',
        spec: '8µm, very high puncture resistance for sharp edges and exposed corners.',
      },
      {
        name: 'Elite 10',
        spec: '10µm, the everyday all-rounder for machines without a pre-stretch unit.',
      },
    ],
    benefits: [
      'High puncture and tear resistance, especially at pallet corners.',
      'Locks out at low stretch, with no pre-stretch unit needed.',
      'Holds the load tight for stable transport.',
      'Less film per pallet than older 23-micron films.',
      'Lighter rolls, easier for the operator to handle.',
      'Replaces 23-micron and heavier films on the same machines.',
    ],
  },
  faq: {
    overline: 'Frequently Asked Questions',
    heading: 'Common Questions',
    items: [
      {
        question: 'Which stretch film fits my pallet wrapping machine?',
        answer:
          'It depends on the brake system. There are three: Core / Electronic (no pre-stretch), 1-motor with a fixed gear ratio (150–250%), and 2-motor independently driven (200–400%). For each, we match a specific multilayer film so the machine works at the top of its range. If you are not sure which brake system is on your machine, send me a photo and I will tell you within the day.',
      },
      {
        question:
          'Why is multilayer film more expensive per roll but cheaper per pallet?',
        answer:
          'A roll of multilayer film costs more because it is built from C6 and C8 polymers in 33 or 67 microscopic layers. But one metre of multilayer film stretches to as much as five metres on the pallet, so you wrap many more pallets per roll. In the field, cost per pallet drops by 30–50%, even though the price per kilogram is higher.',
      },
      {
        question: 'Can a thinner film really hold a more stable pallet?',
        answer:
          'Yes, and we measure it on every job. A 10-micron multilayer routinely produces a more stable pallet than a 23-micron standard film. Stability does not come from thickness; it comes from holding force. A properly set multilayer film delivers a much higher holding force at half the gauge. We measure before and after, so you see the proof on your own pallets.',
      },
      {
        question: 'What is the difference between 33-layer and 67-layer multilayer film?',
        answer:
          'Both are multilayer. A 67-layer construction distributes the polymer properties (stretch, strength, puncture resistance) across more microscopic layers, which gives a stronger combined performance. For heavier or more difficult pallets, 67-layer is the better choice.',
      },
      {
        question: 'Which film is right for heavy pallets above 1000 kg?',
        answer:
          'For heavy pallets, the answer is almost always Nano XE (12, 15, or 17 micron) on a 2-motor brake system. That combination delivers the highest holding force and the most stability, even on irregular loads. The exact micron depends on the load profile; we determine it in a test on site, with much less film than the customer is using today.',
      },
    ],
  },
  cta: {
    heading: 'Match the right film to your machine.',
    subtitle:
      'Tell me which machine you run and what you are wrapping. I will recommend the film, the pre-stretch setting, and the expected cost per pallet. In writing, before any visit.',
    button: 'Book Your Free Assessment',
  },
};

export const results = {
  header: {
    overline: 'Results',
    heading: 'Real Savings, Real Clients',
    subtitle:
      'Every number on this page comes from an actual on-site assessment. These are not projections. These are verified results. Behind every percentage is a team that stopped worrying about film costs, reclaimed budget, and proved to management that the savings are real.',
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
      title: '30%+ Film Savings Across Automatic Lines',
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
      image: '/images/process/retail-centre-pallet-aldi.webp',
      imageAlt:
        'Pallet wrapping optimisation at retail distribution centre in Hungary',
      imagePosition: 'center',
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
      image: '/images/process/from-a-lot-to-less.webp',
      imageAlt:
        'Before and after film optimisation showing 63% reduction in film usage',
      imagePosition: 'center 35%',
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
      image: '/images/process/gear-change.webp',
      imageAlt:
        'High-volume pallet wrapping operation achieving over 30000 euros annual savings',
      imagePosition: 'center',
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
    swipeLabel: 'Swipe to navigate',
  },
  cta: {
    heading: 'This Is What I See at Nearly Every Site',
    subtitle:
      'I see the same pattern at almost every site I visit. Let me show you what is possible at your facility. The assessment is free.',
    button: 'Book Your Free Assessment',
  },
};

export const contact = {
  header: {
    overline: 'Contact',
    heading: 'Request Your Free Film Assessment',
    subtitle:
      'Whether you distribute stretch film or use it on your production line, the first step is always a conversation. Tell me about your situation and I will call you back within a few days to discuss whether an on-site visit makes sense.',
  },
  form: {
    submitLabel: 'Send Message',
    submitting: 'Sending...',
    success:
      'Thank you for your message. I will get back to you as soon as possible.',
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
  microcopy:
    'I respond to all inquiries within a few working days. If urgent, call or WhatsApp directly.',
};

export const ui = {
  getInTouch: 'Get in Touch',
  primaryCta: 'Book Your Free Assessment',
  primaryCtaShort: 'Free Assessment',
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
  contactInfoEmail: 'Email',
  contactInfoPhone: 'Phone',
};

export const notFoundPage = {
  code: '404',
  heading: 'Page Not Found',
  body: 'The page you\u2019re looking for doesn\u2019t exist or has been moved.',
  backToHome: 'Back to Home',
};

export const errorPage = {
  code: 'Error',
  heading: 'Something Went Wrong',
  body: 'An unexpected error occurred. Please try again or return to the homepage.',
  tryAgain: 'Try Again',
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
