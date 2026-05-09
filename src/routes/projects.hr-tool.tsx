import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-hr.jpg";

export const Route = createFileRoute("/projects/hr-tool")({
  head: () => ({
    meta: [
      { title: "HR Tool — Lightweight recruiting · Case study" },
      { name: "description", content: "A focused recruiting workspace to source, evaluate and shortlist candidates without the SaaS overhead." },
      { property: "og:title", content: "HR Tool — Lightweight recruiting workspace" },
      { property: "og:description", content: "Case study: an internal recruiting tool built for speed and clarity." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Case study · Internal Product"
      title={<><span className="text-gradient italic">HR Tool</span> — recruiting without the SaaS tax.</>}
      intro="An internal workspace that replaces a tangle of spreadsheets and inboxes with one focused pipeline for sourcing, evaluating and shortlisting candidates."
      cover={cover}
      coverAlt="HR Tool — abstract cover"
      stack={["React", "TypeScript", "Tailwind", "Supabase", "TanStack Query"]}
      meta={[
        { l: "Role", v: "Product & full-stack" },
        { l: "Team", v: "Solo with HR stakeholder" },
        { l: "Timeline", v: "Built iteratively" },
        { l: "Status", v: "Used internally" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Generic ATS, specific pain.",
        body: (
          <>
            <p>Off-the-shelf applicant tracking systems are priced for and built for enterprise hiring — overkill for small teams running a handful of roles at a time. The actual workflow ended up scattered across email threads, spreadsheets and Slack DMs.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "One pipeline, one screen.",
        body: (
          <>
            <p>I designed around one core view: a Kanban-style pipeline per role, with structured candidate cards and inline feedback from interviewers.</p>
            <p>Notifications, scoring rubrics and shortlists were added only after the manual workflow proved itself — no premature feature creep.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "−70%", v: "Time per shortlist", d: "Vs. spreadsheet workflow" },
        { k: "1", v: "Source of truth", d: "No more parallel sheets" },
        { k: "0€", v: "SaaS replaced", d: "Internal & free to extend" },
        { k: "3", v: "Roles run on it", d: "And growing" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What I learned.",
        body: (
          <>
            <p>Internal tools live or die by how fast you can iterate after every interview round — keeping the stack tiny was the most important decision.</p>
            <p>Next: structured interview kits and bias-aware scoring rubrics, co-designed with the HR lead.</p>
          </>
        ),
      }}
    />
  ),
});
