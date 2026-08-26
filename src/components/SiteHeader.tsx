import { cnb } from 'cnbuilder';
import { Skiplink } from '@components/SkipLink';
import { SiteNavigation } from '@components/SiteNavigation';

interface SiteHeaderProps {
  activeLabel?: string;
  theme?: "light" | "dark";
}

export function SiteHeader({ activeLabel, theme = "light" }: SiteHeaderProps) {
  const isDark = theme === "dark";

  return (
    <header className={isDark ? "bg-fill-primary" : "bg-white"}>
      <Skiplink />
      <div className={cnb("cc pt-5 pb-1", isDark ? "bg-fill-primary" : "bg-white")}>
        <a
          className={cnb("logo text-20 leading-none hocus:no-underline", isDark ? "text-dark-primary" : "text-black hocus:text-black")}
          href="https://www.stanford.edu"
        >
          Stanford University
        </a>
      </div>
      <div className="cc">
        <SiteNavigation
          location="header"
          theme={theme}
          activeLabel={activeLabel}
        />
      </div>
    </header>
  );
}
