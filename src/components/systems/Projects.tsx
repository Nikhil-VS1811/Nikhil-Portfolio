import { projects } from "@/data/portfolio";
import { ExternalLink, SectionHeading } from "./Shared";
function Architecture() {
  return (
    <figure className="architecture">
      <figcaption className="eyebrow">NODEBASE / EXECUTION PATH</figcaption>
      <ol className="flow">
        {[
          ["01", "Webhook", "Forms / HMAC Stripe"],
          ["02", "Inngest", "Durable DAG steps"],
          ["03", "NodeExecutor", "Typed integrations"],
          ["04", "PostgreSQL", "ACID persistence"],
        ].map(([n, t, d]) => (
          <li key={n}>
            <span className="mono">{n}</span>
            <strong>{t}</strong>
            <small>{d}</small>
          </li>
        ))}
      </ol>
      <div className="flow-notes">
        <span>↳ SDK retries: 2s / 4s</span>
        <span>↳ Inngest Realtime → user-scoped UI</span>
      </div>
      <p className="diagram-caption">
        Conceptual component flow; external node integrations execute inside durable steps.
      </p>
    </figure>
  );
}
export function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading number="01" label="SELECTED SYSTEMS" title="Built. Measured. Tested.">
        Three systems spanning workflow orchestration, deterministic analysis, and low-latency
        inference.
      </SectionHeading>
      <div className="project-list">
        {projects.map((p) => (
          <article className="project" id={p.id} key={p.id}>
            <div className="project-index mono">/{p.number}</div>
            <div className="project-body">
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-description">{p.description}</p>
              <ul className="stack" aria-label="Technology stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-metrics">
                {p.metrics.map(([v, l]) => (
                  <div key={l}>
                    <strong>{v}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              {p.id === "nodebase" && <Architecture />}
              <details className="case-study">
                <summary>
                  Read engineering case study <span aria-hidden="true">+</span>
                </summary>
                <div className="decision-grid">
                  {p.decisions.map(([t, d]) => (
                    <div key={t}>
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  ))}
                </div>
                <p className="source-note">
                  Measurement source: supplied resume. Hardware, concurrency, run duration, and raw
                  traces are not included; results are scoped to the reported workloads.
                </p>
              </details>
              <div className="project-links">
                <ExternalLink href={`https://github.com/Nikhil-VS1811/${p.repo}`}>
                  Source code
                </ExternalLink>
                <ExternalLink href={p.demo}>Live demo</ExternalLink>
                <a href="#benchmarks">
                  Inspect benchmarks <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
