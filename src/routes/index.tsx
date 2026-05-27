import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-gradient.jpg";
import projMarie from "@/assets/proj-marie.jpg";
import projMelt from "@/assets/proj-melt.jpg";
import projHoreich from "@/assets/proj-horeich.jpg";
import projNuern from "@/assets/proj-nuernberger.jpg";
import projSport from "@/assets/proj-sportbuddy.jpg";
import projHr from "@/assets/proj-hr.jpg";
import projThesis from "@/assets/proj-thesis.jpg";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
});

const filters = ["All", "Mobile", "Web", "Social", "Health", "Internal"] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    name: "Marie",
    tag: "Health · Femtech",
    categories: ["Mobile", "Health"] as Filter[],
    use: "A companion app supporting women through the menopause journey — symptom tracking, evidence-based guidance, and community.",
    img: projMarie,
    href: "/projects/marie" as const,
  },
  {
    name: "Melt",
    tag: "Social · Sports",
    categories: ["Mobile", "Social"] as Filter[],
    use: "A dating platform built around shared movement — match with people through the sports and activities you actually love.",
    img: projMelt,
    href: "/projects/melt" as const,
  },
  {
    name: "Horeich",
    tag: "Web · Startup",
    categories: ["Web"] as Filter[],
    use: "Reworked the corporate website for the startup I worked at — sharper messaging, modernised UI, faster load.",
    img: projHoreich,
    href: "/projects/horeich" as const,
  },
  {
    name: "Legacy",
    tag: "InsurTech · Zollhof Challenge",
    categories: ["Mobile", "Health"] as Filter[],
    use: "Built for the Nürnberger Versicherung challenge at Zollhof: an app that makes end-of-life planning approachable and dignified.",
    img: projNuern,
    href: "/projects/legacy" as const,
  },
  {
    name: "SportBuddy",
    tag: "Community · Mobile",
    categories: ["Mobile", "Social"] as Filter[],
    use: "Find training partners nearby for any sport — from climbing to bouldering to weekend football.",
    img: projSport,
    href: "/projects/sportbuddy" as const,
  },
  {
    name: "HR Tool",
    tag: "Internal Product",
    categories: ["Web", "Internal"] as Filter[],
    use: "A lightweight recruiting workspace to source, evaluate and shortlist candidates without the SaaS overhead.",
    img: projHr,
    href: "/projects/hr-tool" as const,
  },
];

