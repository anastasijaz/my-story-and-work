import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-melt.jpg";

export const Route = createFileRoute("/projects/melt")({
  head: () => ({
    meta: [
      { title: "Melt — Dating for sports enthusiasts · Case study" },
      { name: "description", content: "A dating app that matches people through the sports and activities they actually love." },
      { property: "og:title", content: "Melt — Dating for sports enthusiasts" },
      { property: "og:description", content: "Case study: a dating app built around shared movement." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Case study · Social"
      title={<><span className="text-gradient italic">Melt</span> — match through movement, not selfies.</>}
      intro="A dating platform where the first conversation starts on a climbing wall, a tennis court or a Saturday run — not in a swipe queue."
      cover={cover}
      coverAlt="Melt — abstract cover"
      stack={["React Native", "TypeScript", "Expo", "Supabase", "Figma"]}
      meta={[
        { l: "Role", v: "Product & front-end" },
        { l: "Team", v: "3 — design, dev, growth" },
        { l: "Timeline", v: "Hackathon weekend" },
        { l: "Status", v: "Pitched prototype" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Dating apps reward looks, not lifestyle.",
        body: (
          <>
            <p>Most dating apps optimise for the first impression of a profile photo. For people whose weeks revolve around training, that signal is almost useless — what matters is whether you'll show up at the same trail, court or pool.</p>
            <p>Melt flips the model: discovery is built around sports, schedules and skill level, with romance as the natural by-product of training together.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Activity-first matching.",
        body: (
          <>
            <p>We modelled users around the activities they do weekly — sport, level, location, time slots — instead of static profile attributes.</p>
            <p>Match suggestions surface people whose schedules overlap, with a one-tap "join my session" instead of an open-ended chat.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "1", v: "Working prototype", d: "Onboarding, discovery, chat" },
        { k: "30+", v: "Test users", d: "Local sport communities" },
        { k: "5", v: "Sports supported", d: "Climbing, tennis, running, padel, swim" },
        { k: "Top 10", v: "Hackathon finish", d: "Selected for jury demo" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What I'd do next.",
        body: (
          <>
            <p>The "session" primitive was the right bet — but it needs a richer calendar layer to plug into how people already plan training.</p>
            <p>Next iteration: integrate with Strava and local club APIs so a match doesn't just feel possible — it's already on the schedule.</p>
          </>
        ),
      }}
    />
  ),
});
