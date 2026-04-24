export function IntroLede() {
  return (
    <section className="flex justify-center px-[clamp(1.25rem,5vw,100px)] pb-[114px] pt-[95px]" aria-labelledby="intro-heading">
      <h1 id="intro-heading" className="sr-only">
        Introduction
      </h1>
      <p className="m-0 max-w-[1000px] flex-1 font-serif text-[clamp(2rem,4vw,56px)] font-medium leading-tight text-sws-text">
        We build digital experiences worthy of the work behind them — for every team, every scale, every vision.
      </p>
    </section>
  );
}
