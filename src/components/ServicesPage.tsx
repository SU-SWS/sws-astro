import { ArrowIcon, ButtonPill } from "./ButtonPill";
import { ServiceSection } from "./ServiceSection";

const PRINCIPLES = [
  {
    title: "Learn",
    body: "We start by listening, then help you shape a strategy that fits your goals, stakeholders, and institutional constraints.",
  },
  {
    title: "Make",
    body: "Our process is iterative by nature. We bring ideas to life early, refine them with you, and turn them into practical delivery plans.",
  },
  {
    title: "Evolve",
    body: "We treat every launch as the start of a longer partnership, staying ready to maintain, improve, and extend the work over time.",
  },
];

const SERVICES = [
  {
    title: "Strategy",
    body:
      "Collaborate with us to research, plan, and roadmap your department’s online presence. We help teams identify where to innovate, where to build on past work, and how to navigate Stanford requirements without losing momentum.",
    items: ["Project discovery", "UX and technical strategy", "UX research", "Information architecture"],
  },
  {
    title: "Design",
    body:
      "We design interfaces that are as distinctive as the products they serve. Our work is grounded in scalable systems so designers and developers share a common language across microsites, platforms, and applications.",
    items: ["Visual and interaction design", "User experience", "Prototyping", "Design systems and guidelines"],
  },
  {
    title: "Engineering",
    body:
      "From site building to custom development, we translate product goals into reliable systems. We focus on maintainable implementation, motion where it helps, and the flexibility to support both small web properties and complex platforms.",
    items: ["Website production", "Custom development", "Site building", "Animation and motion design"],
  },
  {
    title: "Continuous support",
    body:
      "Launch is not the end of our work. We stay engaged through maintenance, vendor coordination, accessibility guidance, analytics review, and the practical support teams need once a product is live.",
    items: ["Platform maintenance support", "Vendor hosting support", "Analytics and UX monitoring", "Accessibility support"],
  },
  {
    title: "Security, performance, and adherence",
    body:
      "We build with university standards in mind from the start, covering performance, accessibility, content governance, and the operational safeguards that keep Stanford properties trustworthy over time.",
    items: ["Accessibility review", "Performance optimization", "Security and risk mitigation", "Stanford policy alignment"],
  },
];

const WORK_TYPES = [
  {
    title: "Research and discovery",
    body: "Problem framing, workshop facilitation, and research planning that sharpen the right opportunity before delivery starts.",
  },
  {
    title: "AI prototyping",
    body: "Exploratory prototypes, prompt design, and workflow experiments that help teams assess where AI fits productively.",
  },
  {
    title: "Content systems",
    body: "Taxonomies, governance models, and editorial patterns that make complex sites easier to run across large teams.",
  },
  {
    title: "Digital consulting",
    body: "Technical consulting and planning support for teams choosing between platforms, migrations, integrations, and resourcing options.",
  },
];

const TECHNOLOGY_COLUMNS = [
  ["Drupal", "Storyblok", "React", "Astro"],
  ["WordPress", "Next.js", "Node.js", "TypeScript"],
  ["Figma", "Design systems", "APIs", "Analytics tooling"],
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-sws-ood text-white">
      <main>
        <section className="cc pb-[114px] pt-[133px]">
          <div className="max-w-[1300px]">
            <h1 className="max-w-[900px] font-serif text-[45px] leading-[1.4] tracking-[0.01em] text-white md:text-[56px] 4xl:text-[70px]">
              Services
            </h1>
            <p className="max-w-[900px] pt-[48px] text-[26px] leading-[1.4] text-[#979694] md:text-[30px] 4xl:text-[36px]">
              We partner with teams across Stanford, big and small. From a ten-hour UX strategy consult to a multi-year
              program, we share the same campus and the same goal: moving Stanford forward through digital experiences that help
              your users engage with the mission behind your work.
            </p>
          </div>
        </section>

        <section className="cc pb-[4px]">
          <div className="grid max-w-[1300px] gap-[76px] lg:grid-cols-[392.667px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-0 lg:self-start lg:py-[95px]">
              {PRINCIPLES.map((principle, index) => (
                <article key={principle.title} className={index === 0 ? "w-full" : "w-full pt-[61px]"}>
                  <div className="size-[76px]" aria-hidden />
                  <h2 className="pt-[10px] font-serif text-[36px] leading-[1.2] tracking-[0.01em] text-white md:text-[40px] 4xl:text-[45px]">
                    {principle.title}
                  </h2>
                  <p className="mt-[27px] text-[21px] leading-[1.3] text-[#979694] md:text-[23px]">{principle.body}</p>
                </article>
              ))}
            </aside>

            <div className="pb-[95px]">
              <div className="flex flex-col rs-gap-y-6">
                {SERVICES.map((service) => (
                  <ServiceSection key={service.title} {...service} />
                ))}
              </div>
              <a href="/why-web-services" className="mt-[13px] inline-flex items-center gap-6 text-[19px] leading-[1.32] text-white">
                <span className="underline decoration-digital-red-xlight underline-offset-4">Why partner with us</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="cc pt-95">
          <div className="rounded-[8px] border border-black-60 px-38 py-61 mx-auto">
            <p className="text-19 text-black-50">Types of work</p>
            <h2 className="rs-pt-1 font-serif text-27 leading-display tracking-[0.01em] text-white md:text-36 4xl:text-45">
              We do more than web
            </h2>
            <p className="rs-mt-2 max-w-900 text-[2.1rem] leading-normal text-black-50 md:text-[2.3rem] 4xl:text-[2.6rem]">
              Our team works across the spectrum of digital problem solving. That includes research and definition, AI prototyping,
              structured consulting, and adjacent product work that stretches beyond a traditional website brief.
            </p>

            <div className="grid rs-gap-x-2 rs-gap-y-6 rs-pt-6 md:grid-cols-2">
              {WORK_TYPES.map((type) => (
                <article key={type.title} className="max-w-440">
                  <h3 className="font-serif text-[2.3rem] leading-snug text-white md:text-[2.6rem] 4xl:text-[2.9rem]">{type.title}</h3>
                  <p className="mt-19 text-19 leading-display text-black-50">{type.body}</p>
                </article>
              ))}
            </div>

            <div className="flex justify-center pt-[38px]">
              <ButtonPill as="a" href="#" className="mt-0 border-digital-red-xlight px-22 py-11 text-white hover:bg-white/8">
                Talk to us <ArrowIcon />
              </ButtonPill>
            </div>
          </div>
        </section>

        <section className="cc pb-[95px] pt-[95px]">
          <div className="max-w-[1300px] border-t border-black-60 pt-[27px]">
            <p className="text-19 text-black-50">Technologies</p>
            <h2 className="rs-pt-1 font-serif text-[2.7rem] leading-display tracking-[0.01em] text-white md:text-[3.6rem] 4xl:text-[4.5rem]">
              We work in
            </h2>
            <p className="rs-mt-2 max-w-900 basefont-23 leading-snug text-black-50">
              Partnerships come first, which means technology should never become the thing that blocks progress. We work across
              multiple platforms, languages, and delivery models so teams can choose the solution that fits the problem rather than
              forcing the problem to fit a tool.
            </p>

            <div className="grid gap-x-[76px] gap-y-[16px] pt-[48px] md:grid-cols-3">
              {TECHNOLOGY_COLUMNS.map((column, index) => (
                <ul key={index} className="text-black-50">
                  {column.map((item, itemIndex) => (
                    <li key={item} className={itemIndex === 0 ? "" : "mt-13"}>
                      <span className="basefont-21 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
