import { profiles } from "@/data/portfolio";
import { ExternalLink, ResumeLink } from "./Shared";
export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="identity" href="#">
          <span className="monogram" aria-hidden="true">
            NV<span>_</span>
          </span>
          <span>
            Nikhil V S<small>Bengaluru, Karnataka</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#benchmarks">Benchmarks</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <ResumeLink className="header-resume" />
      </header>
      <div className="profile-strip">
        <span className="mono">SOFTWARE ENGINEER / PORTFOLIO 2026</span>
        <div>
          {profiles.map((p) => (
            <ExternalLink key={p.label} href={p.href}>
              {p.label}
            </ExternalLink>
          ))}
        </div>
      </div>
      <nav className="section-shortcuts" aria-label="Background sections">
        <a href="#open-source">
          Open source <span aria-hidden="true">↓</span>
        </a>
        <a href="#achievements">
          Achievements <span aria-hidden="true">↓</span>
        </a>
        <a href="#education">
          Education <span aria-hidden="true">↓</span>
        </a>
      </nav>
    </>
  );
}
