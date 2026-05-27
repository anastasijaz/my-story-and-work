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
import aboutPortrait from "@/assets/about-portrait.jpg";
import { LanguageToggle, useLanguage } from "@/lib/i18n";

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

const highlightKeys = [
  { k: "5", vKey: "highlights.hackathons.v", dKey: "highlights.hackathons.d" },
  { k: "Slush", vKey: "highlights.slush.v", dKey: "highlights.slush.d" },
  { k: "Tech", vKey: "highlights.tech.v", dKey: "highlights.tech.d" },
  { k: "Energy", vKey: "highlights.energy.v", dKey: "highlights.energy.d" },
];

function Index() {
  const { t } = useLanguage();
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
            <a href="#about" className="hover:text-foreground transition">{t("nav.about")}</a>
            <a href="#highlights" className="hover:text-foreground transition">{t("nav.highlights")}</a>
            <a href="#work" className="hover:text-foreground transition">{t("nav.work")}</a>
            <a href="#thesis" className="hover:text-foreground transition">{t("nav.thesis")}</a>
            <a href="#contact" className="hover:text-foreground transition">{t("nav.contact")}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:opacity-90 transition"
            >
              {t("nav.resume")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
            </a>
          </div>
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
              {t("hero.badge")}
            </span>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {t("hero.title.l1")}
              <br />
              {t("hero.title.l2a")}<span className="text-gradient italic">{t("hero.title.l2b")}</span>{t("hero.title.l2c")}
              <br />
              {t("hero.title.l3")}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
              >
                {t("hero.download")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-y-0.5"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
              >
                {t("hero.seeWork")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("about.kicker")}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">{t("about.title")}</h2>
            <div className="relative mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
              <img
                src={aboutPortrait}
                alt="Portrait"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 self-center text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("highlights.kicker")}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">{t("highlights.title")}</h2>
          </div>
          <a href="/resume.pdf" download className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline">
            {t("highlights.full")}
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlightKeys.map((h) => (
            <div
              key={h.vKey}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:shadow-soft hover:-translate-y-1"
            >
              <div className="font-display text-5xl text-gradient">{h.k}</div>
              <div className="mt-3 text-base font-semibold text-foreground">{t(h.vKey)}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t(h.dKey)}</div>
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-warm opacity-0 blur-2xl transition group-hover:opacity-30" />
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("work.kicker")}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              {t("work.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("work.subtitle")}
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
                  {t(`filter.${f}`)}
                </button>
              );
            })}
          </div>

          {visibleProjects.length === 0 ? (
            <p className="mt-12 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center text-muted-foreground">
              {t("work.empty")}
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
                      {t("work.readCase")}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("thesis.kicker")}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">{t("thesis.title")}</h2>
          </div>
          <Link to="/projects/thesis" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline">
            {t("thesis.linkShort")}
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
              <span className="text-xs font-medium uppercase tracking-wider text-primary">{t("thesis.tag")}</span>
              <h3 className="font-display mt-3 text-2xl md:text-3xl">{t("thesis.heading")}</h3>
              <p className="mt-4 text-muted-foreground">
                {t("thesis.desc")}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>{t("thesis.b1")}</li>
                <li>{t("thesis.b2")}</li>
                <li>{t("thesis.b3")}</li>
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground/70">
              {t("thesis.readFull")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </div>
        </Link>
      </section>

      {/* About me */}
      <section id="aboutme" className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-card">
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("aboutMe.picPlaceholder")}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {(["lang.German", "lang.English", "lang.Serbian"] as const).map((lang) => (
                  <span
                    key={lang}
                    className="cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-card"
                  >
                    {t(lang)}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t("aboutMe.kicker")}</p>
              <h2 className="font-display mt-3 text-3xl md:text-4xl">{t("aboutMe.title")}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>{t("aboutMe.p1")}</p>
                <p>{t("aboutMe.p2")}</p>
                <p>{t("aboutMe.p3")}</p>
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
                {t("contact.title")}
              </h2>
              <p className="mt-4 text-lg opacity-90">
                {t("contact.subtitle")}
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90 transition"
              >
                {t("hero.download")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>{t("footer.copy", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
