import { ExternalLink, SectionHeading } from "./Shared";

export function OpenSource() {
  return (
    <section id="open-source" className="section" aria-labelledby="open-source-title">
      <SectionHeading number="04" label="OPEN SOURCE" title="Contributing beyond my own projects.">
        Merged pull requests to public repositories through community contribution programs.
      </SectionHeading>
      <div className="open-source-grid">
        <article>
          <p className="eyebrow">COMMUNITY CONTRIBUTIONS</p>
          <h3 id="open-source-title">GirlScript Summer of Code</h3>
          <p>Contributed to public repositories and merged pull requests through GSSoC.</p>
          <span className="contribution-status mono">MERGED CONTRIBUTIONS</span>
        </article>
        <article>
          <p className="eyebrow">COMMUNITY CONTRIBUTIONS</p>
          <h3>Open Source India Connect</h3>
          <p>
            Contributed and merged pull requests to public repositories through Open Source India
            Connect.
          </p>
          <span className="contribution-status mono">MERGED CONTRIBUTIONS</span>
        </article>
      </div>
      <div className="open-source-links">
        <ExternalLink href="https://github.com/pulls?q=is%3Apr+author%3ANikhil-VS1811+is%3Amerged">
          Browse my merged pull requests
        </ExternalLink>
        <ExternalLink href="https://github.com/Nikhil-VS1811">GitHub profile</ExternalLink>
      </div>
    </section>
  );
}
