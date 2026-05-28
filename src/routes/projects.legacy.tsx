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
        { l: "Team", v: "2 " },
        { l: "Timeline", v: "Zollhof Talent Programm (3 Months)" },
        { l: "Status", v: "Pitched to Nürnberger" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Nobody opens the folder.",
        body: (
          <>
            <p>Developed a digital concept for an app that helps users organize end-of-life plans — from essential documents to funeral wishes — so their families can easily access everything when needed.</p>
            <p>Our corprate partner at ZoHo asked us to make this approachable without trivialising it.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Small steps, soft tone.",
        body: (
          <>
            <p>We reframed the product as a series of short conversations rather than a 200-question form. Each step produces a usable artefact — a will draft, a contact list, a wish.</p>
            <p>Tone of voice was as much a deliverable as the UI: warm, plain-language, never clinical.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "1", v: "Figma prototype", d: "Onboarding + 3 main features" },
        { k: "5min", v: "Avg. session length", d: "Designed for low pressure" },
        { k: "★", v: "Currently in development", d: "Selected for follow-up talks" },
        { k: "1", v: "Insurence partner", d: "Nürnberger Versicherung" },
      ]}
      features={[
        { title: "Checkliste", description: "A guided step-by-step checklist that breaks end-of-life planning into small, manageable tasks.", video: "/videos/checkliste.mp4" },
        { title: "Datei hochladen", description: "Securely upload and store important documents — wills, insurance papers, contracts — in one place.", video: "/videos/datei-hochladen.mp4" },
        { title: "Digitaler Nachlass", description: "Manage the digital estate: accounts, subscriptions and online presences that should be handled later.", video: "/videos/digitaler-nachlass.mp4" },
        { title: "Geteilt mit", description: "Decide exactly who has access to what — share specific items with trusted family members or advisors.", video: "/videos/geteilt-mit.mp4" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What surprised us.",
        body: (
          <>
            <p>Users didn't want a product that pretends death isn't happening — they want a solution that assists them. </p>
            <p>Impact: 
              <br />· Offered an emotionally resonant approach to promoting death insurance through empathy-driven design
              <br />· Simplified complex, emotionally heavy tasks for older users
              <br />· Received positive feedback from our corporate partner for clarity and user focus</p>
          </>
        ),
      }}
    />
  ),
});
