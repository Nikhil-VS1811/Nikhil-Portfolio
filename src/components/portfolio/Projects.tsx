import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import {
  CodeReviewPreview,
  FraudPreview,
  WorkflowPreview,
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
    name: "Node-Based Workflow Builder",
    description:
      "An AI-powered visual workflow automation platform inspired by n8n that enables users to build complex automations using a drag-and-drop node editor. Users can connect AI models, APIs, databases, webhooks, and custom logic into reusable workflows. Features include authentication, workflow execution engine, scheduling, execution history, real-time logs, reusable templates, versioning, and visual debugging.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "WebSockets",
      "OpenAI API",
      "Gemini API",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Nikhil-VS1811/node-workflow-builder",
    demo: "https://node-workflow-builder.vercel.app/",
    Preview: WorkflowPreview,
    featured: true,
  },
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
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects."
      description="End-to-end builds covering AI integration, RAG pipelines, full-stack architecture, and third-party API orchestration."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => {
          const Preview = p.Preview;
          const featured = p.featured;
          return (
            <div
              key={p.name}
              className={`group relative flex flex-col rounded-2xl overflow-hidden surface surface-hover transition-all duration-500 hover:-translate-y-0.5 ${
                featured
                  ? "md:col-span-2 border-primary/25"
                  : ""
              }`}
            >
              {featured && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 60% at 0% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%), radial-gradient(ellipse 50% 50% at 100% 100%, color-mix(in oklab, var(--secondary) 12%, transparent), transparent 60%)",
                    }}
                  />
                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/70 border border-border backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground/80">
                      Flagship
                    </span>
                  </div>
                </>
              )}
              {/* UI preview */}
              <div
                className={`relative border-b border-border overflow-hidden bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--muted)_60%,transparent),transparent_70%)] ${
                  featured ? "h-64 md:h-80" : "h-56"
                }`}
              >
                <div className={`absolute inset-0 flex items-center justify-center ${featured ? "p-6 md:p-8" : "p-5"}`}>
                  <Preview />
                </div>
              </div>

              {/* Content */}
              <div className={`relative flex flex-col flex-1 ${featured ? "p-8" : "p-6 md:p-7"}`}>
                <h3
                  className={`font-medium text-foreground mb-4 tracking-tight ${
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
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-background/50 text-muted-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-border">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border text-xs font-medium text-foreground hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors"
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
