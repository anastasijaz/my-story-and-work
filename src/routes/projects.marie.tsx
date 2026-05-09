import { createFileRoute, Link } from "@tanstack/react-router";
import projMarie from "@/assets/proj-marie.jpg";
import shot1 from "@/assets/marie-screen-1.jpg";
import shot2 from "@/assets/marie-screen-2.jpg";
import shot3 from "@/assets/marie-screen-3.jpg";

export const Route = createFileRoute("/projects/marie")({
  head: () => ({
    meta: [
      { title: "Marie — Menopause wellness app · Case study" },
      { name: "description", content: "A femtech companion built for women navigating menopause. Case study covering problem, design, build and outcomes." },
      { property: "og:title", content: "Marie — Menopause wellness app" },
      { property: "og:description", content: "Case study: a femtech companion for women navigating menopause." },
      { property: "og:image", content: projMarie },
    ],
  }),
  component: MarieCase,
});

const outcomes = [
  { k: "48h", v: "Hackathon build", d: "From kickoff to working prototype" },
  { k: "3", v: "Core flows shipped", d: "Tracker, check-in, community" },
  { k: "12+", v: "Women interviewed", d: "Shaped the product direction" },
  { k: "Top 5", v: "Team finish", d: "Selected by jury for impact" },
];

const stack = ["React Native", "TypeScript", "Figma", "Notion AI", "Firebase"];

function MarieCase() {
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case study · Femtech</span>
              <h1 className="font-display mt-4 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                <span className="text-gradient italic">Marie</span> — care that
                meets women at menopause.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                A mobile companion that helps women track symptoms, learn from
                trustworthy experts, and feel less alone during one of life's
                most under-supported transitions.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-glow">
              <img src={projMarie} alt="Marie — abstract cover" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { l: "Role", v: "Product & front-end" },
            { l: "Team", v: "4 — design, dev, research" },
            { l: "Timeline", v: "48-hour hackathon" },
            { l: "Status", v: "Prototype + pitch" },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{m.l}</div>
              <div className="mt-2 text-base font-medium">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The problem</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">An invisible transition.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>
              Roughly half the population goes through menopause — yet most
              women report feeling unprepared, dismissed by clinicians, and
              unable to find evidence-based information they trust.
            </p>
            <p>
              Existing tools are either fertility apps awkwardly stretched to
              fit the wrong life stage, or clinical PDFs that nobody opens
              twice. Marie was our answer: a soft, daily companion built
              specifically for the menopause years.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-y border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Inside the app</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">Three flows we shipped first.</h2>
            <p className="mt-4 text-muted-foreground">
              We narrowed scope ruthlessly — only the screens that proved the
              core value made it into the prototype.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { src: shot1, t: "Daily home", d: "A warm, low-pressure entry point with quick access to trackers and tips." },
              { src: shot2, t: "Symptom check-in", d: "Capture mood and symptoms in seconds — building a personal timeline." },
              { src: shot3, t: "Trusted content", d: "Expert-reviewed articles and a community feed for shared experience." },
            ].map((s) => (
              <figure key={s.t} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="aspect-[2/3] overflow-hidden bg-muted">
                  <img src={s.src} alt={s.t} loading="lazy" width={1024} height={1536} className="h-full w-full object-cover" />
                </div>
                <figcaption className="p-5">
                  <div className="text-base font-semibold">{s.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Outcomes</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">What we walked away with.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((h) => (
            <div key={h.v} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="font-display text-5xl text-gradient">{h.k}</div>
              <div className="mt-3 text-base font-semibold">{h.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
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
            {[
              { title: "User research", description: "Interviewed 12+ women navigating peri- and post-menopause to map the real lived experience and the gaps in current support." },
              { title: "Problem definition", description: "Synthesised insights into one sentence: women feel dismissed and under-informed during menopause, and need a daily companion they trust." },
              { title: "Ideation", description: "Sprinted through concepts — from clinical journals to social communities — and converged on a soft, daily check-in product." },
              { title: "UI / UX design", description: "Designed a calm, warm interface in Figma with a strong focus on accessibility and tone of voice for a sensitive topic." },
              { title: "Prototyping", description: "Built an interactive Figma prototype and validated the symptom check-in flow with returning interview participants." },
              { title: "Presentation", description: "Pitched Marie to the hackathon jury with a story arc — context, insight, product, impact — and finished in the top 5." },
            ].map((step, i) => (
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Product features */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Product features</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">Three things it does well.</h2>
          <p className="mt-4 text-muted-foreground">
            Drop in screenshots or visuals for each of the product's headline features.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Daily home", description: "A warm, low-pressure entry point with quick access to trackers and tips.", image: shot1 },
            { title: "Symptom check-in", description: "Capture mood and symptoms in seconds — building a personal timeline.", image: shot2 },
            { title: "Trusted content", description: "Expert-reviewed articles and a community feed for shared experience.", image: shot3 },
          ].map((f) => (
            <article
              key={f.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
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
              <div className="p-6">
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reflections */}
      <section className="border-t border-border/60 bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Reflections</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">What I'd do next.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>
              The strongest signal came from interviews, not the prototype.
              I'd invest the next sprint in expanding the research panel
              before adding any new screens.
            </p>
            <p>
              On the engineering side, moving the symptom timeline to a
              local-first store would make the daily check-in feel instant
              even on poor connections — the moment that matters most.
            </p>
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
