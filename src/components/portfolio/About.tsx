import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="AI engineering & full stack development."
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm Nikhil VS, a final-year Information Science student working at the
            intersection of Machine Learning, full stack development and Generative AI.
            I enjoy taking ideas from concept to deployment — building complete products
            with Python, FastAPI, React and PostgreSQL.
          </p>
          <p>
            Recent work includes an AI Code Review system and a Fraud Detection
            platform — focused on scalable backend architecture, applied ML and
            practical AI integration. I'm actively looking for AI/ML and Software
            Engineering roles where I can contribute, learn and ship real products.
          </p>
        </div>
        <div className="space-y-6 font-mono text-sm">
          <div>
            <div className="text-muted-foreground">Currently</div>
            <div className="text-foreground">B.E. ISE · Final year</div>
          </div>
          <div>
            <div className="text-muted-foreground">Based in</div>
            <div className="text-foreground">Bengaluru, India</div>
          </div>
          <div>
            <div className="text-muted-foreground">Focus</div>
            <div className="text-foreground">FastAPI · React · LLM APIs</div>
          </div>
        </div>
      </div>
    </Section>
  );
}