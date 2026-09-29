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
