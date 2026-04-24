import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from "react";

type ButtonPillProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

interface ArrowIconProps {
  className?: string;
}

export function ButtonPill({ as: Component = "button", children, className = "", ...props }: ButtonPillProps) {
  return (
    <Component
      className={`mt-[27px] inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-sws-red-bright bg-transparent px-[19px] py-2 font-sans text-[19px] font-[350] leading-snug text-white hover:bg-[rgba(122,0,0,0.8)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <i
      className={`fa-solid fa-arrow-right inline-flex items-center justify-center text-sm leading-none [-webkit-text-stroke:0.4px_currentColor] [transform:rotate(-45deg)] ${className}`}
      aria-hidden
    />
  );
}