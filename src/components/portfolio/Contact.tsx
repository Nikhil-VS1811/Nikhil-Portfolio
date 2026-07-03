import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="I'm currently open to internships, freelance projects and collaboration on AI-powered web apps."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <a
          href="mailto:nikhilvenkatesh1811@gmail.com"
          className="group surface surface-hover rounded-2xl p-8"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Email
          </div>
          <div className="text-lg md:text-2xl text-foreground font-medium group-hover:text-primary transition-colors break-all">
            nikhilvenkatesh1811@gmail.com
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            Reply within 24h — best way to reach me.
          </div>
        </a>
        <div className="surface rounded-2xl p-8 flex flex-col justify-between gap-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Elsewhere
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "GitHub", href: "https://github.com/Nikhil-VS1811" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-vs/" },
              { label: "LeetCode", href: "https://leetcode.com/u/Nikhilvs1811/" },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 h-9 inline-flex items-center rounded-full border border-border bg-background/40 text-[13px] text-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-28 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Nikhil VS. Crafted with care.</div>
        <div className="font-mono text-[11px] tracking-wider uppercase">Designed & built from scratch</div>
      </footer>
    </Section>
  );
}