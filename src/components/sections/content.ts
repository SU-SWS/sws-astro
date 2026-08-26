import type { FeatureContentProps } from '@components/FeatureSection/FeatureContent';
import awardAnthem from '@images/award-anthem.png';
import awardWebby from '@images/award-webby.png';
import awardCase from '@images/award-case.png';

export const CentennialCommonContent: FeatureContentProps = {
  title: 'Engineering Centennial 2025',
  description: 'One hundred years of Stanford Engineering, told the way it deserves. We collaborated with leaders Sarah Bielecki and Associate Dean Julie Greicius to build a visually striking, thoughtfully animated platform for their centennial, designed to let extraordinary content lead.',
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
  ctaLabel: 'Visit Engineering Centennial',
  ctaHref: 'https://engineering100.stanford.edu/',
};

export const MomentumCommonContent: FeatureContentProps = {
  title: 'Momentum',
  description:
    'Momentum exists to tell Stanford’s most important stories — the research, discoveries, and human impact made possible through philanthropy. We partnered with the Office of Development to bring it to life, translating a vision and brand identity into an editorial platform built for dynamic, interactive storytelling.',
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
    'Stanford Sites gives schools, departments, research labs, and individuals an easy path to create a website and ongoing support to maintain it. Stanford Sites is free to use, continuously updated, and built on a platform designed to meet Stanford’s policies out of the box.',
  ctaLabel: 'Request a Stanford Site',
  ctaHref: 'https://uit.stanford.edu/service/stanfordsites',
};