const highlights = [
  { k: "5", v: "Hackathons", d: "Including Junction Helsinki" },
  { k: "Slush", v: "Volunteer", d: "On the ground in Helsinki" },
  { k: "Tech", v: "Incubator Talent", d: "Selected programme participant" },
  { k: "Energy", v: "Specialisation", d: "Industrial engineering focus" },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Portfolio<span className="text-gradient">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#highlights" className="hover:text-foreground transition">Highlights</a>
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#thesis" className="hover:text-foreground transition">Thesis</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90 transition"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" width={1536} height={1536} className="absolute right-[-15%] top-[-10%] h-[120%] w-[80%] object-cover opacity-80" />
          <div className="blob animate-float left-[-5%] top-[20%] h-72 w-72" style={{ background: "var(--brand-pink)" }} />
          <div className="blob animate-float left-[30%] top-[60%] h-80 w-80" style={{ background: "var(--brand-orange)", animationDelay: "-4s" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-36 md:pb-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for internships & thesis collaborations
            </span>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Engineering systems
              <br />
              that <span className="text-gradient italic">make sense</span> of energy,
              <br />
              people and products.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              I'm an electrical engineering student specialising in energy systems.
              Between coursework, I build products at hackathons, with startups and
              for incubator challenges — turning messy problems into shipped software.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
              >
                Download resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-y-0.5"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
              >
                See selected work →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">A builder with an engineer's mindset.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>
              My academic home is electrical engineering — the discipline of
              optimising how systems, people and resources work together. My
              specialisation in energy systems lets me put that lens on the most
              consequential transition of our generation.
            </p>
            <p>
              Outside the lecture hall I ship products: dating apps, healthtech,
              insurance challenges, internal tools. I love taking a fuzzy brief
              from a hackathon kickoff and ending the weekend with something
              users can actually open. I am especially passionate about putting
              the user at the forefront and working on solutions they will love.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resume highlights</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">Selected experiences.</h2>
          </div>
          <a href="/resume.pdf" download className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline">
            Full resume ↓
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.v}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:shadow-soft hover:-translate-y-1"
            >
              <div className="font-display text-5xl text-gradient">{h.k}</div>
              <div className="mt-3 text-base font-semibold text-foreground">{h.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.d}</div>
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-warm opacity-0 blur-2xl transition group-hover:opacity-30" />
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              Six products, six different problems.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From femtech to insurance, each project started with a real user need
              and a tight deadline.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {filters.map((f) => {
              const active = f === activeFilter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    active
                      ? "border-transparent bg-gradient-warm text-primary-foreground shadow-glow"
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {visibleProjects.length === 0 ? (
            <p className="mt-12 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {visibleProjects.map((p, i) => {
              const Inner = (
                <div className={`grid gap-0 ${i % 3 === 0 ? "md:grid-cols-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-8">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.tag}</span>
                      <h3 className="font-display mt-2 text-2xl md:text-3xl">{p.name}</h3>
                      <p className="mt-3 text-muted-foreground">{p.use}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/70">
                      Read case study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              );
              const className = `group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:shadow-soft hover:-translate-y-1 ${i % 3 === 0 ? "md:col-span-2" : ""}`;
              return (
                <Link key={p.name} to={p.href} className={className}>{Inner}</Link>
              );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bachelor thesis */}
      <section id="thesis" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bachelor thesis</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">Where my engineering side lives.</h2>
          </div>
          <Link to="/projects/thesis" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline">
            Read the case study →
          </Link>
        </div>

        <Link
          to="/projects/thesis"
          className="group mt-10 grid gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
            <img
              src={projThesis}
              alt="Bachelor thesis — PowerFactory to RSCAD conversion tool"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between p-7 md:p-10">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Energy systems · Real-time simulation</span>
              <h3 className="font-display mt-3 text-2xl md:text-3xl">PowerFactory → RSCAD conversion tool</h3>
              <p className="mt-4 text-muted-foreground">
                An automated pipeline that translates DIgSILENT PowerFactory grid models
                into RSCAD draft files for real-time digital simulation on RTDS hardware —
                turning hours of manual rebuilding into minutes.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>· Python tooling on top of the PowerFactory API</li>
                <li>· Tool-agnostic intermediate model</li>
                <li>· Validated against benchmark networks (&lt;1% load-flow deviation)</li>
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground/70">
              Read the full case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </div>
        </Link>
      </section>

      {/* About me */}
      <section id="about" className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-card">
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Add a picture of you
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["German", "English", "Serbian"].map((lang) => (
                  <span
                    key={lang}
                    className="cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-card"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About me</p>
              <h2 className="font-display mt-3 text-3xl md:text-4xl">A short story behind the work.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  I'm a designer and engineer-in-the-making. My academic path started with a
                  B.Sc. in Electrical Engineering, specialising in energy systems — culminating
                  in a bachelor thesis on automating the conversion of PowerFactory grid models
                  into RSCAD for real-time simulation.
                </p>
                <p>
                  Alongside the technical side, I've spent the last few years designing mobile
                  and web products — from health and dating apps to internal tools and startup
                  websites — focusing on clear user research, sharp problem framing and
                  polished UI in Figma.
                </p>
                <p>
                  I care about work that's both rigorous and human: built on solid engineering
                  fundamentals, but shaped by listening closely to the people who'll actually use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="blob right-[-10%] top-[-30%] h-80 w-80" style={{ background: "white", opacity: 0.25 }} />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Let's build something useful together.
              </h2>
              <p className="mt-4 text-lg opacity-90">
                I'm currently open to internships, thesis projects and freelance
                collaborations in energy, sustainability and product.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 transition"
              >
                Download resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} — Portfolio. Built with care.</p>
          <p>Electrical Engineering · Energy Systems</p>
        </div>
      </footer>
    </div>
  );
}
