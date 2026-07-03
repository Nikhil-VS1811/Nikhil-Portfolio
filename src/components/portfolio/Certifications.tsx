import type { ComponentType } from "react";
import { Section } from "./Section";
import googleLogo from "@/assets/google-logo.png.asset.json";

const OracleLogo = () => (
  <svg viewBox="0 0 128 40" className="h-5 w-auto" aria-hidden="true">
    <ellipse cx="64" cy="20" rx="46" ry="14" fill="none" stroke="#F80000" strokeWidth="6" />
  </svg>
);

const GoogleLogo = () => (
  <img src={googleLogo.url} alt="Google" className="h-6 w-6 object-contain" />
);

const DeepLearningLogo = () => (
  <svg viewBox="0 0 40 40" className="h-6 w-auto" aria-hidden="true">
    <circle cx="20" cy="20" r="18" fill="none" stroke="#0FA0CE" strokeWidth="2.5" />
    <circle cx="12" cy="14" r="2" fill="#0FA0CE" />
    <circle cx="12" cy="26" r="2" fill="#0FA0CE" />
    <circle cx="28" cy="20" r="2" fill="#0FA0CE" />
    <path stroke="#0FA0CE" strokeWidth="1.5" d="M12 14l16 6M12 26l16-6" />
  </svg>
);

type Cert = {
  title: string;
  year: string;
  url?: string;
};

type Group = {
  provider: string;
  Logo: ComponentType;
  items: Cert[];
};

const groups: Group[] = [
  {
    provider: "Oracle",
    Logo: OracleLogo,
    items: [
      { title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", year: "2025" },
      { title: "Oracle Cloud Infrastructure 2025 Generative AI Professional", year: "2025" },
      { title: "Oracle Cloud Infrastructure 2025 Data Science Professional", year: "2025" },
    ],
  },
  {
    provider: "Google",
    Logo: GoogleLogo,
    items: [
      {
        title: "Crash Course on Python",
        year: "2025",
        url: "https://coursera.org/verify/29EATY8PNOCT",
      },
    ],
  },
  {
    provider: "DeepLearning.AI",
    Logo: DeepLearningLogo,
    items: [
      {
        title: "Supervised Machine Learning: Regression and Classification",
        year: "2026",
        url: "https://coursera.org/verify/3TCPGTEGOYQB",
      },
    ],
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications."
    >
      <div className="space-y-14">
        {groups.map((g) => (
          <div key={g.provider}>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 px-3">
                <g.Logo />
              </span>
              <h3 className="text-lg text-foreground font-medium">{g.provider}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {g.items.length} {g.items.length === 1 ? "certificate" : "certificates"}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {g.items.map((c) => (
                <div
                  key={c.title}
                  className="group surface surface-hover rounded-2xl p-6 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 px-3">
                      <g.Logo />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                  </div>
                  <h4 className="mt-5 text-foreground font-medium leading-snug">
                    {c.title}
                  </h4>
                  <div className="text-sm text-muted-foreground mt-2">{g.provider}</div>
                  <div className="mt-auto pt-6">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-primary transition-colors"
                      >
                        View Credential
                        <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}