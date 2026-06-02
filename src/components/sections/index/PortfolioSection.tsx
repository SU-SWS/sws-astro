import { FeatureContent } from '@components/FeatureSection/FeatureContent';
import { FeatureSection } from '@components/FeatureSection/FeatureSection';
import { ScreenshotGrid } from "../../../ScreenshotGrid";
import { stanfordSitesCells, solutionsCells } from "../../../data/screenshotCells";
import tree from '@images/bg-tree.jpg';

const STATS = [
  { num: "1200+", label: "Stanford Sites websites" },
  { num: "90+", label: "Stanford Sites intranets" },
  { num: "250M", label: "Stanford Sites hits/month on average" },
];

interface StatProps {
  num: string;
  label: string;
}

function Stat({ num, label }: StatProps) {
  return (
    <li className="flex flex-col mb-0">
      <span className="font-serif fluid-type-7 font-normal leading-snug text-dark-primary">{num}</span>
      <span className="card-paragraph leading-snug text-black-30">{label}</span>
    </li>
  );
}

export function PortfolioSection() {
  return (
    <FeatureSection>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src={tree.src} alt="" width={tree.width} height={tree.height} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-black-true/80" />
      </div>

      <FeatureContent
        title="Solutions at scale"
        description="Update once, deploy everywhere. Maintain brand consistency effortlessly. Slash costs with shared resources and unified hosting. Get complete visibility with consolidated analytics. Launch new sites in minutes, not months."
        ctaLabel="Ask us about multi-site platforms"
        ctaHref="/contact"
        ctaId="home-solutions-cta"
      >
        <ScreenshotGrid gridClass="grid-solutions" ariaLabel="Solutions screenshots" cells={solutionsCells} />
      </FeatureContent>

      <FeatureContent
        textOnRight
        eyebrow="Value and speed to delivery"
        title="Stanford Sites"
        description="Stanford Sites gives schools, departments, research labs, and individuals an easy path to create a website and ongoing support to maintain it. Stanford Sites is free to use, continuously updated, and built on a platform designed to meet Stanford’s policies out of the box."
        ctaLabel="Request a Stanford Site"
        ctaHref="https://uit.stanford.edu/service/stanfordsites"
        ctaId="home-stanfordsites-cta"
        className="rs-mt-6"
      >
        <ScreenshotGrid gridClass="grid-stanford-sites" ariaLabel="Stanford Sites screenshots" cells={stanfordSitesCells} />
      </FeatureContent>

      <div className="relative mx-auto rs-mt-6">
        <ul className="list-unstyled flex flex-wrap rs-gap-5">
          {STATS.map((stat) => (
            <Stat key={stat.num} {...stat} />
          ))}
        </ul>
      </div>
    </FeatureSection>
  );
}
