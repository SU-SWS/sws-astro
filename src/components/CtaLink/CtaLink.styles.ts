import { cnb } from 'cnbuilder';

const ctaBase = 'group/cta inline-block';
const buttonBase = `${ctaBase} rounded-full text-16 md:text-19 font-normal leading-display px-19 py-9 bg-transparent transition-colors border-2 border-digital-red-xlight decoration-1 decoration-transparent underline-offset-4 hocus-visible:text-dark-primary hocus-visible:bg-cardinal-red hocus-visible:underline hocus-visible:decoration-white`;
const linkBase = `${ctaBase} leading-display decoration-2 decoration-digital-red-xlight underline hocus-visible:underline underline-offset-4 hocus-visible:decoration-3 font-normal`;

export const ctaVariants = {
  'button-light': `${buttonBase} text-primary`,
  'button-dark': `${buttonBase} text-dark-primary`,
  'link-dark': `${linkBase} text-dark-primary hocus-visible:text-dark-primary`,
  'service': 'leading-display card-paragraph font-normal text-dark-secondary-muted hocus-visible:text-digital-red-xlight no-underline hocus-visible:underline underline-offset-4 transition-colors',
}
export type CtaVariantType = keyof typeof ctaVariants;

export const icon = (isExternalLink: boolean) => cnb('inline-block text-current size-21 -mt-1 ml-02em transition-transform',
  isExternalLink
    ? 'group-hover/cta:translate-x-01em group-focus-visible/cta:translate-x-01em group-hover/cta:-translate-y-01em group-focus-visible/cta:-translate-y-01em'
    : 'group-hover/cta:translate-x-02em group-focus-visible/cta:translate-x-02em',
);
