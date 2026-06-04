import { useRef } from 'react';
import NumberFlow from '@number-flow/react';
import { useInView } from 'motion/react';

type StatProps = {
  stat: number;
  suffix?: string;
  label: string;
}

export const Stat = ({ stat, suffix, label }: StatProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterRef, { once: true, amount: 0.1 });

  return (
    <div className="flex flex-col mb-0">
      <div
        ref={counterRef}
        className="text-center md:text-left inline-block font-serif fluid-type-8 font-normal leading-snug text-dark-primary"
      >
        <NumberFlow
          value={isCounterInView ? stat : 0}
          format={{ useGrouping: false }} // Disable commas in numbers
          suffix={suffix}
        />
      </div>
      <span className="card-paragraph leading-snug text-black-30">{label}</span>
    </div>
  );
};
