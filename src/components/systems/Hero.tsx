export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="availability">
        <span aria-hidden="true">●</span> Available for 6-Month SDE Internships (Jan – Jun 2027)
      </p>
      <p className="eyebrow hero-label">BACKEND SYSTEMS · APPLIED ML · CLOUD INFRASTRUCTURE</p>
      <h1 id="hero-title">
        Software Engineer building <span>low-latency backend architectures,</span> event-driven DAG
        engines, and deterministic code analysis systems.
      </h1>
      <div className="hero-bottom">
        <p>
          I build high-throughput backend services, distributed workflows, and cloud
          infrastructure—with a focus on measured performance, explicit failure handling, and
          automated verification.
        </p>
        <a className="text-link" href="#work">
          Explore selected systems <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-metrics" aria-label="Selected recorded benchmarks">
        {[
          ["<3 ms", "p95 PostgreSQL CRUD", "CODE ANALYSIS"],
          ["220k+", "LOC/sec · SAST scanner", "IN-MEMORY WORKLOAD"],
          ["4.08 ms", "p50 REST inference", "TRANSACTION RISK"],
          ["135", "automated tests", "NODEBASE"],
        ].map(([value, label, context]) => (
          <div key={label}>
            <span className="metric-context">{context}</span>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="benchmark-note">
        Recorded project benchmarks · not live production telemetry · measurement scope below
      </p>
    </section>
  );
}
