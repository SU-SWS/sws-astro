import { motion, useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";

type GridClass = "grid-stanford-sites" | "grid-solutions";
type ScreenshotCellId = "c1" | "c2" | "c3" | "c4";

export interface ScreenshotCell {
  id: ScreenshotCellId;
  src: string;
  alt?: string;
}

interface ScreenshotGridProps {
  gridClass: GridClass;
  ariaLabel: string;
  cells: ScreenshotCell[];
}

const easeCurve: NonNullable<Transition["ease"]> = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

function itemVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0 },
    };
  }

  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeCurve },
    },
  };
}

const POSITIONS: Record<GridClass, Record<ScreenshotCellId, string>> = {
  "grid-stanford-sites": {
    c1: "left-0 top-0 h-[46.4%] w-[47.4%]",
    c2: "left-[52.6%] top-0 h-[46.4%] w-[47.4%]",
    c3: "left-0 top-[52.6%] h-[46.4%] w-[47.4%]",
    c4: "left-[52.6%] top-[52.6%] h-[46.4%] w-[47.4%]",
  },
  "grid-solutions": {
    c1: "left-0 top-0 h-[47%] w-[47.4%]",
    c2: "left-[52.6%] top-0 h-[47%] w-[47.4%]",
    c3: "left-0 top-[52.6%] h-[47%] w-[47.4%]",
    c4: "left-[52.6%] top-[52.6%] h-[47%] w-[47.4%]",
  },
};

export function ScreenshotGrid({ gridClass, ariaLabel, cells }: ScreenshotGridProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const layout = POSITIONS[gridClass];

  return (
    <motion.div
      className="relative aspect-768/760 w-full max-w-768"
      role="img"
      aria-label={ariaLabel}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 0px 0px" }}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className={`absolute overflow-hidden rounded-md shadow-card ${layout[cell.id]}`}
          variants={itemVariants(reduceMotion)}
        >
          <img src={cell.src} alt={cell.alt ?? ""} loading="lazy" className="size-full object-cover" />
        </motion.div>
      ))}
    </motion.div>
  );
}
