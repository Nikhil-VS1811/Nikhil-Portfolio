import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Profiles } from "@/components/portfolio/Profiles";
import { Contact } from "@/components/portfolio/Contact";
import { Resume } from "@/components/portfolio/Resume";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Profiles />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
