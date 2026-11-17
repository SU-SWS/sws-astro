export const card = 'w-full lg:max-w-800 bg-white border border-border-primary rounded-lg rs-p-3';
export const helpCard = 'w-full lg:max-w-380 shrink-0 bg-white border border-border-primary rounded-lg rs-p-2';

export const form = 'flex flex-col gap-40 lg:gap-60';
export const field = 'flex flex-col';
export const label = 'font-semibold leading-snug text-primary';
export const helpText = 'pt-2 leading-snug text-cool-grey';

const controlBase = 'mt-12 w-full bg-white text-primary text-18 leading-snug rounded-sm border border-black-20 border-b-2 border-b-black-90 px-20 focus:outline-2 focus:outline-offset-2 focus:outline-digital-blue';
export const input = `${controlBase} h-64`;
export const textarea = `${controlBase} min-h-64 py-18 resize-y`;
export const select = `${controlBase} h-64 appearance-none pr-56 cursor-pointer`;
export const selectWrapper = 'relative';
export const selectIcon = 'pointer-events-none absolute right-20 bottom-22 size-20 text-primary';

export const submitRow = 'flex flex-col items-end gap-16';
export const status = 'w-full leading-snug';
export const statusVariants = {
  success: 'text-digital-green',
  error: 'text-digital-red',
};
