export const menuButton = 'xl:hidden group rounded-full border-2 border-transparent bg-transparent p-4 transition-colors hocus-visible:border-digital-red-xlight focus:outline-none';

export const menuButtonColors = {
  light: 'text-primary',
  dark: 'text-dark-primary',
};

export const hamburgerIcon = 'size-28 transition-transform ease-out group-hover:scale-y-85 group-focus-visible:scale-y-85 motion-reduce:transition-none';

export const closeIcon = 'size-28 transition-transform ease-out group-hover:rotate-90 group-focus-visible:rotate-90 motion-reduce:transition-none';

export const backdrop = 'xl:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300';

export const backdropStates = {
  open: 'opacity-100 pointer-events-auto',
  closed: 'opacity-0 pointer-events-none',
};

export const drawer = 'xl:hidden fixed inset-y-0 right-0 z-50 flex w-md flex-col shadow-xl transition-transform duration-300 ease-in-out bg-fill-primary text-dark-primary';

export const drawerStates = {
  open: 'translate-x-0',
  closed: 'translate-x-full',
};

export const drawerHeader = 'flex justify-end p-16';

export const closeButton = 'text-dark-primary';

export const nav = 'px-24 pb-24';

export const navList = 'flex flex-col list-unstyled';

export const navItem = 'block border-b border-black-80 mb-0 leading-display';

export const navLink = 'relative block py-20 pl-20 text-20 font-semibold leading-display transition-colors text-black-40 hocus-visible:text-dark-primary';

export const navIndicator = 'pointer-events-none absolute inset-y-4 left-0 w-6';

export const navIndicatorColors = {
  active: 'bg-white',
  hover: 'bg-digital-red-xlight',
};
