const CARDS = [
  {
    title: "Products crafted for your mission",
    body: "Phasellus convallis sagittis aliquam. Quisque porttitor nibh orci, non cursus odio elementum et. Quisque eu porttitor nulla, ut tempor erat. Sed non pulvinar leo, non fermentum odio.",
  },
  {
    title: "Products crafted for your mission",
    body: "Phasellus convallis sagittis aliquam. Quisque porttitor nibh orci, non cursus odio elementum et. Quisque eu porttitor nulla, ut tempor erat. Sed non pulvinar leo, non fermentum odio.",
  },
  {
    title: "Products crafted for your mission",
    body: "Phasellus convallis sagittis aliquam. Quisque porttitor nibh orci, non cursus odio elementum et. Quisque eu porttitor nulla, ut tempor erat. Sed non pulvinar leo, non fermentum odio.",
  },
];

export function TalkingPointsSection() {
  return (
    <section className="bg-sws-tan px-[clamp(1.25rem,5vw,100px)] pb-[171px] pt-[133px]" aria-labelledby="talking-points">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 id="talking-points" className="sr-only">
          Talking points
        </h2>
        <p className="m-0 max-w-[800px] font-serif text-[clamp(1.5rem,2.5vw,36px)] font-normal leading-tight">
          Nulla ut pulvinar nibh, ac venenatis mi. Nam venenatis finibus sapien, quis dapibus turpis. Proin ac diam pretium,
          eleifend sapien nec, commodo massa. Etiam posuere, nulla a pharetra bibendum, mauris metus.
        </p>
        <div className="mt-[95px] grid grid-cols-1 gap-10 min-[901px]:grid-cols-3">
          {CARDS.map((card, index) => (
            <article key={`${card.title}-${index}`}>
              <h3 className="m-0 mb-[19px] font-serif text-[clamp(1.5rem,1.8vw,2.25rem)] font-normal leading-tight">
                {card.title}
              </h3>
              <p className="m-0 text-[19px] leading-normal">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}