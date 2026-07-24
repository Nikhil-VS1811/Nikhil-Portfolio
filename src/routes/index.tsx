import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Certifications } from "@/components/portfolio/Certifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil VS — AI-Focused Full Stack Developer" },
      { name: "description", content: "Portfolio of Nikhil VS, a full stack developer building practical AI-powered web applications with Flask, modern frontend tech, and intelligent workflows." },
      { property: "og:title", content: "Nikhil VS — AI-Focused Full Stack Developer" },
      { property: "og:description", content: "Projects, skills and coding profiles from a developer who ships end-to-end AI products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip antialiased">
      {/* Global ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% -10%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), radial-gradient(900px 550px at 100% 30%, color-mix(in oklab, var(--secondary) 10%, transparent), transparent 60%), radial-gradient(700px 500px at 0% 70%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 60%)",
          }}
        />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Profiles />
        <Resume />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
