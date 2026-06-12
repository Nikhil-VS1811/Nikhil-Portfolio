import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Flask", "PostgreSQL", "SQLAlchemy", "REST APIs"],
  },
  {
    title: "AI & Tooling",
    items: ["OpenAI API", "Gemini API", "Docker", "Git", "GitHub", "Vercel", "Render"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-5">
              {g.title}
            </h3>
            <ul className="space-y-2.5">
              {g.items.map((i) => (
                <li key={i} className="text-foreground text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}