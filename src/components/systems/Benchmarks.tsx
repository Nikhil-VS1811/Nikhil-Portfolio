import { useId, useState } from "react";
import { SectionHeading } from "./Shared";
const workloads = [
  {
    name: "ML inference",
    scope: "Single-transaction REST inference · 30 features",
    values: [4.08, 5.32, null],
    bound: false,
    throughput: "≈228 requests / sec",
    note: "XGBoost / FastAPI · 15 unittest checks. Latency includes the reported REST serving path.",
  },
  {
    name: "PostgreSQL CRUD",
    scope: "Code analysis · PostgreSQL create/read/delete routes",
    values: [null, 3, null],
    bound: true,
    throughput: "Throughput not reported",
    note: "The p95 figure is a strict upper bound, not a measured value of exactly 3ms.",
  },
  {
    name: "JWT authentication",
    scope: "Code analysis · JWT authentication",
    values: [null, 1.43, null],
    bound: false,
    throughput: "Throughput not reported",
    note: "Authentication benchmark only. This does not represent end-to-end code review latency.",
  },
  {
    name: "Realtime SDK",
    scope: "NodeBase · local SDK publish/receive",
    values: [null, 0.57, null],
    bound: false,
    throughput: "Throughput not reported",
    note: "Local SDK latency, not internet round-trip WebSocket latency.",
  },
];
export function Benchmarks() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const current = workloads[selected];
  return (
    <section id="benchmarks" className="section">
      <SectionHeading number="02" label="PERFORMANCE LAB" title="Inspect the numbers.">
        A small inspector for recorded measurements. No simulated traffic, invented percentiles, or
        live counters.
      </SectionHeading>
      <div className="benchmark-panel">
        <div className="panel-bar">
          <span className="mono">benchmark_inspector</span>
          <span className="recorded">● RECORDED DATA</span>
        </div>
        <div className="inspector-grid">
          <div className="workload-picker">
            <label className="eyebrow" htmlFor={id}>
              SELECT WORKLOAD
            </label>
            <select id={id} value={selected} onChange={(e) => setSelected(Number(e.target.value))}>
              {workloads.map((w, i) => (
                <option key={w.name} value={i}>
                  {w.name}
                </option>
              ))}
            </select>
            <p>{current.scope}</p>
            <div className="throughput">
              <span className="eyebrow">THROUGHPUT</span>
              <strong>{current.throughput}</strong>
            </div>
          </div>
          <div className="latency-chart" aria-live="polite" aria-atomic="true">
            <div className="chart-heading">
              <span className="eyebrow">LATENCY DISTRIBUTION</span>
              <span className="mono">milliseconds / lower is better</span>
            </div>
            {current.values.map((v, i) => (
              <div className="latency-row" key={i}>
                <span className="mono">{["p50", "p95", "p99"][i]}</span>
                <div className="bar-track">
                  {v !== null && <div className="bar" style={{ width: `${(v / 6) * 100}%` }} />}
                </div>
                <strong>
                  {v === null ? "N/R" : `${current.bound ? "<" : ""}${v.toFixed(2)} ms`}
                </strong>
              </div>
            ))}
            <div className="chart-axis">
              <span>0</span>
              <span>3</span>
              <span>6 ms</span>
            </div>
            <p className="chart-note">{current.note} N/R = not reported.</p>
          </div>
        </div>
        <div className="ast-strip">
          <div>
            <span className="eyebrow">IN-MEMORY AST / 14-RULE SAST SCANNER</span>
            <strong>
              220,000–257,000 <small>LOC/sec</small>
            </strong>
          </div>
          <p>
            <span className="mono">≈2,046 files/sec</span>
            <br />
            Scanner workload only. LLM inference excluded.
          </p>
        </div>
      </div>
      <p className="benchmark-note">
        Source: supplied resume · p99 and raw latency curves were not supplied · percentile
        summaries shown without interpolation.
      </p>
    </section>
  );
}
