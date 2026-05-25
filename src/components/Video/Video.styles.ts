import { cnb } from 'cnbuilder';

export const video = 'relative size-full object-cover pointer-events-none';

export const videoButton = 'group absolute size-full inset-0 disabled:pointer-events-none disabled:opacity-10 cursor-pointer';

export const icon = (isPause: boolean) => cnb(
  'flex items-center justify-center z-10 absolute bottom-10 right-10 bg-black-true/65 border-2 rounded-full border-black-10/70 transition-all group-hocus-visible:bg-cardinal-red group-hocus-visible:border-white group-hocus-visible:text-white shrink-0',
  'text-black-10 size-30 md:size-34 p-5 md:p-7 group-hocus-visible:p-4 group-hocus-visible:md:p-6',
  !isPause && 'ml-1',
);
