import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="I'm currently open to internships, freelance projects and collaboration on AI-powered web apps."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href="mailto:nikhilvenkatesh1811@gmail.com"
          className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
        >
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Email
          </div>
          <div className="text-xl md:text-2xl text-foreground font-medium group-hover:text-primary transition-colors break-all">
            nikhilvenkatesh1811@gmail.com
          </div>
        </a>
        <div className="p-8 rounded-2xl border border-border bg-card flex flex-col justify-between">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Elsewhere
          </div>
          <div className="flex flex-wrap gap-3">
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
                className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Nikhil VS. Crafted with care.</div>
        <div className="font-mono text-xs">Designed & built from scratch</div>
      </footer>
    </Section>
  );
}