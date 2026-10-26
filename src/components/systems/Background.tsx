import { achievements, skills, email } from "@/data/portfolio";
import { ResumeLink, SectionHeading } from "./Shared";
export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading number="03" label="EXPERIENCE" title="Engineering in practice." />
      <div className="experience">
        <div>
          <p className="mono">JUL 2026 — SEP 2026</p>
          <span className="muted">Remote</span>
        </div>
        <div>
          <h3>Software Engineer Intern</h3>
          <p className="role">InAmigos Foundation · AI & Web Development</p>
          <ul className="experience-points">
            <li>Engineered 12+ modular RESTful endpoints in Python / FastAPI.</li>
            <li>Optimized relational schemas, reducing query latency by 28%.</li>
            <li>Maintained 92%+ test coverage with automated PyTest suites in an agile team.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeading
        number="05"
        label="ACHIEVEMENTS & CREDENTIALS"
        title="Recognition & milestones."
      />
      <div className="achievement-list">
        {achievements.map(([v, t, d]) => (
          <article key={t}>
            <span className="achievement-value mono">{v}</span>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading number="07" label="TECHNICAL TOOLKIT" title="Tools for the work." />
      <div className="skills-grid">
        {skills.map((s, i) => (
          <article key={s.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{s.title}</h3>
            <ul>
              {s.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <SectionHeading number="06" label="EDUCATION" title="Engineering foundations." />
      <div className="education education-detail">
        <p className="eyebrow">
          2023–2027
          <br />
          BACHELOR OF ENGINEERING
        </p>
        <div>
          <h3 id="education-title">Information Science & Engineering</h3>
          <p>East West Institute of Technology</p>
          <p>Visvesvaraya Technological University (VTU) · Bengaluru, Karnataka</p>
        </div>
        <div className="education-score">
          <strong className="mono">
            8.91<span>/10.0</span>
          </strong>
          <p>Cumulative GPA</p>
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <>
      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Have a system to build?</h2>
          <p>Available for 6-month SDE internships, January–June 2027.</p>
        </div>
        <div className="contact-actions">
          <ResumeLink />
          <a className="email-link" href={`mailto:${email}`}>
            {email} ↗
          </a>
          <p className="resume-help">
            Email me to request my resume. I’ll send you the PDF personally.
          </p>
        </div>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Nikhil V S</span>
        <span>
          Built with React, TanStack Router & Tailwind CSS · Vercel deployment configuration
        </span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
