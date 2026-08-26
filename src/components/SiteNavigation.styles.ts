export const root = 'mx-auto mt-10 flex flex-wrap items-start justify-between gap-20 md:mt-30';

export const desktopNav = 'hidden xl:flex flex-wrap items-center justify-end gap-33 mt-9 2xl:mt-13';

export const desktopLink = 'relative border-b-4 border-transparent py-19 whitespace-nowrap text-19 font-semibold leading-snug transition-colors';

export const desktopLinkColors = {
  light: {
    active: 'text-primary',
    default: 'text-digital-red hocus-visible:text-black-90',
  },
  dark: {
    active: 'text-dark-primary',
    default: 'text-dark-primary hocus-visible:text-dark-primary',
  },
};

export const desktopIndicator = 'pointer-events-none absolute inset-x-0 -bottom-4 h-4';

export const desktopIndicatorColors = {
  light: {
    active: 'bg-border-dark-primary',
    hover: 'bg-black-90/20',
  },
  dark: {
    active: 'bg-border-dark-primary',
    hover: 'bg-white/30',
  },
};
