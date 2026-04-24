import { ArrowIcon, ButtonPill } from "./ButtonPill";

export function MomentumSection() {
  return (
    <section className="relative overflow-hidden px-[clamp(1.25rem,5vw,100px)] pb-[114px] pt-[95px] text-white" aria-labelledby="momentum-title">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img src="/images/section-portfolio-bg.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-sws-bleed-overlay" />
      </div>
      <div className="relative z-[1] mx-auto max-w-[1500px]">
        <div className="flex flex-wrap items-start justify-center gap-8">
          <div className="flex max-w-[532px] flex-[1_1_280px] flex-col justify-start gap-8 pr-[clamp(0rem,2vw,38px)]">
            <p className="m-0 mb-8 text-[21px] font-[350] leading-snug text-white">Lasting Partnerships</p>
            <div>
              <h2
                id="momentum-title"
                className="m-0 mb-2.5 font-serif text-[clamp(2rem,3vw,45px)] font-normal leading-tight"
              >
                Momentum
              </h2>
              <p className="m-0 text-[21px] font-[350] leading-snug">
                Mauris vel nunc rutrum, semper neque a, venenatis metus. Nulla egestas, enim ut blandit pulvinar, lorem tellus
                pulvinar ex, a eleifend ante arcu et nulla. Fusce et cursus libero. Nullam vitae lacus quis augue semper luctus
                nec non ex.&nbsp;
              </p>
              <ButtonPill as="a" href="https://momentum.stanford.edu/">
                Visit Momentum
                <ArrowIcon />
              </ButtonPill>
            </div>
          </div>
          <div className="relative max-w-[768px] min-h-[400px] flex-[1_1_320px] overflow-hidden rounded-md border border-[#2e2d29] bg-sws-momentum-frame">
            <img
              className="min-h-[400px] w-full object-cover"
              src="/images/momentum-hero.png"
              alt="Momentum campaign creative"
              width={768}
              height={738}
            />
            <div className="absolute bottom-[clamp(12px,3vw,24px)] right-[clamp(12px,3vw,24px)] z-[2] flex max-w-[calc(100%-24px)] flex-col gap-1 rounded-lg bg-[#3ec6fc] p-1.5">
              <img src="/images/WEBBY%20NOMINEE.png" alt="Webby Awards" width={90} height={63} className="h-auto w-[90px]" />
            </div>
          </div>
        </div>
        <div className="pt-[95px] text-center">
          <a className="text-[19px] leading-snug text-white/95" href="#">
            <span className="underline decoration-sws-red-bright [text-underline-offset:4px] hover:decoration-[#b1040e] hover:decoration-2">
              Learn more about our work
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
