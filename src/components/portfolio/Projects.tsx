import { Section } from "./Section";
import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, buttonHover, easeOut } from "./motion";
import {
  ChatPreview,
  CodeReviewPreview,
  FraudPreview,
  MapPreview,
} from "./ProjectPreviews";

type Project = {
  name: string;
  description: string;
  problem: string;
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
    problem:
      "Manual code review misses subtle security and maintainability issues, and doesn't scale as teams and repos grow.",
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
    problem:
      "Detecting suspicious transactions in real time requires pattern recognition humans can't reliably do at scale.",
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
    problem:
      "Community reports pile up as unstructured text and never surface where — or when — they actually matter.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI API", "Leaflet", "Docker"],
    github: "https://github.com/Nikhil-VS1811/FeedMap-AI",
    demo: "https://feed-map-ai.vercel.app/",
    Preview: MapPreview,
  },
  {
    name: "GeetAI",
    description:
      "AI-driven wellness companion that provides contextual Bhagavad Gita guidance based on user moods and concerns, combining modern AI with spiritual teachings.",
    problem:
      "Personal, contextual guidance is hard to reach in moments of stress without judgment or friction.",
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
      <motion.div
        className="flex flex-col gap-28 md:gap-40"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {projects.map((p, i) => {
          const Preview = p.Preview;
          const reverse = i % 2 === 1;
          const index = String(i + 1).padStart(2, "0");
          return (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="group relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Large product screenshot */}
              <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.5, ease: easeOut } }}
                  className="relative"
                >
                  {/* soft ambient glow only for featured */}
                  {p.featured && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-70 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
                      }}
                    />
                  )}
                  <div className="relative rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40 transition-[border-color,box-shadow] duration-500 group-hover:border-border">
                    {/* browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/70 bg-card/40">
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                      <span className="h-2 w-2 rounded-full bg-foreground/15" />
                      <div className="mx-auto text-[10.5px] font-mono text-muted-foreground/80 truncate max-w-[60%]">
                        {(p.demo ?? p.github).replace(/^https?:\/\//, "")}
                      </div>
                    </div>
                    {/* preview */}
                    <div className="relative aspect-[16/10] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--muted)_45%,transparent),transparent_70%)] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center p-6 md:p-10"
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                      >
                        <Preview />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Case study copy */}
              <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground/70">
                    {index} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border/80" />
                  {p.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-medium uppercase tracking-[0.18em]">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground leading-[1.05]">
                  {p.name}
                </h3>

                <div className="mt-8">
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70 mb-3">
                    Problem
                  </div>
                  <p className="text-[15px] text-foreground/85 leading-[1.7] max-w-[52ch] border-l border-primary/40 pl-4">
                    {p.problem}
                  </p>
                </div>

                <p className="mt-6 text-[15px] text-muted-foreground leading-[1.75] max-w-[58ch]">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="mt-8">
                  <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70 mb-3">
                    Tech stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-card/50 text-muted-foreground border border-border/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {p.demo && (
                    <motion.a
                      {...buttonHover}
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 h-11 pl-5 pr-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--primary)_55%,transparent)] hover:shadow-[0_12px_40px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-shadow"
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </motion.a>
                  )}
                  <motion.a
                    {...buttonHover}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border/80 bg-card/30 backdrop-blur-md text-sm font-medium text-foreground hover:border-border hover:bg-card/60 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
