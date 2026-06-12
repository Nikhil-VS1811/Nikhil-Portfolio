import { Section } from "./Section";

const profiles = [
  {
    platform: "GitHub",
    handle: "@Nikhil-VS1811",
    stat: "Projects & open-source work",
    href: "https://github.com/Nikhil-VS1811",
  },
  {
    platform: "LinkedIn",
    handle: "in/nikhil-vs",
    stat: "Professional profile",
    href: "https://www.linkedin.com/in/nikhil-vs/",
  },
  {
    platform: "LeetCode",
    handle: "@Nikhilvs1811",
    stat: "DSA practice",
    href: "https://leetcode.com/u/Nikhilvs1811/",
  },
];

export function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Around the web"
      title="Coding profiles."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {profiles.map((p) => (
          <a
            key={p.platform}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-card hover:bg-accent transition-colors"
          >
            <div>
              <div className="text-foreground font-medium">{p.platform}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{p.handle}</div>
              <div className="text-sm text-muted-foreground mt-3">{p.stat}</div>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              ↗
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}