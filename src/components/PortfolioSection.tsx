import { ScreenshotGrid } from "../ScreenshotGrid";
import { stanfordSitesCells, solutionsCells } from "../data/screenshotCells";
import { ArrowIcon, ButtonPill } from "./ButtonPill";

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
    <div className="min-w-[160px] flex-[0_1_260px]">
      <p className="m-0 font-serif text-[clamp(4rem,8vw,110px)] font-normal leading-tight text-white">{num}</p>
      <p className="m-0 mt-1.5 max-w-[264px] text-[23px] leading-snug text-sws-muted">{label}</p>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden px-[clamp(1.25rem,5vw,100px)] pb-[114px] pt-[95px] text-white" aria-label="Portfolio and impact">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img src="/images/section-portfolio-bg.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-sws-bleed-overlay" />
      </div>
      <div className="relative z-[1] mx-auto max-w-[1500px]">
        <div className="mx-auto flex w-full max-w-[1300px] flex-wrap items-start justify-center gap-8">
          <div className="flex max-w-[532px] flex-[1_1_280px] flex-col justify-start gap-8 pr-[clamp(0rem,2vw,38px)]">
            <p className="m-0 mb-8 text-[21px] font-[350] leading-snug text-white">Value for lorem ipsum</p>
            <div>
              <h2 className="m-0 mb-2.5 font-serif text-[clamp(2rem,3vw,45px)] font-normal leading-tight">StanfordSites</h2>
              <p className="m-0 text-[21px] font-[350] leading-snug">
                Nulla sit amet nibh nec nulla porttitor elementum a vel sapien. Curabitur condimentum ipsum nec purus interdum
                commodo. Ut nec fringilla enim, at porttitor risus.
              </p>
              <ButtonPill type="button">
                Request a Stanford Site
                <ArrowIcon />
              </ButtonPill>
            </div>
          </div>
          <div className="min-w-0 w-full max-w-[768px] flex-[1_1_320px]">
            <ScreenshotGrid gridClass="grid-stanford-sites" ariaLabel="StanfordSites screenshots" cells={stanfordSitesCells} />
          </div>
        </div>

        <div className="mx-auto mt-[95px] flex w-full max-w-[1300px] flex-wrap items-start justify-center gap-8 max-[718px]:flex-col">
          <div className="min-w-0 w-full max-w-[768px] flex-[1_1_320px] max-[718px]:order-2">
            <ScreenshotGrid gridClass="grid-solutions" ariaLabel="Solutions screenshots" cells={solutionsCells} />
          </div>
          <div className="flex max-w-[532px] flex-[1_1_280px] flex-col justify-start gap-8 pl-[clamp(0rem,2vw,61px)] pr-0 pt-[clamp(2rem,6vw,133px)] max-[1100px]:pl-0 max-[718px]:order-1 max-[718px]:pt-0">
            <div>
              <h2 className="m-0 mb-2.5 font-serif text-[clamp(2rem,3vw,45px)] font-normal leading-tight">
                Solutions at scale
              </h2>
              <p className="m-0 text-[21px] font-[350] leading-snug">
                Maecenas placerat leo sed mauris rutrum, non eleifend libero imperdiet. Cras a fringilla est. Sed scelerisque quam
                id elit luctus, eu tristique felis tempor. Donec commodo facilisis libero ut consectetur.
              </p>
              <ButtonPill type="button">
                Ask us about multi-site platforms
                <ArrowIcon />
              </ButtonPill>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[95px] max-w-[1300px]">
          <div className="flex flex-wrap gap-[76px] pt-0 first:pt-0">
            {STATS_ROW_1.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex flex-wrap gap-[76px] pt-[95px]">
            {STATS_ROW_2.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}