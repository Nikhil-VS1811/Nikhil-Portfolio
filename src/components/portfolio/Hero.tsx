import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";

const codeLines: Array<{ tokens: Array<{ t: string; c?: string }> }> = [
  { tokens: [{ t: "class", c: "kw" }, { t: " " }, { t: "AIReviewProvider", c: "cls" }, { t: "(" }, { t: "Protocol", c: "cls" }, { t: "):" } ] },
  { tokens: [{ t: "    " }, { t: "def", c: "kw" }, { t: " " }, { t: "generate_review", c: "fn" }, { t: "(" }, { t: "self", c: "var" }, { t: ", " }, { t: "prompt", c: "var" }, { t: ": " }, { t: "str", c: "cls" }, { t: ") -> " }, { t: "str", c: "cls" }, { t: ": ..." } ] },
  { tokens: [] },
  { tokens: [{ t: "def", c: "kw" }, { t: " " }, { t: "get_ai_review_provider", c: "fn" }, { t: "():" } ] },
  { tokens: [{ t: "    " }, { t: "if", c: "kw" }, { t: " " }, { t: "settings", c: "var" }, { t: "." }, { t: "AI_PROVIDER", c: "var" }, { t: " == " }, { t: '"ollama"', c: "str" }, { t: ":" } ] },
  { tokens: [{ t: "        " }, { t: "return", c: "kw" }, { t: " " }, { t: "OllamaReviewProvider", c: "cls" }, { t: "(" }, { t: "model", c: "var" }, { t: "=" }, { t: '"qwen2.5-coder"', c: "str" }, { t: ")" } ] },
  { tokens: [{ t: "    " }, { t: "return", c: "kw" }, { t: " " }, { t: "MockAIReviewProvider", c: "cls" }, { t: "()" } ] },
];

const tokenColor: Record<string, string> = {
  kw: "text-[hsl(var(--primary))]",
  str: "text-emerald-300/90",
  fn: "text-indigo-300",
  cls: "text-cyan-200",
  var: "text-foreground/90",
  dec: "text-fuchsia-300/90",
};

function useCountUp(target: number, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

function StatCard({ value, suffix = "", display, label, delay = 0 }: { value?: number; suffix?: string; display?: string; label: string; delay?: number }) {
  const n = useCountUp(value ?? 0);
  return (
    <div
      className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-md p-4 overflow-hidden group hover:border-primary/40 transition-colors animate-in fade-in slide-in-from-bottom-3 duration-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), hsl(var(--primary)/0.08), transparent 40%)" }} />
      <div className="relative">
        <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground tabular-nums">
          {display ? display : n}
          <span className="text-primary">{suffix}</span>
        </div>
        <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground font-mono">
          {label}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/70 transition-colors"
    >
      {children}
    </a>
  );
}

function LeetCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13.5 3L5 12l6 6 3 3 5-5" />
      <path d="M8.5 12H20" />
    </svg>
  );
}

function CodeforcesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3Zm9 3A1.5 1.5 0 0 1 15 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5V12a1.5 1.5 0 0 1 1.5-1.5h3Zm9-7.5A1.5 1.5 0 0 1 24 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 19.5 3h3Z" />
    </svg>
  );
}

function GfgIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.45 14.32a5.61 5.61 0 0 1-1.6 1.9 6.9 6.9 0 0 1-4.28 1.4 6.94 6.94 0 0 1-2.68-.5 6.36 6.36 0 0 1-3.5-3.55 7.09 7.09 0 0 1 0-5.15 6.4 6.4 0 0 1 3.5-3.56 6.94 6.94 0 0 1 2.68-.5 6.9 6.9 0 0 1 4.28 1.4 5.6 5.6 0 0 1 1.6 1.9l-2.02 1.16a3.5 3.5 0 0 0-1.05-1.24 4.36 4.36 0 0 0-2.81-.9 4.4 4.4 0 0 0-3.28 1.32 4.72 4.72 0 0 0 0 6.44 4.4 4.4 0 0 0 3.28 1.32 4.36 4.36 0 0 0 2.81-.9 3.5 3.5 0 0 0 1.05-1.24l2.02 1.16ZM15.57 12h-3.4v-2h5.9v5.5h-2.5V12Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.45] animate-[gridPulse_12s_ease-in-out_infinite]" />
        <div className="absolute -top-40 left-1/3 w-[720px] h-[520px] orb opacity-60" />
        <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] orb-indigo opacity-50" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-md pl-2 pr-4 py-1.5 text-xs text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono tracking-wide">Available for internships & collaborations</span>
          </div>

          <h1 className="mt-7 text-[40px] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] text-foreground animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="block text-gradient">Aspiring AI Engineer</span>
            <span className="block text-foreground/95">
              & Full Stack Developer<span className="text-primary">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-[17px] text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            I'm Nikhil VS — I build AI-powered web applications, developer tools,
            and full-stack products. From LLM-integrated platforms to production
            APIs, I ship end-to-end.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-in fade-in duration-700 delay-300">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-11 pl-5 pr-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/40 backdrop-blur-md text-sm font-medium text-foreground hover:border-primary/60 hover:bg-card/70 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Me →
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2.5 animate-in fade-in duration-700 delay-500">
            <SocialIcon href="https://github.com/Nikhil-VS1811" label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/nikhil-vs-8a7541288/" label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://leetcode.com/u/Nikhilvs1811/" label="LeetCode"><LeetCodeIcon /></SocialIcon>
            <SocialIcon href="https://codeforces.com/profile/Nikhil_1811" label="Codeforces"><CodeforcesIcon /></SocialIcon>
            <SocialIcon href="https://www.geeksforgeeks.org/profile/nikhilvs1811" label="GeeksforGeeks"><GfgIcon /></SocialIcon>
            <SocialIcon href="mailto:nikhilvenkatesh1811@gmail.com" label="Email"><Mail className="w-4 h-4" /></SocialIcon>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          {/* Floating code editor */}
          <div className="relative float-y">
            <div aria-hidden className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-primary/20 via-indigo-500/10 to-transparent blur-2xl opacity-70" />
            <div className="relative rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/40">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <div className="ml-3 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                  <Code2 className="w-3.5 h-3.5" />
                  main.py
                </div>
                <div className="ml-auto text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  py · fastapi
                </div>
              </div>
              {/* Code */}
              <div className="grid grid-cols-[auto_1fr] font-mono text-[12.5px] md:text-[13px] leading-[1.75]">
                <div className="px-3 py-4 border-r border-border/70 text-right text-muted-foreground/60 select-none bg-background/30">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="px-4 py-4 overflow-x-auto">
                  {codeLines.map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {line.tokens.length === 0 ? "\u00A0" : line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c ? tokenColor[tok.c] : "text-foreground/85"}>{tok.t}</span>
                      ))}
                      {i === codeLines.length - 1 && (
                        <span className="inline-block w-1.5 h-4 -mb-0.5 ml-0.5 bg-primary/80 animate-pulse align-middle" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Statusbar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-card/40 text-[10.5px] font-mono text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> connected</span>
                  <span>utf-8</span>
                </div>
                <div>ln 9, col 42</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatCard value={3} suffix="+" label="Projects" delay={400} />
            <StatCard value={18} suffix="+" label="Technologies" delay={500} />
            <StatCard value={420} suffix="+" label="GitHub Contribs" delay={600} />
            <StatCard display="Final Year" label="ISE Student" delay={700} />
          </div>
        </div>
      </div>
    </section>
  );
}