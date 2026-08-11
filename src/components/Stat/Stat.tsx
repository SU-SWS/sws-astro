import { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';

type StatProps = {
  stat: number;
  suffix?: string;
  label: string;
}

export const Stat = ({ stat, suffix, label }: StatProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(0);

  /**
   * NumberFlow is mounted on the client only, never server-rendered. It renders its digits
   * into a declarative shadow root, and ClientRouter re-parses swapped-in pages, which
   * revives that shadow root — NumberFlow then calls attachShadow over it, throws
   * NotSupportedError, and React unwinds the whole island, leaving the stat blank. Mounting
   * it fresh avoids the collision entirely.
   *
   * Rendering the real number as text until then also keeps the stat correct before
   * hydration and with JS disabled, where NumberFlow would otherwise show 0.
   */
  useEffect(() => setMounted(true), []);

  /** Count up once scrolled into view. Native observer — no need to pull in motion here. */
  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setValue(stat);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(counter);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <div className="flex flex-col mb-0">
      <div
        ref={counterRef}
        className="text-center md:text-left inline-block font-serif fluid-type-8 font-normal leading-snug text-dark-primary"
      >
        {mounted ? (
          <NumberFlow
            value={value}
            format={{ useGrouping: false }} // Disable commas in numbers
            suffix={suffix}
          />
        ) : (
          <span>{stat}{suffix}</span>
        )}
      </div>
      <span className="card-paragraph leading-snug text-black-30">{label}</span>
    </div>
  );
};
