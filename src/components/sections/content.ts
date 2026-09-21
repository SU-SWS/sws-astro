import type { FeatureContentProps } from '@components/FeatureSection/FeatureContent';
import awardAnthem from '@images/award-anthem.png';
import awardWebby from '@images/award-webby.png';
import awardCase from '@images/award-case.png';

export const CentennialCommonContent: FeatureContentProps = {
  title: 'Engineering Centennial 2025',
  description: 'We collaborated with Stanford Engineering to build a visually striking, thoughtfully animated platform celebrating one hundred years of the school. Featuring a dynamic user experience and interactive timeline, we designed the site to lead with the extraordinary and engaging content.',
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
    'We partnered with the Office of Development to translate their vision and brand identity into an immersive editorial platform. Momentum showcases the research and discoveries made possible through philanthropy, and highlights the real-world human impact through dynamic, interactive storytelling.',
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
  ctaLabel: 'Visit Momentum',
  ctaHref: 'https://momentum.stanford.edu/',
};

export const StanfordSitesCommonContent: FeatureContentProps = {
  title: 'Stanford Sites',
  description:
    'The Stanford Sites Drupal CMS provides departments, research labs, other groups, and individuals with an easy path to create a website and ongoing support to keep it running smoothly. Stanford Sites is free to use, continuously updated, and designed to meet Stanford’s policies out of the box.',
  ctaLabel: 'Learn more about Stanford Sites',
  ctaHref: 'https://uit.stanford.edu/service/stanfordsites',
};
