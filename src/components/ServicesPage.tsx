import { ArrowIcon, ButtonPill } from "./ButtonPill";
import { FooterGlobal } from "./FooterGlobal";
import { FooterLocal } from "./FooterLocal";
import { ServiceSection } from "./ServiceSection";
import { SiteHeader } from "./SiteHeader";

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
    <div className="min-h-screen bg-black text-white">
      <SiteHeader activeLabel="Services" theme="dark" />

      <main>
        <section className="cc rs-pb-7 rs-pt-8">
          <div className="max-w-1300">
            <h1 className="font-serif text-[3.6rem] leading-cozy tracking-[0.01em] text-white md:text-[5.5rem] 4xl:text-[7rem]">
              Services
            </h1>
            <p className="rs-mt-3 max-w-900 text-[2.4rem] leading-cozy text-black-50 md:text-[3rem] 4xl:text-[3.6rem]">
              We partner with teams across Stanford, big and small. From a focused UX strategy sprint to a multi-year program,
              our job is to help your users engage with Stanford’s mission and your work through digital experiences that last.
            </p>
          </div>
        </section>

        <section className="cc pb-4">
          <div className="grid max-w-1300 gap-61 lg:grid-cols-[392px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-0 lg:self-start lg:pt-95 lg:pb-95">
              {PRINCIPLES.map((principle, index) => (
                <article key={principle.title} className={index === 0 ? "" : "rs-pt-4"}>
                  <div className="size-76 rounded-full border border-black-60/65 bg-black-90/35" aria-hidden />
                  <h2 className="rs-pt-1 font-serif text-[2.7rem] leading-display tracking-[0.01em] text-white md:text-[3.6rem] 4xl:text-[4.5rem]">
                    {principle.title}
                  </h2>
                  <p className="mt-27 basefont-23 leading-snug text-black-50">{principle.body}</p>
                </article>
              ))}
            </aside>

            <div className="rs-pt-10 rs-pb-6">
              <div className="flex flex-col rs-gap-y-6">
                {SERVICES.map((service) => (
                  <ServiceSection key={service.title} {...service} />
                ))}
              </div>
              <a href="/why-web-services" className="inline-flex items-center gap-6 rs-mt-6 text-19 text-white">
                <span className="underline decoration-digital-red-xlight underline-offset-4">Why partner with us</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="cc rs-pt-10">
          <div className="max-w-1300 rounded-4xl border border-black-60 px-38 py-61">
            <p className="text-19 text-black-50">Types of work</p>
            <h2 className="rs-pt-1 font-serif text-[2.7rem] leading-display tracking-[0.01em] text-white md:text-[3.6rem] 4xl:text-[4.5rem]">
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

            <div className="flex justify-center rs-pt-6">
              <ButtonPill as="a" href="#" className="mt-0 border-digital-red-xlight px-22 py-11 text-white hover:bg-white/8">
                Talk to us <ArrowIcon />
              </ButtonPill>
            </div>
          </div>
        </section>

        <section className="cc rs-pt-10 rs-pb-10">
          <div className="max-w-1300 border-t border-black-60 pt-27">
            <p className="text-19 text-black-50">Technologies</p>
            <h2 className="rs-pt-1 font-serif text-[2.7rem] leading-display tracking-[0.01em] text-white md:text-[3.6rem] 4xl:text-[4.5rem]">
              We work in
            </h2>
            <p className="rs-mt-2 max-w-900 basefont-23 leading-snug text-black-50">
              Partnerships come first, which means technology should never become the thing that blocks progress. We work across
              multiple platforms, languages, and delivery models so teams can choose the solution that fits the problem rather than
              forcing the problem to fit a tool.
            </p>

            <div className="grid rs-gap-x-6 rs-gap-y-4 rs-pt-4 md:grid-cols-3">
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
