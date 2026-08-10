import React from 'react';
import { cnb } from 'cnbuilder';

type SkiplinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'> & {
  href?: string;
  className?: string;
  children?: string;
};

export const Skiplink = ({
  href = '#main-content',
  children = 'Skip to main content',
  className,
  ...rest
}: SkiplinkProps) => (
  <a {...rest} href={href} className={cnb('skiplink', className)}>
    {children}
  </a>
);
