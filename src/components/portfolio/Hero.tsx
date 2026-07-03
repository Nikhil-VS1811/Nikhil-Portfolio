import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, easeOut, buttonHover } from "./motion";

const codeLines: Array<{ tokens: Array<{ t: string; c?: string }> }> = [
  { tokens: [{ t: "import", c: "kw" }, { t: " { " }, { t: "FastAPI", c: "cls" }, { t: " } " }, { t: "from", c: "kw" }, { t: " " }, { t: '"fastapi"', c: "str" } ] },
  { tokens: [{ t: "import", c: "kw" }, { t: " " }, { t: "openai", c: "cls" }, { t: ", " }, { t: "chromadb", c: "cls" } ] },
  { tokens: [] },
  { tokens: [{ t: "app", c: "var" }, { t: " = " }, { t: "FastAPI", c: "fn" }, { t: "()" } ] },
  { tokens: [] },
  { tokens: [{ t: "@app", c: "dec" }, { t: "." }, { t: "post", c: "fn" }, { t: "(" }, { t: '"/review"', c: "str" }, { t: ")" } ] },
  { tokens: [{ t: "async", c: "kw" }, { t: " " }, { t: "def", c: "kw" }, { t: " " }, { t: "review", c: "fn" }, { t: "(" }, { t: "repo", c: "var" }, { t: ": " }, { t: "str", c: "cls" }, { t: "):" } ] },
  { tokens: [{ t: "    ctx", c: "var" }, { t: " = " }, { t: "await", c: "kw" }, { t: " " }, { t: "vector", c: "var" }, { t: "." }, { t: "search", c: "fn" }, { t: "(" }, { t: "repo", c: "var" }, { t: ")" } ] },
  { tokens: [{ t: "    ", }, { t: "return", c: "kw" }, { t: " " }, { t: "await", c: "kw" }, { t: " " }, { t: "gemini", c: "var" }, { t: "." }, { t: "analyze", c: "fn" }, { t: "(" }, { t: "ctx", c: "var" }, { t: ")" } ] },
];

const tokenColor: Record<string, string> = {
  kw: "text-foreground",
  str: "text-muted-foreground",
  fn: "text-foreground/85",
  cls: "text-foreground/75",
  var: "text-muted-foreground",
  dec: "text-muted-foreground/80",
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

function StatCard({ value, suffix = "", label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  const n = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: easeOut, delay: delay / 1000 }}
      whileHover={{ y: -2, transition: { duration: 0.3, ease: easeOut } }}
      className="relative rounded-xl border border-border/80 bg-card/40 backdrop-blur-md p-5 overflow-hidden group hover:border-border transition-colors"
    >
      <div className="relative">
        <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-foreground tabular-nums">
          {n}
          <span className="text-muted-foreground/70">{suffix}</span>
        </div>
        <div className="mt-3 text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground/80 font-mono">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.05, transition: { duration: 0.25, ease: easeOut } }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/30 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-border hover:bg-card/60 transition-colors"
    >
      {children}
    </motion.a>
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

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Parallax — subtle, layered depth
  const yEditor = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yStats = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Background */}
      <motion.div aria-hidden style={{ y: yOrbs, opacity: opacityBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.5]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] orb opacity-70" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          variants={stagger(0.11, 0.05)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/40 backdrop-blur-md px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground/80" />
            </span>
            <span className="font-mono tracking-wide">Available for internships & collaborations</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-8 text-[44px] leading-[1.0] sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-[-0.04em] text-foreground">
            <span className="block">AI Engineer</span>
            <span className="block text-muted-foreground/70">
              & <span className="font-serif italic font-normal">Full Stack</span>
            </span>
            <span className="block font-serif italic font-normal">
              Developer.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-9 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm Nikhil VS — I build scalable AI-powered web applications,
            developer tools, and modern full-stack products. From RAG pipelines
            to production APIs, I ship end-to-end.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              {...buttonHover}
              href="#projects"
              className="group inline-flex items-center gap-2 h-11 pl-5 pr-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              {...buttonHover}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border/80 bg-card/30 backdrop-blur-md text-sm font-medium text-foreground hover:border-border hover:bg-card/60 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              {...buttonHover}
              href="#contact"
              className="inline-flex items-center h-11 px-5 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Me →
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-2.5">
            <SocialIcon href="https://github.com/Nikhil-VS1811" label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/nikhil-vs-8a7541288/" label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://leetcode.com/u/Nikhil_VS/" label="LeetCode"><LeetCodeIcon /></SocialIcon>
            <SocialIcon href="mailto:nikhilvenkatesh1811@gmail.com" label="Email"><Mail className="w-4 h-4" /></SocialIcon>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
          style={{ y: yEditor }}
        >
          {/* Floating code editor */}
          <div className="relative float-y">
            <div aria-hidden className="absolute -inset-10 rounded-[2rem] bg-white/[0.03] blur-3xl" />
            <div className="relative rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/70 bg-card/30">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
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
                <div className="px-3 py-4 border-r border-border/60 text-right text-muted-foreground/50 select-none bg-background/20">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="px-4 py-4 overflow-x-auto">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: easeOut, delay: 0.6 + i * 0.06 }}
                      className="whitespace-pre"
                    >
                      {line.tokens.length === 0 ? "\u00A0" : line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c ? tokenColor[tok.c] : "text-foreground/85"}>{tok.t}</span>
                      ))}
                      {i === codeLines.length - 1 && (
                        <span className="inline-block w-1.5 h-4 -mb-0.5 ml-0.5 bg-foreground/70 animate-pulse align-middle" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Statusbar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border/70 bg-card/30 text-[10.5px] font-mono text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-foreground/50" /> connected</span>
                  <span>utf-8</span>
                </div>
                <div>ln 9, col 42</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div className="mt-8 grid grid-cols-2 gap-4" style={{ y: yStats }}>
            <StatCard value={12} suffix="+" label="Projects" delay={400} />
            <StatCard value={18} suffix="+" label="Technologies" delay={500} />
            <StatCard value={420} suffix="+" label="GitHub Contribs" delay={600} />
            <StatCard value={2} suffix="+ yrs" label="Experience" delay={700} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}