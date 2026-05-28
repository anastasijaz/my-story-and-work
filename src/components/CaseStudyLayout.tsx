import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body: ReactNode;
};

export type CaseStudyOutcome = { k: string; v: string; d: string };
export type CaseStudyMeta = { l: string; v: string };
export type CaseStudyProcessStep = { title: string; description: string };
export type CaseStudyFeature = { title: string; description: string; image?: string; video?: string };

export type CaseStudyProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  cover: string;
  coverAlt: string;
  stack: string[];
  meta: CaseStudyMeta[];
  problem: CaseStudySection;
  approach: CaseStudySection;
  outcomes: CaseStudyOutcome[];
  reflections: CaseStudySection;
  process?: CaseStudyProcessStep[];
  features?: CaseStudyFeature[];
};

const DEFAULT_PROCESS: CaseStudyProcessStep[] = [
  { title: "User research", description: "Built an interactive prototype in figma to test the core flow with real user interviews and pressure-test edge cases." },
  { title: "Problem definition", description: "Synthesised insights into a sharp problem statement and a concrete \"How might we…\" framing for the team to align on." },
  { title: "Ideation", description: "Diverged with quick sketches and concept sprints, then converged on the strongest direction using impact-vs-effort scoring." },
  { title: "UI / UX design", description: "Translated the chosen direction into wireframes, then a polished UI in Figma — components, states, and a clear user flow." },
  { title: "Prototyping", description: "Built an interactive prototype to test the core flow with real users and pressure-test edge cases before any production code was written." },
  { title: "Presentation", description: "Packaged the work into a story — context, insight, solution, impact — and pitched it to stakeholders at the insurance company." },
];

const DEFAULT_FEATURES: CaseStudyFeature[] = [
  { title: "Feature one", description: "Replace this card with a screenshot and short description of the first key feature." },
  { title: "Feature two", description: "Replace this card with a screenshot and short description of the second key feature." },
  { title: "Feature three", description: "Replace this card with a screenshot and short description of the third key feature." },
];


export function CaseStudyLayout(p: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            Portfolio<span className="text-gradient">.</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            ← All projects
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-soft">
        <div className="blob animate-float left-[-5%] top-[10%] h-72 w-72" style={{ background: "var(--brand-pink)" }} />
        <div className="blob animate-float right-[5%] top-[40%] h-80 w-80" style={{ background: "var(--brand-orange)", animationDelay: "-3s" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.eyebrow}</span>
              <h1 className="font-display mt-4 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                {p.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{p.intro}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-glow">
              <img src={p.cover} alt={p.coverAlt} width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {p.meta.map((m) => (
            <div key={m.l}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{m.l}</div>
              <div className="mt-2 text-base font-medium">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <Section section={p.problem} />

      {/* Approach */}
      <section className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.approach.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">{p.approach.title}</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            {p.approach.body}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Outcomes</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">What it delivered.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.outcomes.map((h) => (
            <div key={h.v} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="font-display text-5xl text-gradient">{h.k}</div>
              <div className="mt-3 text-base font-semibold">{h.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.d}</div>
            </div>
          ))}
        </div>
      </section>

      <ProcessSection process={p.process ?? DEFAULT_PROCESS} />

      <FeaturesSection features={p.features ?? DEFAULT_FEATURES} />

      {/* Reflections */}
      <section className="border-t border-border/60 bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.reflections.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">{p.reflections.title}</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            {p.reflections.body}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="blob right-[-10%] top-[-30%] h-80 w-80" style={{ background: "white", opacity: 0.25 }} />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">More projects, same energy.</h2>
            <p className="mt-4 text-lg opacity-90">Head back to the portfolio to explore the rest of the work.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90">
                ← Back to portfolio
              </Link>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20">
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ section }: { section: CaseStudySection }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{section.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">{section.title}</h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
          {section.body}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ process }: { process: CaseStudyProcessStep[] }) {
  return (
    <section className="border-y border-border/60 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">How the work came together.</h2>
          <p className="mt-4 text-muted-foreground">
            From first interview to final pitch — the steps the project moved through.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start gap-5">
                <div className="font-display text-3xl text-gradient leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeaturesSection({ features }: { features: CaseStudyFeature[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Product features</p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">Three things it does well.</h2>
        <p className="mt-4 text-muted-foreground">
          Drop in screenshots or visuals for each of the product's headline features.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            {f.video ? (
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <video
                  src={f.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ) : f.image ? (
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/5] items-center justify-center border-b border-dashed border-border bg-muted/40 p-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Add product image
              </div>
            )}
            <div className="p-6">
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

