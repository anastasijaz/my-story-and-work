import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import cover from "@/assets/proj-thesis.jpg";

export const Route = createFileRoute("/projects/thesis")({
  head: () => ({
    meta: [
      { title: "Bachelor thesis — PowerFactory to RSCAD conversion tool" },
      { name: "description", content: "An automated conversion tool bridging DIgSILENT PowerFactory grid models into RSCAD for real-time digital simulation." },
      { property: "og:title", content: "Bachelor thesis — PowerFactory ↔ RSCAD" },
      { property: "og:description", content: "Case study: bridging offline and real-time power-system simulation through automated model conversion." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <CaseStudyLayout
      eyebrow="Bachelor thesis · Energy systems"
      title={<>From <span className="text-gradient italic">PowerFactory</span> to <span className="text-gradient italic">RSCAD</span> — automating the bridge.</>}
      intro="My bachelor thesis: an automated conversion tool that translates DIgSILENT PowerFactory grid models into RSCAD draft files for real-time digital simulation on RTDS hardware."
      cover={cover}
      coverAlt="Power-systems thesis cover"
      stack={["Python", "PowerFactory API", "RSCAD draft format", "pandas", "NetworkX", "LaTeX"]}
      meta={[
        { l: "Programme", v: "B.Sc. Industrial Engineering" },
        { l: "Specialisation", v: "Energy systems" },
        { l: "Domain", v: "Real-time power simulation" },
        { l: "Output", v: "Tool + written thesis" },
      ]}
      problem={{
        eyebrow: "The problem",
        title: "Two simulators, one grid.",
        body: (
          <>
            <p>Power-system researchers typically build steady-state and dynamic models in DIgSILENT PowerFactory, but real-time hardware-in-the-loop studies require those same networks to live inside RSCAD on an RTDS simulator.</p>
            <p>Today, that bridge is rebuilt by hand for every project — element by element, parameter by parameter. The process is slow, error-prone, and a major bottleneck for any lab that wants to validate offline studies in real time.</p>
          </>
        ),
      }}
      approach={{
        eyebrow: "Approach",
        title: "Parse, map, generate.",
        body: (
          <>
            <p>I built a Python pipeline that talks to PowerFactory via its scripting API, extracts the network topology and component parameters, and represents them as a tool-agnostic intermediate model.</p>
            <p>From there, a generator emits a valid RSCAD draft file: buses, lines, transformers, machines and controls, with parameter conversions and sanity checks at every step.</p>
            <p>Validation compared load-flow and transient results between the two environments to quantify how faithfully the conversion preserves dynamic behaviour.</p>
          </>
        ),
      }}
      outcomes={[
        { k: "1", v: "Working tool", d: "End-to-end conversion pipeline" },
        { k: "Hours→min", v: "Setup time", d: "From manual to automated" },
        { k: "<1%", v: "Load-flow deviation", d: "On benchmark networks" },
        { k: "1", v: "Bachelor thesis", d: "Submitted & defended" },
      ]}
      reflections={{
        eyebrow: "Reflections",
        title: "What I'd extend.",
        body: (
          <>
            <p>The intermediate model turned out to be the most valuable artefact — it opens the door to converting into other simulators (PSS/E, EMTP-RV) with relatively little new code.</p>
            <p>Next steps would focus on richer control-system mapping and a small UI for engineers who don't want to touch the Python pipeline directly.</p>
          </>
        ),
      }}
    />
  ),
});
