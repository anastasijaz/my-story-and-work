import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-nuernberger.jpg";

export const Route = createFileRoute("/projects/legacy")({
  head: () => ({
    meta: [
      { title: "Legacy — End-of-life planning · Case study" },
      { name: "description", content: "Built for the Nürnberger Versicherung challenge at Zollhof — making end-of-life planning approachable." },
      { property: "og:title", content: "Legacy — End-of-life planning" },
      { property: "og:description", content: "Case study: an InsurTech app for dignified end-of-life planning." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Case study · InsurTech · Zollhof Challenge"
      title={<><span className="text-gradient italic">Legacy</span> — planning the end, gently.</>}
      intro="An app that turns end-of-life planning from a one-off, intimidating task into a guided, dignified conversation between generations."
      cover={cover}
      coverAlt="Legacy — abstract cover"
      stack={["React", "TypeScript", "Tailwind", "Supabase", "Figma"]}
      meta={[
        { l: "Role", v: "Product & UX" },
        { l: "Team", v: "5 — challenge sprint" },
        { l: "Timeline", v: "Zollhof challenge week" },
        { l: "Status", v: "Pitched to Nürnberger" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Nobody opens the folder.",
        body: (
          <>
            <p>End-of-life planning sits at the intersection of legal, financial and emotional friction. Most people start it once, get overwhelmed, and never come back — leaving families to untangle decisions in the worst possible moment.</p>
            <p>Nürnberger Versicherung asked us to make this approachable without trivialising it.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Small steps, soft tone.",
        body: (
          <>
            <p>We reframed the product as a series of 5-minute conversations rather than a 200-question form. Each step produces a usable artefact — a will draft, a contact list, a wish.</p>
            <p>Tone of voice was as much a deliverable as the UI: warm, plain-language, never clinical.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "1", v: "Working prototype", d: "Onboarding + 3 modules" },
        { k: "5min", v: "Avg. session length", d: "Designed for low pressure" },
        { k: "★", v: "Jury favourite", d: "Selected for follow-up talks" },
        { k: "1", v: "Insurer partner", d: "Nürnberger Versicherung" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What surprised us.",
        body: (
          <>
            <p>Users didn't want a product that pretends death isn't happening — they wanted one that treats them as adults. The biggest design wins came from removing softening, not adding it.</p>
            <p>Next: integration with notarial services so the artefacts produced are legally usable, not just emotionally useful.</p>
          </>
        ),
      }}
    />
  ),
});
