export const paddingTops = {
  none: '',
  base: 'rs-pt-0',
  1: 'rs-pt-1',
  2: 'rs-pt-2',
  3: 'rs-pt-3',
  4: 'rs-pt-4',
  5: 'rs-pt-5',
  6: 'rs-pt-6',
  7: 'rs-pt-7',
  8: 'rs-pt-8',
  9: 'rs-pt-9',
  10: 'rs-pt-10',
};

export const paddingBottoms = {
  none: '',
  base: 'rs-pb-0',
  1: 'rs-pb-1',
  2: 'rs-pb-2',
  3: 'rs-pb-3',
  4: 'rs-pb-4',
  5: 'rs-pb-5',
  6: 'rs-pb-6',
  7: 'rs-pb-7',
  8: 'rs-pb-8',
  9: 'rs-pb-9',
  10: 'rs-pb-10',
};

export type PaddingType = keyof typeof paddingTops;

export const marginTops = {
  none: 'mt-0',
  base: 'rs-mt-0',
  1: 'rs-mt-1',
  2: 'rs-mt-2',
  3: 'rs-mt-3',
  4: 'rs-mt-4',
  5: 'rs-mt-5',
  6: 'rs-mt-6',
  7: 'rs-mt-7',
  8: 'rs-mt-8',
  9: 'rs-mt-9',
  10: 'rs-mt-10',
};

export const marginBottoms = {
  none: 'mb-0',
  base: 'rs-mb-0',
  1: 'rs-mb-1',
  2: 'rs-mb-2',
  3: 'rs-mb-3',
  4: 'rs-mb-4',
  5: 'rs-mb-5',
  6: 'rs-mb-6',
  7: 'rs-mb-7',
  8: 'rs-mb-8',
  9: 'rs-mb-9',
  10: 'rs-mb-10',
};
export type MarginType = keyof typeof marginBottoms;
