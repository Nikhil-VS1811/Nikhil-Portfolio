# Systems portfolio redesign

The redesign is already applied in this checkout. The existing `/` route, TanStack Router setup, React application, static Vite build, and Vercel routing are preserved. This is not a Next.js migration.

## Files and responsibilities

- `src/routes/index.tsx`: page composition and route metadata.
- `src/components/systems/Header.tsx`: identity, navigation, social links, resume request.
- `src/components/systems/Hero.tsx`: systems headline and benchmark summary.
- `src/components/systems/Projects.tsx`: project case studies and responsive NodeBase architecture diagram.
- `src/components/systems/Benchmarks.tsx`: accessible workload selector and recorded percentile comparison.
- `src/components/systems/OpenSource.tsx`: dedicated GSSoC / Open Source India Connect contributions with a merged-PR search link.
- `src/components/systems/Background.tsx`: experience, achievements, categorized skills, education, contact/footer.
- `src/components/systems/Shared.tsx`: shared resume link, external link, section heading.
- `src/data/portfolio.ts`: project content, links, contact email, resume request template.
- `src/styles.css`: Zinc palette, responsive layouts, focus states, local Inter / JetBrains Mono fonts.
- `index.html`, `src/routes/__root.tsx`, `public/favicon.svg`: metadata and identity.

Legacy components remain unmounted to avoid deleting unrelated source. Their PDF links also now use the shared email request. Do not mount the legacy resume snapshot: it contains outdated template content. The active redesign uses the new systems components only.

## Resume behavior

All visible resume actions say **Request resume** and open a `mailto:` link with a subject and optional name/opportunity fields. Visitors must send that email; Nikhil replies manually with the PDF. No email is automatically sent, no visitor data is collected, and no PDF is attached or served.

`public/resume.pdf` has been removed from this deployment source. The old file was moved outside the checkout as a recoverable backup. The supplied updated resume is not copied into the repository or deploy bundle. Do not put resumes under `public/`.

Visitors without a configured email application can copy the email address visibly shown in Contact. The site cannot require or verify a sent email with `mailto:` alone. Previously downloaded copies, historical Git files, and old deployments are not revoked by this change. After deploying, check `/resume.pdf` and retire any older public resume URLs/deployments as needed.

## Content provenance

Project metrics and achievements are transcribed from the supplied resume and brief, not independently reproduced. The internship numbers (12+ endpoints, 28% query reduction, 92%+ coverage) are supplied in the brief but do not appear in the PDF. Add evidence links / reproducible benchmark reports before describing them as independently verified production measurements.

The inspector displays recorded summaries, not synthetic latency curves. Unreported percentiles show N/R. CRUD's <3ms is an upper bound. The 0.57ms result is local SDK publish/receive, not internet WebSocket round-trip. AST throughput excludes model inference. Hardware, concurrency, run duration, and raw traces were not provided. Add those to the project repositories to make the benchmarks reproducible.

## Install, preview, build

Use Node 22.12+ (or a supported newer release) and pnpm. A pnpm lockfile is included; keep one package manager per installation.

```sh
pnpm install --frozen-lockfile
pnpm exec vite --config vite.static.config.ts --host 127.0.0.1
pnpm exec tsc --noEmit
pnpm run build
pnpm run preview --host 127.0.0.1
```

The static build outputs `dist/`. The existing `vercel.json` uses the same Vite build and output directory. Vercel can build with `pnpm run build`; do not upload the private PDF. No server secrets or email service are required.

## Applying to another checkout

Copy the new `src/components/systems/` and `src/data/portfolio.ts`; replace the route and stylesheet listed above; merge metadata changes and the favicon. Install `@fontsource-variable/inter` and `@fontsource/jetbrains-mono`. Remove all public PDF assets and direct download links. Preserve the target application's router and deployment configuration unless deliberately migrating frameworks.

## Performance acceptance

The active UI uses CSS layouts and a small SVG favicon, no chart library, canvas, animation library, polling, or remote font service. Fonts are bundled locally. The browser inspector needs no network requests. Native details elements provide case-study expansion and the native select supports keyboard operation.

A Lighthouse score is a measured result, not a code guarantee. Run Lighthouse mobile and desktop on the final deployed build; verify LCP, CLS, keyboard focus, contrast, 320px / 390px / 768px / 1440px layouts, case-study toggles, workload switching, external links, and resume requests. A score of 100 and zero CLS must not be claimed without that audit.
