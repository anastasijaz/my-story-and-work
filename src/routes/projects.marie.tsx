import { createFileRoute, Link } from "@tanstack/react-router";
import projMarie from "@/assets/proj-marie.jpg";
import shotHome from "@/assets/marie-screen-home.jpg";
import shotAI from "@/assets/marie-screen-ai.jpg";
import shotTracker from "@/assets/marie-screen-tracker.jpg";
import shotFitness from "@/assets/marie-screen-fitness.jpg";

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

const stack = ["TypeScript", "Figma", "Notion AI", "Firebase"];

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

            <div className="relative mx-auto w-full max-w-[320px]">
              {/* iPhone frame */}
              <div className="relative rounded-[3rem] bg-slate-900 p-2 shadow-2xl ring-1 ring-white/10">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-3 z-10 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />
                {/* Screen */}
                <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
                  <img
                    src={shotHome}
                    alt="Marie app home screen"
                    width={1024}
                    height={1536}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Reflection / shadow */}
              <div className="pointer-events-none absolute inset-x-4 -bottom-4 h-8 rounded-full bg-black/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { l: "Role", v: "Product Design · UI/UX · User Research · Concept Development · Pitch Presentation" },
            { l: "Team", v: "4 " },
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
            { title: "AI companion", description: "A conversational, voice-first companion that turns how you feel into a log — no forms, no friction.", image: shotAI },
            { title: "Symptoms tracking", description: "Hot flashes, sleep, activity and medication captured on one calm, shareable timeline.", image: shotTracker },
            { title: "Personalized fitness", description: "Training plans that adapt to today's energy, available time, and where you hurt.", image: shotFitness },
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

      {/* Screenshots */}

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
              { title: "Problem Discovery", description: "In collaboration with Bionorica, we learned that their natural menopause medication requires three months of continuous use before showing effects. However, many users discontinue treatment early due to lack of perceived progress." },
              { title: "User Research", description: "Identified that many women feel unheard and unsupported during menopause — both medically and emotionally.\n- Manual symptom logging is tedious and often inconsistent.\n- Existing apps lack emotional intelligence and personalization." },
              { title: "Ideation", description: "Designed MARIE, a conversational AI assistant that learns from user patterns and wearable data to provide personalized insights, reminders, and encouragement. MARIE’s tone was built to be empathetic, intuitive, and supportive — like a “smart best friend” that truly understands you." },
              { title: "UI / UX design", description: "- Calm, elegant color palette and clear typography for readability.\n- Intuitive symptom tracking and progress visualization.\n- Integration concepts for smartwatch and wearable data to minimize manual input." },
              { title: "Gamification & Motivation", description: "Built an interactive Figma prototype and validated the symptom check-in flow with returning interview participants." },
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
