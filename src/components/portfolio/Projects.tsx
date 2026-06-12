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
};

const projects: Project[] = [
  {
    name: "AI Code Reviewer",
    description:
      "AI-powered platform that reviews source code for bugs, security vulnerabilities, performance bottlenecks and maintainability issues. Generates detailed explanations and actionable improvement suggestions using LLMs.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "OpenAI API",
      "Gemini API",
      "JWT",
      "SQLAlchemy",
    ],
    github: "https://github.com/Nikhil-VS1811/AI-Code-Reviewer",
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
          return (
            <div
              key={p.name}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* UI preview */}
              <div className="relative h-56 bg-gradient-to-br from-muted/40 to-background border-b border-border overflow-hidden">
                <div className="absolute inset-0 p-5 flex items-center justify-center">
                  <Preview />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {p.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
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
