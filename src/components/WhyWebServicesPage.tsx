import { ArrowIcon, ButtonPill } from "./ButtonPill";
import { FooterGlobal } from "./FooterGlobal";
import { FooterLocal } from "./FooterLocal";
import { SiteHeader } from "./SiteHeader";

const DIFFERENTIATORS = [
  {
    icon: "fa-regular fa-clipboard",
    title: "University policy compliance",
    body: "Committed adherence to security, accessibility, privacy, and Stanford brand guidelines.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Robust solutions",
    body: "Scalable delivery designed for performance, maintainability, and long-term resilience.",
  },
  {
    icon: "fa-solid fa-arrow-pointer",
    title: "Easy-to-use platforms",
    body: "Tools that balance editorial simplicity with standards your site needs behind the scenes.",
  },
  {
    icon: "fa-solid fa-life-ring",
    title: "Premier customer support",
    body: "A reliable team that helps site owners respond quickly, recover smoothly, and keep momentum.",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Continuous support",
    body: "We stay involved after launch with platform stewardship, guidance, and ongoing iteration.",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Award-winning products",
    body: "Thoughtful, high-performing experiences shaped around university needs, audiences, and scale.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Their deep expertise, professional responsiveness, and steady partnership made a real and valuable difference in our launch.",
    name: "Research Communications Lead",
  },
  {
    quote:
      "Web Services guided our team practically and strategically through decisions that would have slowed us down on our own.",
    name: "School of Engineering Partner",
  },
  {
    quote:
      "Working as an extension of our staff, they brought structure, trust, and momentum when timelines were tight.",
    name: "University IT Collaborator",
  },
];

const EXPERTISE = [
  {
    title: "User Research",
    body: "Editorial strategy, content audits, and stakeholder alignment grounded in measurable audience needs.",
  },
  {
    title: "Digital Strategy",
    body: "Roadmaps and platform planning that connect communications goals with sustainable delivery.",
  },
  {
    title: "Technical Consulting",
    body: "Practical guidance on architecture, governance, integrations, migration planning, and launch readiness.",
  },
];

const PARTNERS = [
  ["SM", "Sarah M.", "School of Medicine"],
  ["DT", "David T.", "Earth Systems"],
  ["JR", "Jordan R.", "Graduate School of Education"],
  ["CM", "Chris M.", "Department Communications"],
  ["TR", "Taylor R.", "Vice Provost Office"],
  ["AP", "Avery P.", "Admissions"],
  ["MN", "Morgan N.", "Human Resources"],
  ["SL", "Sam L.", "Libraries"],
  ["VK", "Val K.", "Student Affairs"],
  ["JC", "Jamie C.", "Research Programs"],
  ["EL", "Emerson L.", "Doerr School"],
  ["AM", "Alex M.", "Alumni Relations"],
  ["CW", "Casey W.", "Engineering"],
  ["RB", "Riley B.", "University IT"],
  ["KH", "Kendall H.", "Communications"],
];

