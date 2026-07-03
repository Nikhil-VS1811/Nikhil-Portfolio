import { Section } from "./Section";
import { Download } from "lucide-react";

const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, SQL" },
  { label: "Frontend", value: "React, TypeScript, Tailwind CSS" },
  { label: "Backend", value: "FastAPI, Flask, SQLAlchemy, REST APIs" },
  { label: "Databases", value: "PostgreSQL" },
  { label: "AI / ML", value: "OpenAI API, Gemini API, Scikit-learn" },
  { label: "Tools", value: "Docker, Git, GitHub, Vercel, Render" },
];

const projects = [
  {
    name: "AI Code Reviewer",
    detail:
      "Reviews source code for bugs, security issues and maintainability using OpenAI/Gemini. React + FastAPI + PostgreSQL with JWT auth and Docker.",
  },
  {
    name: "Fraud Detection System",
    detail:
      "ML platform that scores transactions and flags suspicious activity through an interactive dashboard. React + FastAPI + Scikit-learn + PostgreSQL.",
  },
  {
    name: "FeedMap AI",
    detail:
      "Community feedback and issue-mapping platform with auto-categorization and location-aware analytics. React + FastAPI + OpenAI + Leaflet.",
  },
  {
    name: "GeetAI",
    detail:
      "AI wellness companion offering contextual Bhagavad Gita guidance based on user moods. Flask + SQLAlchemy backend with JWT and OpenAI integration.",
  },
];

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Snapshot of my work."
      description="A condensed overview of my background, stack, and the projects I'm most proud of. Download the full PDF for sharing."
    >
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resume (PDF)
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Open in new tab →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="surface rounded-2xl p-7">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Summary
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Final-year Information Science student building AI-powered, full
            stack applications. Comfortable across FastAPI / Flask backends,
            React frontends, PostgreSQL and LLM integrations with OpenAI and
            Gemini. Focused on taking ideas from concept to deployment.
          </p>

          <div className="hairline my-7" />
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Education
          </h3>
          <div className="text-foreground text-sm font-medium">
            B.E. in Information Science and Engineering
          </div>
          <div className="text-muted-foreground text-sm mt-1">
            East West Institute of Technology, Bengaluru
            <span className="font-mono text-xs ml-2">2023 – 2027</span>
          </div>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            CGPA: 8.88 (up to 5th Semester). Coursework: Data Structures,
            DBMS, Operating Systems, Machine Learning, Web Engineering.
          </p>
        </div>

        <div className="surface rounded-2xl p-7">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Technical Skills
          </h3>
          <ul className="space-y-3">
            {skills.map((s) => (
              <li key={s.label} className="text-sm">
                <span className="text-foreground font-medium">{s.label}: </span>
                <span className="text-muted-foreground">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface rounded-2xl p-7 md:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Highlighted Projects
          </h3>
          <ul className="space-y-5">
            {projects.map((p) => (
              <li key={p.name}>
                <div className="text-foreground text-sm font-medium">
                  {p.name}
                </div>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {p.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}