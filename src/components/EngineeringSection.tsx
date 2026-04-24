import { ArrowIcon, ButtonPill } from "./ButtonPill";

export function EngineeringSection() {
  return (
    <section
      className="relative overflow-hidden bg-sws-engineering px-[clamp(1.25rem,5vw,100px)] pb-[114px] pt-[95px] text-white"
      aria-labelledby="engineering-title"
    >
      <img
        className="pointer-events-none absolute right-[-20%] top-[-20%] z-0 w-[90vmin] opacity-45"
        src="/images/engineering-glow-ellipse-1.svg"
        alt=""
        aria-hidden
      />
      <img
        className="pointer-events-none absolute bottom-[-30%] left-[-25%] z-0 w-[80vmin] opacity-45"
        src="/images/engineering-glow-ellipse-2.svg"
        alt=""
        aria-hidden
      />
      <img
        className="pointer-events-none absolute bottom-[-40%] right-[10%] z-0 w-[85vmin] opacity-45"
        src="/images/engineering-glow-ellipse-3.svg"
        alt=""
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex max-w-[1300px] flex-wrap items-stretch justify-center gap-8">
        <div className="flex max-w-[532px] flex-col justify-start gap-8">
          <p className="m-0 mb-8 text-[21px] font-[350] leading-snug text-white">Lasting Partnerships</p>
          <div>
            <h2
              id="engineering-title"
              className="m-0 mb-2.5 font-serif text-[clamp(2rem,3vw,51px)] font-normal leading-snug"
            >
              Engineering Centennial 2025
            </h2>
            <p className="m-0 text-[21px] font-[350] leading-snug">
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In pellentesque rutrum nisl,
              nec lacinia nibh.
            </p>
            <ButtonPill type="button">
              Visit Engineering Centennial
              <ArrowIcon />
            </ButtonPill>
          </div>
        </div>
        <div className="relative max-w-[768px] flex-[1_1_320px]">
          <div className="relative z-[1] aspect-video w-full max-w-[768px] overflow-hidden rounded-md bg-sws-video-bg">
            <img
              className="absolute inset-0 block size-full object-cover"
              src="/images/engineering-centennial-100-front.svg"
              alt="Stanford Engineering Centennial website hero"
            />
            <div className="pointer-events-none absolute bottom-[clamp(12px,3vw,24px)] right-[clamp(12px,3vw,24px)] z-[2] flex max-w-[calc(100%-24px)]">
              <img
                src="/images/Anthem_award_label.png"
                alt="Anthem Awards"
                width={120}
                height={120}
                className="block h-auto w-[clamp(72px,16vw,120px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}