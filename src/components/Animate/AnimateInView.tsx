import { useRef } from 'react';
import { LazyMotion, domAnimation } from "motion/react"
import * as m from 'motion/react-m';
import { useInView } from 'motion/react';
import { type DOMMotionComponents, type EasingDefinition } from 'motion/react';
import { AnimationMap, type AnimationType } from './AnimationMap';

type MotionElementTag = Extract<keyof DOMMotionComponents, keyof typeof m>;

export type AnimateInViewProps = React.HTMLAttributes<HTMLElement> & {
  as?: MotionElementTag; // E.g., if as="section", MotionComponent will be m.section
  animation?: AnimationType;
  id?: string;
  once?: boolean;
  duration?: number;
  delay?: number;
  transition?: EasingDefinition;
  children: React.ReactNode;
};

export const AnimateInView = ({
  as: elementTag = 'div',
  animation = 'slideUp',
  id,
  once = true,
  duration = 0.6,
  delay,
  transition = 'easeOut',
  children,
  className,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  const MotionComponent = m[elementTag] as React.ElementType;
  const StaticComponent = elementTag as React.ElementType;

  if (animation === 'none') {
    return (
      <StaticComponent className={className} {...props}>
        {children}
      </StaticComponent>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <MotionComponent
        ref={ref}
        id={id}
        variants={AnimationMap[animation]}
        transition={{
          delay,
          duration,
          ease: transition,
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    </LazyMotion>
  );
};
