import type { FeatureContentProps } from '@components/FeatureSection/FeatureContent';
import awardAnthem from '@images/award-anthem.png';
import awardWebby from '@images/award-webby.png';
import awardCase from '@images/award-case.png';

export const CentennialCommonContent: FeatureContentProps = {
  title: 'Engineering Centennial 2025',
  description: 'Stanford Engineering envisioned a visually striking, thoughtfully animated platform celebrating one hundred years of the school. Featuring a dynamic user experience and interactive timeline, the site showcases the extraordinary and engaging stories of the School’s history.',
  awards: [
    {
      image: awardWebby,
      alt: '2026 Webby Nominee',
    },
    {
      image: awardAnthem,
      alt: '2026 Anthem Award - Silver',
    },
  ],
  ctaLabel: 'Visit Stanford Engineering Centennial',
  ctaHref: 'https://engineering100.stanford.edu/',
};

export const MomentumCommonContent: FeatureContentProps = {
  title: 'Momentum',
  description:
    'Our partnership with the Office of Development brought Stanford’s most crucial philanthropic stories to life on an immersive editorial platform. Momentum showcases the research and discoveries made possible through philanthropy, and highlights the real-world human impact through dynamic, interactive storytelling.',
  awards: [
    {
      image: awardWebby,
      alt: '2025 Webby Nominee',
    },
    {
      image: awardCase,
      alt: '2025 CASE Circle of Excellence Award',
    },
  ],
};

export const StanfordSitesCommonContent: FeatureContentProps = {
  title: 'Stanford Sites',
  description:
    'The Stanford Sites Drupal CMS gives departments, research labs, other groups, and individuals an easy path to create a website, plus ongoing support to keep it running smoothly. Stanford Sites is free to use, continuously updated, and designed to meet Stanford’s policies out of the box.',
  ctaLabel: 'Learn more about Stanford Sites',
  ctaHref: 'https://uit.stanford.edu/service/stanfordsites',
};

export const MobileAppContent: FeatureContentProps = {
  title: 'Stanford Mobile App: mobile key',
  description:
    'A collaboration with UIT Endpoint Engineering and Development (EED) to design Stanford Mobile — a campus companion serving students, faculty, and visitors. Our team led structured usability testing with diverse user groups and iterative product design to craft a cohesive visual design system honoring Stanford’s institutional identity and meeting the expectations of a modern mobile experience.',
  ctaLabel: 'Explore the app',
  ctaHref: 'https://uit.stanford.edu/stanford-mobile',
};

export const SummerSessionContent: FeatureContentProps = {
  title: 'Summer Session',
  description:
    'A redesign of the Stanford Summer Session website had two primary objectives: help prospective students quickly find the courses they want, and give them every reason to apply. A show-don’t-tell approach, real student voices, and sun-drenched California imagery bring the experience to life for a primarily international audience.',
  ctaLabel: 'Visit Stanford Summer Session',
  ctaHref: 'https://summer.stanford.edu/',
};

export const TravelStudyContent: FeatureContentProps = {
  title: 'Stanford Alumni Travel/Study',
  description:
    'The goal for Travel/Study was simple: build an interactive experience as beautiful and immersive as the destinations themselves. This collaboration with the Stanford Alumni Association Travel/Study team delivered trip details, browse, and list pages with a clear information hierarchy, intuitive flow, and interactions that hold up against the best travel booking experiences in the industry.',
  ctaLabel: 'Visit Travel/Study',
  ctaHref: 'https://alumni.stanford.edu/travel-study/',
};

export const PressContent: FeatureContentProps = {
  title: 'Stanford University Press',
  description:
    'Stanford University Press needed a site as distinguished as its catalog. Now the site delivers an elevated experience through modern content hierarchy, intuitive browsing and checkout, all in a polished visual design that showcases the book covers and caliber of the authors and their work.',
  ctaLabel: 'Visit Stanford University Press',
  ctaHref: 'https://www.sup.org/',
};

export const MyAccountContent: FeatureContentProps = {
  title: 'Alumni: My Account',
  description:
    'My Account is the central destination where Stanford alumni and constituents manage much of their personal data — from contact details and privacy settings to professional information and more. Designed and built by teams across Stanford, it serves as an important part of the alumni and constituent digital ecosystem, where account and profile updates are managed and stored in a single application.',
};

export const DirectoryContent: FeatureContentProps = {
  title: 'Alumni Directory',
  description:
    'The Directory is where Stanford’s community connects. Powered by My Account, it gives students and alumni a powerful, intuitive way to discover connections that support their professional and personal goals — designed from the ground up so search is effortless and results feel meaningful.',
};

/** Every project on /work/, in page order. Also feeds the page's JSON-LD. */
export const PROJECTS: FeatureContentProps[] = [
  MomentumCommonContent,
  CentennialCommonContent,
  StanfordSitesCommonContent,
  MobileAppContent,
  SummerSessionContent,
  TravelStudyContent,
  PressContent,
  MyAccountContent,
  DirectoryContent,
];

/** Service areas on /services/. Also feeds the Organization and Services JSON-LD. */
export const SERVICES = [
  {
    title: 'Strategy',
    body:
      'Every strong digital strategy starts with the right questions. Projects begin with a deep dive into your goals, stakeholders, and the people who will use the final product. Then we apply our deep understanding of the university to deliver a strategy grounded in evidence. The final product is crafted to meet Stanford’s web standards and best practices.',
    items: [
      { service: 'Project discovery' },
      { service: 'Digital strategy' },
      { service: 'Stakeholder & user research' },
      { service: 'Information architecture' },
    ],
  },
  {
    title: 'Design',
    body:
      'Design is done with care for the details and collaboration with you to create a distinct visual identity — whether that’s classic Stanford branding or something unique. From simple annual reports to complex, API-driven applications, our team builds flexible design systems where every interaction is intuitive, consistent, and crafted to a world-class standard.',
    items: [
      { service: 'Visual & interaction design' },
      { service: 'User experience' },
      { service: 'Prototyping' },
      { service: 'Design systems & guidelines' },
    ],
  },
  {
    title: 'Engineering',
    body:
      'Built for where you are now and where you’re headed. Technology should be easy to use and maintain, and able to change as your goals evolve. Our team takes the time to understand how you work, then chooses the best-in-class tools to fit — not the other way around.',
    items: [
      { service: 'Website production' },
      { service: 'Custom development' },
      { service: 'Site building' },
      { service: 'Animation & motion design' },
    ],
  },
  {
    title: 'Continuous support, security, and performance',
    body:
      'Ongoing support services are built for the long term: keeping your platform secure, high-performing, accessible, and effective with the backing of a team you can count on. That means regular security and accessibility updates, infrastructure maintenance and monitoring, and support that’s there the moment something comes up.',
    items: [
      { service: 'Security & maintenance' },
      { service: 'Hosting support' },
      { service: 'Analytics & UX monitoring' },
      { service: 'Accessibility support' },
    ],
  },
];
