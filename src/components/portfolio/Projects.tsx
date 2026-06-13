import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import {
  ChatPreview,
  CodeReviewPreview,
  FraudPreview,
  MapPreview,
} from "./ProjectPreviews";

type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  Preview: React.ComponentType;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "AI Code Reviewer",
    description:
      "A full-stack, production-ready AI code review platform that analyzes source code and GitHub repositories for security vulnerabilities, maintainability issues, code quality problems and risky coding patterns. Features JWT auth, repo-level analysis, repository health scoring, an analytics dashboard with review history, and PDF report export — all containerized with Docker.",
    stack: [
      "React",
      "FastAPI",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "JWT",
      "GitHub Actions",
      "Render",
      "Vercel",
      "AI",
      "Code Review",
      "Security Analysis",
    ],
    github: "https://github.com/Nikhil-VS1811/AI-Code-Reviewer",
    demo: "https://ai-code-reviewer-seven-brown.vercel.app/",
    Preview: CodeReviewPreview,
    featured: true,
  },
  {
    name: "Fraud Detection System",
    description:
      "Machine learning–based fraud detection platform that analyzes transaction patterns, assigns risk scores and flags suspicious activities through an interactive dashboard.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Python",
      "Scikit-learn",
      "SQLAlchemy",
      "Docker",
    ],
    github: "https://github.com/Nikhil-VS1811/fraud-detection-system",
    demo: "https://fraud-frontend-vxzh.onrender.com",
    Preview: FraudPreview,
  },
  {
    name: "FeedMap AI",
    description:
      "AI-powered community feedback and issue-mapping platform that collects reports, categorizes them automatically and visualizes trends through location-aware analytics.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI API", "Leaflet", "Docker"],
    github: "https://github.com/Nikhil-VS1811/FeedMap-AI",
    demo: "https://feed-map-ai.vercel.app/",
    Preview: MapPreview,
  },
  {
    name: "GeetAI",
    description:
      "AI-driven wellness companion that provides contextual Bhagavad Gita guidance based on user moods and concerns, combining modern AI with spiritual teachings.",
    stack: ["React", "Flask", "SQLAlchemy", "PostgreSQL", "OpenAI API", "JWT"],
    github: "https://github.com/Nikhil-VS1811/Geet-AI",
    demo: "https://geet-ai-9u4c.onrender.com/",
    Preview: ChatPreview,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects."
      description="End-to-end builds covering AI integration, RAG pipelines, full-stack architecture, and third-party API orchestration."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => {
          const Preview = p.Preview;
          const featured = p.featured;
          return (
            <div
              key={p.name}
              className={`group relative flex flex-col rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
                featured
                  ? "md:col-span-2 border-primary/40 shadow-xl shadow-primary/5 hover:border-primary/70 hover:shadow-primary/20"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {featured && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, hsl(var(--primary) / 0.10), transparent 55%)",
                    }}
                  />
                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 backdrop-blur">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
                      Flagship
                    </span>
                  </div>
                </>
              )}
              {/* UI preview */}
              <div
                className={`relative bg-gradient-to-br from-muted/40 to-background border-b border-border overflow-hidden ${
                  featured ? "h-64 md:h-80" : "h-56"
                }`}
              >
                <div className={`absolute inset-0 flex items-center justify-center ${featured ? "p-6 md:p-8" : "p-5"}`}>
                  <Preview />
                </div>
              </div>

              {/* Content */}
              <div className={`relative flex flex-col flex-1 ${featured ? "p-8" : "p-7"}`}>
                <h3
                  className={`font-medium text-foreground mb-4 ${
                    featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {p.name}
                </h3>

                <p
                  className={`text-muted-foreground leading-relaxed mb-6 flex-1 ${
                    featured ? "text-[15px] md:text-base max-w-3xl" : "text-sm"
                  }`}
                >
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-full ${
                        featured
                          ? "bg-primary/10 text-primary/90 border border-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
