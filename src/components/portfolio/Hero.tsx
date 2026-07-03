import { useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, MapPin, Sparkles, Rocket } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, easeOut, buttonHover } from "./motion";

const codeLines: Array<{ tokens: Array<{ t: string; c?: string }> }> = [
  { tokens: [{ t: "import", c: "kw" }, { t: " { " }, { t: "FastAPI", c: "cls" }, { t: " } " }, { t: "from", c: "kw" }, { t: " " }, { t: '"fastapi"', c: "str" } ] },
  { tokens: [] },
  { tokens: [{ t: "app", c: "var" }, { t: " = " }, { t: "FastAPI", c: "fn" }, { t: "()" } ] },
  { tokens: [] },
  { tokens: [{ t: "@app", c: "dec" }, { t: "." }, { t: "post", c: "fn" }, { t: "(" }, { t: '"/review"', c: "str" }, { t: ")" } ] },
  { tokens: [{ t: "async", c: "kw" }, { t: " " }, { t: "def", c: "kw" }, { t: " " }, { t: "review", c: "fn" }, { t: "(" }, { t: "repo", c: "var" }, { t: ": " }, { t: "str", c: "cls" }, { t: "):" } ] },
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

function Highlight({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ x: 2, transition: { duration: 0.25, ease: easeOut } }}
      className="flex items-center gap-3 py-3 border-b border-border/60 last:border-0"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/40 text-primary/90">
        <Icon className="w-3.5 h-3.5" />
      </span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 w-24 shrink-0">{label}</span>
      <span className="text-[14px] text-foreground/90 truncate">{value}</span>
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
  // Parallax — very subtle
  const yEditor = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Background — single soft ambient wash */}
      <motion.div aria-hidden style={{ y: yOrbs, opacity: opacityBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.35]" />
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] orb opacity-40" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 w-full grid lg:grid-cols-[1.4fr_0.85fr] gap-16 lg:gap-24 items-center">
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

          <motion.h1 variants={fadeUp} className="mt-8 text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-[-0.04em] text-foreground">
            <span className="block">AI Engineer</span>
            <span className="block text-muted-foreground/70 font-medium">
              &amp; Full Stack
            </span>
            <span className="block">
              Developer<span className="text-primary">.</span>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-9 max-w-[62ch] text-[18px] text-muted-foreground leading-[1.75]">
            I'm Nikhil VS — I build scalable AI-powered web applications,
            developer tools, and modern full-stack products. From RAG pipelines
            to production APIs, I ship end-to-end.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
            <motion.a
              {...buttonHover}
              href="#projects"
              className="group relative inline-flex items-center gap-2 h-14 pl-7 pr-5 rounded-full bg-primary text-primary-foreground text-[15px] font-semibold shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-[0_14px_50px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-shadow"
            >
              <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" aria-hidden />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              {...buttonHover}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-14 px-6 rounded-full border border-border/80 bg-card/30 backdrop-blur-md text-[15px] font-medium text-foreground hover:border-border hover:bg-card/60 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              {...buttonHover}
              href="#contact"
              className="inline-flex items-center h-14 px-3 text-[15px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Me →
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-2.5">
            <SocialIcon href="https://github.com/Nikhil-VS1811" label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/nikhil-vs-8a7541288/" label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://leetcode.com/u/Nikhil_VS/" label="LeetCode"><LeetCodeIcon /></SocialIcon>
            <SocialIcon href="mailto:nikhilvenkatesh1811@gmail.com" label="Email"><Mail className="w-4 h-4" /></SocialIcon>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative max-w-md w-full mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
          style={{ y: yEditor }}
        >
          {/* Smaller, cleaner code window */}
          <div className="relative">
            {/* Very soft accent glow */}
            <div aria-hidden className="absolute -inset-10 rounded-[2rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_70%)] blur-2xl opacity-60" />
            <div className="relative rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border/70 bg-card/30">
                <span className="h-2 w-2 rounded-full bg-foreground/15" />
                <span className="h-2 w-2 rounded-full bg-foreground/15" />
                <span className="h-2 w-2 rounded-full bg-foreground/15" />
                <div className="ml-2.5 flex items-center gap-1.5 text-[10.5px] font-mono text-muted-foreground">
                  <Code2 className="w-3.5 h-3.5" />
                  main.py
                </div>
              </div>
              {/* Code */}
              <div className="grid grid-cols-[auto_1fr] font-mono text-[11.5px] md:text-[12px] leading-[1.75]">
                <div className="px-2.5 py-3.5 border-r border-border/60 text-right text-muted-foreground/50 select-none bg-background/20 w-8">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="px-3.5 py-3.5 overflow-x-auto">
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
                        <span className="inline-block w-1 h-3.5 -mb-0.5 ml-0.5 bg-foreground/70 animate-pulse align-middle" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Meaningful highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
            className="mt-8 px-1"
          >
            <Highlight icon={MapPin} label="Based in" value="Bengaluru, India" />
            <Highlight icon={Sparkles} label="Focus" value="RAG · FastAPI · React" />
            <Highlight icon={Rocket} label="Latest" value="AI Code Reviewer — live" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}