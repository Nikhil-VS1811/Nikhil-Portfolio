import type { ComponentType } from "react";
import { Section } from "./Section";

const OracleLogo = () => (
  <svg viewBox="0 0 128 40" className="h-5 w-auto" aria-hidden="true">
    <ellipse cx="64" cy="20" rx="46" ry="14" fill="none" stroke="#F80000" strokeWidth="6" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 272 92" className="h-5 w-auto" aria-hidden="true">
    <path fill="#4285F4" d="M115 47c0 12.7-9.9 22-22 22s-22-9.3-22-22 9.9-22 22-22 22 9.3 22 22zm-9.6 0c0-7.9-5.7-13.3-12.4-13.3S80.6 39.1 80.6 47s5.7 13.3 12.4 13.3 12.4-5.5 12.4-13.3z" />
    <path fill="#EA4335" d="M163 47c0 12.7-9.9 22-22 22s-22-9.3-22-22 9.9-22 22-22 22 9.3 22 22zm-9.6 0c0-7.9-5.7-13.3-12.4-13.3s-12.4 5.4-12.4 13.3 5.7 13.3 12.4 13.3 12.4-5.5 12.4-13.3z" />
    <path fill="#FBBC05" d="M209 26.3v39.5c0 16.3-9.6 22.9-20.9 22.9-10.7 0-17.1-7.1-19.5-13l8.4-3.5c1.5 3.6 5.2 7.8 11.1 7.8 7.3 0 11.8-4.5 11.8-13v-3.2h-.3c-2.2 2.7-6.3 5-11.6 5-11 0-21.1-9.6-21.1-22 0-12.5 10.1-22.2 21.1-22.2 5.2 0 9.4 2.3 11.6 4.9h.3v-3.2h9.1zm-8.4 20.8c0-7.8-5.2-13.5-11.8-13.5-6.7 0-12.4 5.7-12.4 13.5 0 7.7 5.6 13.3 12.4 13.3 6.6 0 11.8-5.5 11.8-13.3z" />
    <path fill="#34A853" d="M224 3v65h-9.4V3h9.4z" />
    <path fill="#EA4335" d="M260.8 54.5l7.4 4.9c-2.4 3.5-8.1 9.6-18 9.6-12.3 0-21.4-9.5-21.4-22 0-13.2 9.2-22 20.4-22 11.2 0 16.7 8.9 18.5 13.7l1 2.4-28.9 12c2.2 4.4 5.7 6.6 10.5 6.6s8.2-2.4 10.5-5.2zm-22.7-7.9l19.3-8c-1.1-2.7-4.3-4.6-8.1-4.6-4.9 0-11.7 4.3-11.2 12.6z" />
  </svg>
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
    items: [{ title: "Machine Learning Specialization", year: "2024" }],
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