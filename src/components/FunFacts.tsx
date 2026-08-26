import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Orbit = {
  id: string;
  factKey: string;
  labelKey: string;
  size: number;
  radius: number;
  duration: number;
  delay: number;
  tilt: number;
  color: string;
};

const orbits: Orbit[] = [
  {
    id: "f1",
    factKey: "fun.f1",
    labelKey: "fun.f1.label",
    size: 52,
    radius: 130,
    duration: 18,
    delay: 0,
    tilt: 68,
    color: "var(--brand-orange)",
  },
  {
    id: "f2",
    factKey: "fun.f2",
    labelKey: "fun.f2.label",
    size: 46,
    radius: 175,
    duration: 26,
    delay: -6,
    tilt: 100,
    color: "var(--brand-pink)",
  },
  {
    id: "f3",
    factKey: "fun.f3",
    labelKey: "fun.f3.label",
    size: 40,
    radius: 105,
    duration: 14,
    delay: -9,
    tilt: 40,
    color: "var(--brand-peach)",
  },
];

export function FunFacts() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Orbit | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section id="funfacts" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {t("fun.kicker")}
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">{t("fun.title")}</h2>
        
      </div>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        {/* 3D orbit system */}
        <div
          className="relative mx-auto flex h-[380px] w-full max-w-[440px] items-center justify-center"
          style={{ perspective: "900px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* soft glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-warm opacity-25 blur-3xl" />

          {/* core ball */}
          <div
            className="relative h-28 w-28 rounded-full bg-gradient-warm shadow-glow"
            style={{
              backgroundImage:
                "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.75), transparent 55%), linear-gradient(135deg, var(--brand-orange), var(--brand-pink))",
            }}
            aria-hidden
          />

          {/* orbits */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ transformStyle: "preserve-3d", transform: "rotateX(64deg)" }}
          >
            {orbits.map((o) => (
              <div
                key={o.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateZ(${o.tilt}deg)`,
                }}
              >
                {/* ring */}
                <div
                  className="absolute rounded-full border border-border/60"
                  style={{ width: o.radius * 2, height: o.radius * 2 }}
                />
                {/* revolving arm */}
                <div
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    animation: `fun-orbit ${o.duration}s linear infinite`,
                    animationDelay: `${o.delay}s`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(o)}
                    aria-label={t(o.labelKey)}
                    className="pointer-events-auto absolute left-1/2 top-1/2 rounded-full shadow-card outline-none transition-transform duration-200 hover:scale-125 focus-visible:ring-2 focus-visible:ring-primary"
                    style={{
                      width: o.size,
                      height: o.size,
                      marginLeft: -o.size / 2,
                      marginTop: -o.size / 2,
                      transform: `translateX(${o.radius}px) rotateZ(${-o.tilt}deg) rotateX(-64deg)`,
                      backgroundImage: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.7), transparent 60%), linear-gradient(160deg, ${o.color}, var(--brand-pink))`,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* fact panel */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          {active && (
            <div key={active.id} className="animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t(active.labelKey)}
              </span>
              <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
                {t(active.factKey)}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-6 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
              >
                {t("fun.close")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
