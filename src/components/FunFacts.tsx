import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const facts = [
  { id: "f1", factKey: "fun.f1", labelKey: "fun.f1.label" },
  { id: "f2", factKey: "fun.f2", labelKey: "fun.f2.label" },
  { id: "f3", factKey: "fun.f3", labelKey: "fun.f3.label" },
];

export function FunFacts() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof facts)[number] | null>(null);

  return (
    <section id="funfacts" className="relative isolate min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#0b0713]" />


      <div className="pointer-events-none relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("fun.kicker")}
          </p>
          <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">{t("fun.title")}</h2>
        </div>

        <div className="pointer-events-auto mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-3">
            {facts.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(active?.id === f.id ? null : f)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur transition ${
                  active?.id === f.id
                    ? "border-primary bg-primary/20 text-white"
                    : "border-white/20 bg-white/5 text-white/70 hover:text-white"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          {active && (
            <div
              key={active.id}
              className="animate-fade-up max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-base leading-relaxed text-white md:text-lg">{t(active.factKey)}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
