import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-24 overflow-hidden"
    >
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.5]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] orb opacity-60" />
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] orb-indigo opacity-50" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-md pl-2 pr-4 py-1.5 text-xs text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono tracking-wide">
            Available for internships & collaborations
          </span>
        </div>

        <h1 className="mt-8 text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] font-medium tracking-[-0.035em] text-foreground animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="block text-gradient">AI-Focused</span>
          <span className="block text-gradient">Full Stack</span>
          <span className="block font-serif italic font-normal text-foreground/95">
            Developer<span className="text-primary">.</span>
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          I'm Nikhil VS — I build practical AI-powered web applications using
          Flask, modern frontend technologies, APIs, and intelligent workflows.
          I enjoy turning ideas into working products end to end.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-in fade-in duration-700 delay-300">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 h-11 pl-5 pr-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            View projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border bg-card/40 backdrop-blur-md text-sm font-medium text-foreground hover:border-primary/60 hover:bg-card/70 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-11 px-5 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Get in touch →
          </a>
        </div>

        <div className="mt-24 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-border pt-10">
          {[
            { k: "4", v: "Featured projects" },
            { k: "B.E.", v: "Info Science · 2027" },
            { k: "AI + FS", v: "Core focus" },
            { k: "Open", v: "To opportunities" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-mono">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}