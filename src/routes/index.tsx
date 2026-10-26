import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/systems/Header";
import { Hero } from "@/components/systems/Hero";
import { Projects } from "@/components/systems/Projects";
import { OpenSource } from "@/components/systems/OpenSource";
import { Benchmarks } from "@/components/systems/Benchmarks";
import {
  Achievements,
  Contact,
  Education,
  Experience,
  Skills,
} from "@/components/systems/Background";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil V S — Software Engineer | Backend Systems" },
      {
        name: "description",
        content:
          "Software engineer in Bengaluru building low-latency backends, event-driven DAG engines, and deterministic code analysis systems. Available Jan–Jun 2027.",
      },
      { property: "og:title", content: "Nikhil V S — Software Engineer" },
      {
        property: "og:description",
        content: "Backend systems, measured performance, and engineering case studies.",
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Benchmarks />
        <Experience />
        <OpenSource />
        <Achievements />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
