import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "de";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.highlights": "Highlights",
    "nav.work": "Work",
    "nav.thesis": "Thesis",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    "hero.badge": "Available for freelance projects & product management jobs",
    "hero.title.l1": "Engineering systems",
    "hero.title.l2a": "that ",
    "hero.title.l2b": "make sense",
    "hero.title.l2c": " of energy,",
    "hero.title.l3": "people and products.",
    "hero.subtitle":
      "I'm an industrial engineering student specialising in energy systems with a bachelors in electrical engineering. Between coursework, I build products at hackathons, with startups and for incubator challenges — turning messy problems into shipped software.",
    "hero.download": "Download resume",
    "hero.seeWork": "See selected work →",

    "about.kicker": "About",
    "about.title": "A builder with an engineer's mindset.",
    "about.p1":
      "My academic home is electrical engineering — the discipline of optimising how systems, people and resources work together. My specialisation in energy systems lets me put that lens on the most consequential transition of our generation.",
    "about.p2":
      "Outside the lecture hall I ship products: dating apps, healthtech, insurance challenges, internal tools. I love taking a fuzzy brief from a hackathon kickoff and ending the weekend with something users can actually open. I am especially passionate about putting the user at the forefront and working on solutions they will love.",

    "highlights.kicker": "Resume highlights",
    "highlights.title": "Selected experiences.",
    "highlights.full": "Full resume ↓",
    "highlights.hackathons.v": "Hackathons",
    "highlights.hackathons.d": "Including Junction Helsinki",
    "highlights.slush.v": "Volunteer",
    "highlights.slush.d": "On the ground in Helsinki",
    "highlights.tech.v": "Incubator Talent",
    "highlights.tech.d": "Selected programme participant",
    "highlights.energy.v": "Specialisation",
    "highlights.energy.d": "Industrial engineering focus",

    "work.kicker": "Selected work",
    "work.title": "Six products, six different problems.",
    "work.subtitle":
      "From femtech to insurance, each project started with a real user need and a tight deadline.",
    "work.readCase": "Read case study",
    "work.empty": "No projects in this category yet.",
    "filter.All": "All",
    "filter.Mobile": "Mobile",
    "filter.Web": "Web",
    "filter.Social": "Social",
    "filter.Health": "Health",
    "filter.Internal": "Internal",

    "thesis.kicker": "Bachelor thesis",
    "thesis.title": "Where my engineering side lives.",
    "thesis.linkShort": "Read the case study →",
    "thesis.tag": "Energy systems · Real-time simulation",
    "thesis.heading": "PowerFactory → RSCAD conversion tool",
    "thesis.desc":
      "An automated pipeline that translates DIgSILENT PowerFactory grid models into RSCAD draft files for real-time digital simulation on RTDS hardware — turning hours of manual rebuilding into minutes.",
    "thesis.b1": "· Python tooling on top of the PowerFactory API",
    "thesis.b2": "· Tool-agnostic intermediate model",
    "thesis.b3": "· Validated against benchmark networks (<1% load-flow deviation)",
    "thesis.readFull": "Read the full case study",

    "aboutMe.kicker": "About me",
    "aboutMe.title": "A short story behind the work.",
    "aboutMe.p1":
      "I'm a designer and engineer-in-the-making. My academic path started with a B.Sc. in Electrical Engineering, specialising in energy systems — culminating in a bachelor thesis on automating the conversion of PowerFactory grid models into RSCAD for real-time simulation.",
    "aboutMe.p2":
      "Alongside the technical side, I've spent the last few years designing mobile and web products — from health and dating apps to internal tools and startup websites — focusing on clear user research, sharp problem framing and polished UI in Figma.",
    "aboutMe.p3":
      "I care about work that's both rigorous and human: built on solid engineering fundamentals, but shaped by listening closely to the people who'll actually use it.",
    "aboutMe.picPlaceholder": "Add a picture of you",
    "lang.German": "German",
    "lang.English": "English",


    "contact.title": "Let's build something useful together.",
    "contact.subtitle":
      "I'm currently open to internships, thesis projects and freelance collaborations in energy, sustainability and product.",

    "footer.copy": "© {year} — Portfolio. Built with care.",
    "footer.tagline": "Electrical Engineering · Energy Systems",
  },
  de: {
    "nav.about": "Über mich",
    "nav.highlights": "Highlights",
    "nav.work": "Projekte",
    "nav.thesis": "Abschlussarbeit",
    "nav.contact": "Kontakt",
    "nav.resume": "Lebenslauf",

    "hero.badge": "Verfügbar für Freelance-Projekte & Product-Management-Jobs",
    "hero.title.l1": "Systeme entwickeln,",
    "hero.title.l2a": "die ",
    "hero.title.l2b": "Energie, Menschen",
    "hero.title.l2c": " und",
    "hero.title.l3": "Produkte verbinden.",
    "hero.subtitle":
      "Ich studiere Wirtschaftsingenieurwesen mit Schwerpunkt Energiesysteme und habe einen Bachelor in Elektrotechnik. Zwischen dem Studium baue ich Produkte bei Hackathons, mit Startups und für Inkubator-Challenges — von chaotischen Problemen zu fertiger Software.",
    "hero.download": "Lebenslauf herunterladen",
    "hero.seeWork": "Ausgewählte Projekte →",

    "about.kicker": "Über mich",
    "about.title": "Eine Macherin mit Ingenieur-Mindset.",
    "about.p1":
      "Mein akademisches Zuhause ist die Elektrotechnik — die Disziplin, Systeme, Menschen und Ressourcen optimal zusammenwirken zu lassen. Meine Spezialisierung in Energiesystemen erlaubt mir, diesen Blick auf die wichtigste Transformation unserer Generation zu richten.",
    "about.p2":
      "Außerhalb des Hörsaals baue ich Produkte: Dating-Apps, Healthtech, Versicherungs-Challenges, interne Tools. Ich liebe es, ein unscharfes Briefing vom Hackathon-Start am Wochenende in etwas zu verwandeln, das Nutzer:innen tatsächlich öffnen können. Besonders wichtig ist mir, die Nutzer:innen in den Mittelpunkt zu stellen.",

    "highlights.kicker": "Lebenslauf-Highlights",
    "highlights.title": "Ausgewählte Erfahrungen.",
    "highlights.full": "Vollständiger Lebenslauf ↓",
    "highlights.hackathons.v": "Hackathons",
    "highlights.hackathons.d": "Inklusive Junction Helsinki",
    "highlights.slush.v": "Volunteer",
    "highlights.slush.d": "Vor Ort in Helsinki",
    "highlights.tech.v": "Inkubator-Talent",
    "highlights.tech.d": "Ausgewählte Programmteilnehmerin",
    "highlights.energy.v": "Spezialisierung",
    "highlights.energy.d": "Schwerpunkt Wirtschaftsingenieurwesen",

    "work.kicker": "Ausgewählte Arbeiten",
    "work.title": "Sechs Produkte, sechs unterschiedliche Probleme.",
    "work.subtitle":
      "Von Femtech bis Versicherung — jedes Projekt begann mit einem echten Nutzerbedürfnis und einer engen Deadline.",
    "work.readCase": "Case Study lesen",
    "work.empty": "Noch keine Projekte in dieser Kategorie.",
    "filter.All": "Alle",
    "filter.Mobile": "Mobile",
    "filter.Web": "Web",
    "filter.Social": "Social",
    "filter.Health": "Health",
    "filter.Internal": "Intern",

    "thesis.kicker": "Bachelorarbeit",
    "thesis.title": "Wo meine Ingenieurseite zuhause ist.",
    "thesis.linkShort": "Case Study lesen →",
    "thesis.tag": "Energiesysteme · Echtzeitsimulation",
    "thesis.heading": "PowerFactory → RSCAD Konvertierungstool",
    "thesis.desc":
      "Eine automatisierte Pipeline, die DIgSILENT PowerFactory Netzmodelle in RSCAD-Drafts für Echtzeitsimulation auf RTDS-Hardware übersetzt — aus Stunden manuellen Nachbauens werden Minuten.",
    "thesis.b1": "· Python-Tooling auf Basis der PowerFactory API",
    "thesis.b2": "· Tool-unabhängiges Zwischenmodell",
    "thesis.b3": "· Validiert an Benchmark-Netzen (<1% Lastflussabweichung)",
    "thesis.readFull": "Vollständige Case Study lesen",

    "aboutMe.kicker": "Über mich",
    "aboutMe.title": "Eine kurze Geschichte hinter der Arbeit.",
    "aboutMe.p1":
      "Ich bin Designerin und angehende Ingenieurin. Mein akademischer Weg begann mit einem B.Sc. in Elektrotechnik mit Schwerpunkt Energiesysteme — und gipfelte in einer Bachelorarbeit zur automatisierten Konvertierung von PowerFactory-Netzmodellen nach RSCAD für Echtzeitsimulation.",
    "aboutMe.p2":
      "Parallel dazu habe ich in den letzten Jahren mobile und Web-Produkte gestaltet — von Health- und Dating-Apps bis zu internen Tools und Startup-Websites — mit Fokus auf klarer User Research, scharfer Problemdefinition und polierter UI in Figma.",
    "aboutMe.p3":
      "Mir liegt Arbeit am Herzen, die zugleich fundiert und menschlich ist: gebaut auf solidem Engineering, aber geformt durch echtes Zuhören.",
    "aboutMe.picPlaceholder": "Bild hinzufügen",
    "lang.German": "Deutsch",
    "lang.English": "Englisch",
    "lang.Serbian": "Serbisch",

    "contact.title": "Lass uns gemeinsam etwas Nützliches bauen.",
    "contact.subtitle":
      "Ich bin offen für Praktika, Abschlussarbeiten und Freelance-Kooperationen in Energie, Nachhaltigkeit und Produkt.",

    "footer.copy": "© {year} — Portfolio. Mit Sorgfalt gebaut.",
    "footer.tagline": "Elektrotechnik · Energiesysteme",
  },
  sr: {
    "nav.about": "O meni",
    "nav.highlights": "Istaknuto",
    "nav.work": "Projekti",
    "nav.thesis": "Diplomski",
    "nav.contact": "Kontakt",
    "nav.resume": "Biografija",

    "hero.badge": "Dostupna za frilens projekte i poslove u product managementu",
    "hero.title.l1": "Sistemi koji",
    "hero.title.l2a": "daju ",
    "hero.title.l2b": "smisao",
    "hero.title.l2c": " energiji,",
    "hero.title.l3": "ljudima i proizvodima.",
    "hero.subtitle":
      "Studentkinja sam industrijskog inženjerstva sa fokusom na energetske sisteme i diplomom iz elektrotehnike. Pored fakulteta, pravim proizvode na hakatonima, sa startapima i u okviru inkubatorskih izazova — pretvaram haotične probleme u gotov softver.",
    "hero.download": "Preuzmi biografiju",
    "hero.seeWork": "Pogledaj projekte →",

    "about.kicker": "O meni",
    "about.title": "Graditeljka sa inženjerskim načinom razmišljanja.",
    "about.p1":
      "Moj akademski dom je elektrotehnika — disciplina koja optimizuje saradnju sistema, ljudi i resursa. Specijalizacija u energetskim sistemima mi omogućava da taj pogled usmerim na najvažniju tranziciju naše generacije.",
    "about.p2":
      "Van predavaonice pravim proizvode: aplikacije za upoznavanje, healthtech, osiguranje, interne alate. Volim da od nejasnog brifa na početku hakatona za vikend napravim nešto što korisnici stvarno mogu da otvore. Posebno mi je važno da korisnik bude u centru.",

    "highlights.kicker": "Iz biografije",
    "highlights.title": "Odabrana iskustva.",
    "highlights.full": "Kompletna biografija ↓",
    "highlights.hackathons.v": "Hakatona",
    "highlights.hackathons.d": "Uključujući Junction Helsinki",
    "highlights.slush.v": "Volonter",
    "highlights.slush.d": "Na terenu u Helsinkiju",
    "highlights.tech.v": "Talenat inkubatora",
    "highlights.tech.d": "Učesnica selektovanog programa",
    "highlights.energy.v": "Specijalizacija",
    "highlights.energy.d": "Fokus industrijskog inženjerstva",

    "work.kicker": "Odabrani radovi",
    "work.title": "Šest proizvoda, šest različitih problema.",
    "work.subtitle":
      "Od femtech-a do osiguranja, svaki projekat je počeo od stvarne potrebe korisnika i kratkog roka.",
    "work.readCase": "Pročitaj studiju slučaja",
    "work.empty": "Još nema projekata u ovoj kategoriji.",
    "filter.All": "Sve",
    "filter.Mobile": "Mobilno",
    "filter.Web": "Web",
    "filter.Social": "Društveno",
    "filter.Health": "Zdravlje",
    "filter.Internal": "Interno",

    "thesis.kicker": "Diplomski rad",
    "thesis.title": "Gde živi moja inženjerska strana.",
    "thesis.linkShort": "Pročitaj studiju →",
    "thesis.tag": "Energetski sistemi · Simulacija u realnom vremenu",
    "thesis.heading": "PowerFactory → RSCAD alat za konverziju",
    "thesis.desc":
      "Automatizovana pipeline koja prevodi DIgSILENT PowerFactory modele mreže u RSCAD draft fajlove za simulaciju u realnom vremenu na RTDS hardveru — sati ručnog rada postaju minuti.",
    "thesis.b1": "· Python alat povrh PowerFactory API-ja",
    "thesis.b2": "· Međumodel nezavisan od alata",
    "thesis.b3": "· Validacija na referentnim mrežama (<1% odstupanja u tokovima snaga)",
    "thesis.readFull": "Pročitaj celu studiju slučaja",

    "aboutMe.kicker": "O meni",
    "aboutMe.title": "Kratka priča iza rada.",
    "aboutMe.p1":
      "Dizajnerka sam i buduća inženjerka. Moj akademski put je počeo sa B.Sc. iz elektrotehnike, sa specijalizacijom u energetskim sistemima — i kulminirao diplomskim radom o automatizovanoj konverziji PowerFactory modela u RSCAD za simulaciju u realnom vremenu.",
    "aboutMe.p2":
      "Paralelno, poslednjih godina dizajniram mobilne i web proizvode — od zdravstvenih i dating aplikacija do internih alata i sajtova za startape — sa fokusom na jasno korisničko istraživanje, oštro definisanje problema i ispoliran UI u Figmi.",
    "aboutMe.p3":
      "Stalo mi je do rada koji je istovremeno strog i ljudski: zasnovan na čvrstim inženjerskim osnovama, ali oblikovan pažljivim slušanjem onih koji će ga koristiti.",
    "aboutMe.picPlaceholder": "Dodaj svoju sliku",
    "lang.German": "Nemački",
    "lang.English": "Engleski",
    "lang.Serbian": "Srpski",

    "contact.title": "Hajde da zajedno napravimo nešto korisno.",
    "contact.subtitle":
      "Trenutno sam otvorena za prakse, diplomske projekte i frilens saradnje u energetici, održivosti i proizvodu.",

    "footer.copy": "© {year} — Portfolio. Napravljeno s pažnjom.",
    "footer.tagline": "Elektrotehnika · Energetski sistemi",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && (stored === "en" || stored === "de" || stored === "sr")) {
        setLangState(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: string, vars?: Record<string, string | number>) => {
    let val = translations[lang][key] ?? translations.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        val = val.replace(`{${k}}`, String(v));
      }
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const options: { code: Lang; label: string }[] = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "sr", label: "SR" },
  ];
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs font-semibold backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
