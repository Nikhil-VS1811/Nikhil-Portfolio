import { Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
          Open to internships & collaborations
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] animate-in fade-in slide-in-from-bottom-3 duration-700">
          AI-Focused
          <br />
          Full Stack
          <br />
          <span className="italic font-serif text-primary">Developer.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          I'm Nikhil VS — I build practical AI-powered web applications using
          Flask, modern frontend technologies, APIs, and intelligent workflows.
          I enjoy turning ideas into working products end to end.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 animate-in fade-in duration-700 delay-300">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {[
            { k: "4", v: "Featured projects" },
            { k: "B.E.", v: "Info Science · 2027" },
            { k: "AI + FS", v: "Core focus" },
            { k: "Open", v: "To opportunities" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl md:text-3xl font-medium text-foreground">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}