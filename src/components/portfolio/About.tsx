import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="AI engineering & full stack development."
    >
      <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
        <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm Nikhil VS, a final-year Information Science student working at the
            intersection of Machine Learning, full stack development and Generative AI.
            I enjoy taking ideas from concept to deployment — building complete products
            with Python, FastAPI, React and PostgreSQL.
          </p>
          <p>
            Recent work includes NodeBase, an AI workflow automation platform; an AI
            Code Review system; and a Fraud Detection platform — focused on clean
            backend architecture, applied ML and practical AI integration. I'm actively
            looking for AI/ML and Software Engineering roles where I can contribute,
            learn and ship real products.
          </p>
        </div>
        <div className="space-y-6">
          <div className="surface rounded-2xl p-6 space-y-5 font-mono text-sm h-fit">
            {[
              { k: "Currently", v: "B.E. ISE · Final year" },
              { k: "Based in", v: "Bengaluru, India" },
              { k: "Focus", v: "FastAPI · React · LLM APIs" },
            ].map((r, i, arr) => (
              <div key={r.k} className={i !== arr.length - 1 ? "pb-5 border-b border-border" : ""}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {r.k}
                </div>
                <div className="mt-2 text-foreground">{r.v}</div>
              </div>
            ))}
          </div>

          <div className="surface rounded-2xl p-6 space-y-4 h-fit">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Education
            </div>
            <div>
              <div className="text-foreground font-medium">B.E. in Information Science and Engineering</div>
              <div className="mt-1 text-muted-foreground text-sm">East West Institute of Technology, Bengaluru</div>
              <div className="mt-1 text-muted-foreground text-sm font-mono">2023 – 2027</div>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-medium">CGPA: 8.88</span> (up to 5th Semester)
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-foreground font-medium">Coursework:</span> Data Structures, DBMS, Operating Systems, Machine Learning, Web Engineering.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}