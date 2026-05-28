import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-sportbuddy.jpg";

export const Route = createFileRoute("/projects/sportbuddy")({
  head: () => ({
    meta: [
      { title: "SportBuddy — Find training partners · Case study" },
      { name: "description", content: "A community app for finding training partners nearby for any sport." },
      { property: "og:title", content: "SportBuddy — Find training partners" },
      { property: "og:description", content: "Case study: a community app that gets people training together." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Case study · Community · Mobile"
      title={<><span className="text-gradient italic">SportBuddy</span> — never train alone again.</>}
      intro="A lightweight social app that helps people find training partners nearby — from climbing and bouldering to weekend football."
      cover={cover}
      coverAlt="SportBuddy — abstract cover"
      stack={["React Native", "TypeScript", "Expo", "Supabase", "Mapbox"]}
      meta={[
        { l: "Role", v: "Product Design · UI/UX · User Research · Concept Development · Pitch Presentation" },
        { l: "Team", v: "3 " },
        { l: "Timeline", v: "Hackathon weekend" },
        { l: "Status", v: "Working prototype" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Motivation is a group sport.",
        body: (
          <>
            <p>Most people who give up on a new sport don't fail at the sport — they fail at finding someone to do it with. Existing apps focus on logging workouts after the fact, not on getting people to the trailhead in the first place.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Map-first, not feed-first.",
        body: (
          <>
            <p>Instead of an endless feed, the home view is a map: pinned sessions happening today, near you, that you can join in one tap.</p>
            <p>Profiles are minimal — sport, level, vibe — to lower the barrier to organising the first meet-up.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "1", v: "Working prototype", d: "Map, sessions, chat" },
        { k: "8", v: "Sports onboarded", d: "From bouldering to padel" },
        { k: "20+", v: "Pilot users", d: "Local university crowd" },
        { k: "★", v: "Demo award", d: "Best community use case" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What I'd build next.",
        body: (
          <>
            <p>The map model worked, but ratings/safety features are non-negotiable for a public launch — that's the next milestone.</p>
            <p>I'd also pre-seed sessions with public events scraped from clubs so the map never feels empty in a new city.</p>
          </>
        ),
      }}
    />
  ),
});
