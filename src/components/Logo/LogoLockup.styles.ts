export const root = 'no-underline inline-block font-normal';
export const contentWrapper = 'flex-row items-end gap-10';
export const logo = 'type-3 mt-[0.27em]';
export const bar = 'hidden sm:block w-1 min-h-1em h-full mx-03em';
export const text = 'pl-12 border-l type-0 mt-03em -ml-01em sm:ml-0';
export const line2 = 'text-15 sm:text-18 italic';
export const textColors = {
  default: 'text-black-90 border-black-40',
  white: 'text-white border-white',
};
export type LogoTextColorType = keyof typeof textColors;
export const barColors = {
  default: 'bg-black',
  white: 'bg-white',
};
