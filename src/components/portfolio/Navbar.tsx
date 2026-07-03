import { useEffect, useRef, useState } from "react";
import { Download, Github, Moon, Sun } from "lucide-react";

const links = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [isDark, setIsDark] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Init theme from storage/system
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  // Scroll spy
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Close menu on click outside or Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        btnRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <nav
        className={`mx-auto max-w-6xl h-14 pl-4 pr-2 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled || open
            ? "bg-background/60 border border-border backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_50px_-25px_rgba(0,0,0,0.7)]"
            : "bg-background/30 border border-border/60 backdrop-blur-xl"
        }`}
      >
        {/* Brand */}
        <a
          href="#hero"
          className="font-mono text-sm tracking-tight text-foreground shrink-0 flex items-center gap-2 group"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary/90 to-secondary/80 text-[11px] font-bold text-primary-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent),0_6px_20px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-transform duration-300 group-hover:scale-105">
            N
          </span>
          <span className="hidden sm:inline text-foreground/90">
            nikhil<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-1 text-[13px] text-muted-foreground">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative inline-flex items-center h-9 px-3.5 rounded-full transition-colors duration-200 group ${
                    isActive ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-foreground/[0.06] border border-border"
                    />
                  )}
                  <span
                    aria-hidden
                    className="absolute left-3.5 right-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 pr-1">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] font-medium h-9 px-3.5 rounded-full bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-[1px] transition-all duration-200 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/40 text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-card/70 transition-colors"
          >
            <Sun className={`w-4 h-4 absolute transition-all duration-300 ${isDark ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
            <Moon className={`w-4 h-4 absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}`} />
          </button>
          <a
            href="https://github.com/Nikhil-VS1811"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/40 text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-card/70 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            ref={btnRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden relative w-9 h-9 flex flex-col items-center justify-center rounded-full border border-border/70 bg-card/40 hover:bg-card/70 transition-colors text-foreground"
          >
            <span className={`block w-4 h-[2px] bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[3px]" : "-translate-y-[3px]"}`} />
            <span className={`block w-4 h-[2px] bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
            <span className={`block w-4 h-[2px] bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : "translate-y-[3px]"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        ref={menuRef}
        className={`xl:hidden mx-auto mt-2 max-w-6xl rounded-2xl border bg-background/80 backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
          open ? "max-h-[40rem] opacity-100 border-border" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col p-3 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center h-11 text-sm rounded-xl px-4 transition-colors ${
                  active === l.id
                    ? "text-foreground bg-accent/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 mt-1 border-t border-border grid grid-cols-[1fr_auto] gap-2 items-center">
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 h-11 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <a
              href="https://github.com/Nikhil-VS1811"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground hover:border-primary/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}