export default function WhyWebServicesPage() {
  return (
    <div className="min-h-screen bg-white text-sws-text">
      <SiteHeader activeLabel="Why Web Services" />

      <main>
        <section className="px-[clamp(1.25rem,5vw,100px)] pb-[114px] pt-[clamp(4rem,10vw,133px)]">
          <div className="mx-auto max-w-[1300px]">
            <h1 className="max-w-[900px] font-serif text-[clamp(2.75rem,6vw,56px)] font-normal leading-[1.3] tracking-[0.01em]">
              Why Web Services
            </h1>
            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_700px] lg:gap-[48px]">
              <p className="max-w-[560px] text-[clamp(1.9rem,3vw,36px)] font-semibold leading-[1.2] text-sws-text">
                Security, legal compliance, malicious traffic might be new challenges for you, but they are not for us.
              </p>
              <p className="max-w-[700px] text-[clamp(1.15rem,2vw,26px)] font-[350] leading-[1.5] text-sws-text/75">
                Websites are simple to launch but difficult to sustain. Behind every university web property lies a network of security requirements, accessibility standards, brand compliance, and ongoing vulnerability management that most content owners never see until something goes wrong. We have spent years building platforms and practices that handle all of it, so your team can focus on communication strategy instead of operational risk.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sws-ood px-[clamp(1.25rem,5vw,100px)] py-[114px] text-white">
          <div className="mx-auto max-w-[1300px]">
            <h2 className="max-w-[900px] font-serif text-[clamp(2.25rem,5vw,45px)] font-normal leading-[1.2] tracking-[0.01em]">
              What sets us apart
            </h2>
            <p className="mt-[38px] max-w-[900px] text-[clamp(1.1rem,2vw,26px)] font-[350] leading-[1.5] text-white/65">
              Everything we do is guided by a commitment to quality, compliance, and the people using what we build. From policy to platform to long-term support, we help teams succeed whether we are delivering the work directly or advising the path forward.
            </p>
            <div className="mt-[95px] grid gap-x-[76px] gap-y-16 md:grid-cols-2 xl:grid-cols-3">
              {DIFFERENTIATORS.map(({ icon, title, body }) => (
                <article key={title} className="max-w-[360px]">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/8 text-[1.4rem] text-white">
                    <i className={icon} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-[23px] font-semibold leading-[1.2] text-white">{title}</h3>
                  <p className="mt-[27px] text-[21px] font-[350] leading-[1.5] text-white/85">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-sws-text px-[clamp(1.25rem,5vw,100px)] py-[76px] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: "url('/images/section-portfolio-bg.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,26,0.25),rgba(23,23,26,0.68))]" aria-hidden />
          <div className="relative mx-auto max-w-[1300px]">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,33px)] font-normal leading-[1.2]">In their own words</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {TESTIMONIALS.map(({ quote, name }) => (
                <figure key={name} className="max-w-[360px]">
                  <blockquote className="m-0 text-[21px] font-[350] leading-[1.5] text-white/92">“{quote}”</blockquote>
                  <figcaption className="mt-6 text-[16px] font-semibold uppercase tracking-[0.08em] text-white/70">{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(1.25rem,5vw,100px)] py-[114px]">
          <div className="mx-auto max-w-[1300px]">
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-sws-text/45">What we are good at</p>
            <h2 className="mt-4 max-w-[900px] font-serif text-[clamp(2rem,4vw,45px)] font-normal leading-[1.2] tracking-[0.01em]">
              Expertise you can leverage
            </h2>
            <p className="mt-5 max-w-[820px] text-[21px] font-[350] leading-[1.5] text-sws-text/72">
              We provide strategic consulting that helps teams align digital priorities, reduce risk, and make better decisions before delivery begins.
            </p>
            <div className="mt-[48px] grid gap-12 lg:grid-cols-3 lg:gap-[48px]">
              {EXPERTISE.map(({ title, body }) => (
                <article key={title} className="border-t border-sws-text/20 pt-6">
                  <h3 className="font-serif text-[33px] font-normal leading-[1.2]">{title}</h3>
                  <p className="mt-4 max-w-[350px] text-[21px] font-[350] leading-[1.5] text-sws-text/75">{body}</p>
                </article>
              ))}
            </div>
            <ButtonPill as="a" href="#" className="mt-10 border-sws-red-bright px-[19px] py-[7px] text-sws-text hover:bg-sws-red-bright/10">
              Ask a consulting question <ArrowIcon className="text-sws-red-bright" />
            </ButtonPill>
          </div>
        </section>

        <section className="bg-sws-tan px-[clamp(1.25rem,5vw,100px)] py-[114px]">
          <div className="mx-auto max-w-[1300px]">
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-sws-text/45">Who we are working with</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,45px)] font-normal leading-[1.2] tracking-[0.01em]">Your partners</h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {PARTNERS.map(([initials, name, team], index) => (
                <article key={name} className="flex flex-col items-center text-center">
                  <div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-[21px] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                    style={{
                      background: `linear-gradient(135deg, rgba(177,4,14,0.92), rgba(${70 + index * 4}, ${90 + index * 3}, ${110 + index * 2}, 0.9))`,
                    }}
                  >
                    {initials}
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold leading-[1.25] text-sws-text">{name}</h3>
                  <p className="mt-1 text-[15px] font-[350] leading-[1.35] text-sws-text/68">{team}</p>
                </article>
              ))}
            </div>

            <div className="relative isolate mt-[76px] overflow-hidden rounded-[8px] px-[clamp(1.5rem,4vw,38px)] py-[clamp(1.5rem,4vw,38px)] text-white shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/momentum-hero.png')" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(67,66,62,0.82),rgba(67,66,62,0.55))]" aria-hidden />
              <div className="relative max-w-[760px]">
                <h2 className="font-serif text-[clamp(1.85rem,4vw,33px)] font-normal leading-[1.2]">The advantage of an in-house partner</h2>
                <p className="mt-4 text-[21px] font-[350] leading-[1.5] text-white/90">
                  Stanford teams move faster when strategy, standards, and implementation support already understand the institution. We bring that context into every recommendation, handoff, and launch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterLocal
        heading="We’d love to hear about what you’re working on."
        buttonHref="#"
        buttonLabel="Connect with us"
        activeLabel="Why Web Services"
      />
      <FooterGlobal />
    </div>
  );
}