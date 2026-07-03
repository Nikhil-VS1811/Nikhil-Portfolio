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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="surface surface-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1 w-1 rounded-full bg-primary" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {g.title}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {g.items.map((i) => (
                <li key={i} className="text-foreground text-[13px]">
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