import { FeatureContent } from '@components/FeatureSection/FeatureContent';
import { FeatureSection } from '@components/FeatureSection/FeatureSection';
import { ScreenshotGrid } from "../../../ScreenshotGrid";
import { stanfordSitesCells, solutionsCells } from "../../../data/screenshotCells";
import tree from '@images/bg-tree.jpg';

const STATS_ROW_1 = [
  { num: "850 +", label: "Websites" },
  { num: "250M", label: "Hits a month on average" },
  { num: "400 +", label: "Sites in development" },
];

const STATS_ROW_2 = [
  { num: "90 +", label: "Intranets" },
  { num: "99.9%", label: "Uptime" },
];

interface StatProps {
  num: string;
  label: string;
}

function Stat({ num, label }: StatProps) {
  return (
    <div className="min-w-160 flex-[0_1_260px]">
      <p className="m-0 font-serif text-[clamp(4rem,8vw,110px)] font-normal leading-tight text-dark-primary">{num}</p>
      <p className="m-0 mt-2 max-w-264 text-23 leading-snug text-primary-muted">{label}</p>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <FeatureSection>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img src={tree.src} alt="" width={tree.width} height={tree.height} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-black-true/80" />
      </div>
      <FeatureContent
        eyebrow="Value and speed to delivery"
        title="StanfordSites"
        description="Stanford Sites gives schools, departments, research labs, and individuals an easy path to create a website and ongoing support to maintain it. StanfordSites is free to use, continuously updated, and built on a platform designed to meet Stanford's policies out of the box."
        ctaLabel="Request a Stanford Site"
        ctaHref="https://uit.stanford.edu/service/stanfordsites"
        ctaId="home-stanfordsites-cta"
      >
        <ScreenshotGrid gridClass="grid-stanford-sites" ariaLabel="StanfordSites screenshots" cells={stanfordSitesCells} />
      </FeatureContent>

      <FeatureContent
        textOnRight
        title="Solutions at scale"
        description="Update once, deploy everywhere. Maintain brand consistency effortlessly. Slash costs with shared resources and unified hosting. Get complete visibility with consolidated analytics. Launch new sites in minutes, not months."
        ctaLabel="Ask us about multi-site platforms"
        ctaHref="/contact"
        ctaId="home-solutions-cta"
        className="rs-mt-6"
      >
        <ScreenshotGrid gridClass="grid-solutions" ariaLabel="Solutions screenshots" cells={solutionsCells} />
      </FeatureContent>

      <div className="relative mx-auto rs-mt-6">
        <div className="flex flex-wrap gap-76 pt-0 first:pt-0">
          {STATS_ROW_1.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
        <div className="flex flex-wrap gap-76 pt-95">
          {STATS_ROW_2.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </FeatureSection>
  );
}
