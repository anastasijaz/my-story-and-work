import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-horeich.jpg";

export const Route = createFileRoute("/projects/horeich")({
  head: () => ({
    meta: [
      { title: "Horeich — Startup website rework · Case study" },
      { name: "description", content: "Sharper messaging, modernised UI and a faster site for the startup I worked at." },
      { property: "og:title", content: "Horeich — Startup website rework" },
      { property: "og:description", content: "Case study: rebuilding a corporate website to match the company's actual ambition." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Case study · Web · Startup"
      title={<><span className="text-gradient italic">Horeich</span> — a website that finally matches the team.</>}
      intro="A ground-up rebuild of the company website: clearer story, modern UI system, measurable performance gains."
      cover={cover}
      coverAlt="Horeich — abstract cover"
      stack={["Next.js", "TypeScript", "Tailwind", "Sanity CMS", "Vercel"]}
      meta={[
        { l: "Role", v: "Web lead — design + dev" },
        { l: "Team", v: "Solo with founder reviews" },
        { l: "Timeline", v: "~6 weeks part-time" },
        { l: "Status", v: "Shipped to production" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "An outdated face on a sharp company.",
        body: (
          <>
            <p>The existing site predated the product the team was actually selling. Visitors landed on stale copy, slow page loads and a layout that buried the real value proposition three scrolls down.</p>
            <p>Sales and recruiting were both bottlenecked by it — every conversation started with "ignore the website".</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Rewrite the story, then the code.",
        body: (
          <>
            <p>I started with positioning workshops, not Figma. Once the team agreed on a one-sentence promise, the new site fell out of it: hero, proof, product, team.</p>
            <p>Built on Next.js with a small CMS so non-engineers could ship updates without me. Performance budgets baked into the build pipeline.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "−68%", v: "Time to first byte", d: "Edge rendering, image opt." },
        { k: "+2.4×", v: "Inbound leads", d: "First quarter after launch" },
        { k: "100", v: "Lighthouse perf", d: "On every public page" },
        { k: "0", v: "Dev tickets/week", d: "CMS owns content updates" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What I learned.",
        body: (
          <>
            <p>The biggest unlock wasn't technical — it was forcing the team to commit to one promise. The build was the easy half.</p>
            <p>If I did it again I'd add analytics-driven A/B testing on the hero from week one rather than waiting for "post-launch".</p>
          </>
        ),
      }}
    />
  ),
});
