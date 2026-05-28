export const root = 'no-underline inline-block font-normal';
export const contentWrapper = 'flex flex-row items-end gap-10';
export const logo = 'relative top-[0.15em] text-28 md:text-46';
export const text = 'pl-05em border-l type-0 mt-03em';
export const line1 = 'inline-block text-19 md:text-24 leading-[0.9] relative -top-2 md:-top-4';
export const line2 = 'text-14 md:text-18 italic leading-[0.9] relative top-01em';
export const textColors = {
  default: 'text-black-90 border-black-40',
  white: 'text-dark-primary border-white',
};
export type LogoTextColorType = keyof typeof textColors;
export const barColors = {
  default: 'bg-black',
  white: 'bg-white',
};
