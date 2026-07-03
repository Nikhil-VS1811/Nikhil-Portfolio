import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#profiles", label: "Profiles" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        className={`mx-auto max-w-5xl h-12 sm:h-14 pl-4 sm:pl-5 pr-2 sm:pr-2 flex items-center justify-between rounded-full transition-all duration-300 ${
          scrolled || open
            ? "bg-background/70 border border-border backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "bg-background/40 border border-border/60 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <a
          href="#hero"
          className="font-mono text-sm tracking-tight text-foreground shrink-0 flex items-center gap-2"
        >
          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary/80 to-secondary/70 text-[10px] font-bold text-primary-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
            N
          </span>
          <span className="hidden sm:inline text-foreground/90">nikhil<span className="text-muted-foreground">.dev</span></span>
          <span className="sm:hidden">nikhil</span>
        </a>

        {/* Desktop nav - hidden below lg to avoid overflow on tablets */}
        <ul className="hidden lg:flex items-center gap-7 text-[13px] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors duration-200 py-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA - hidden below lg */}
        <a
          href="/resume.pdf"
          download
          className="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium h-9 px-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>

        {/* Hamburger */}
        <button
          ref={btnRef}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-full hover:bg-accent/50 transition-colors text-foreground"
        >
          <span
            className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[3px]" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
              open ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[3px]" : "translate-y-[3px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile / tablet overlay menu */}
      <div
        ref={menuRef}
        className={`lg:hidden mx-auto mt-2 max-w-5xl rounded-2xl border border-border bg-background/90 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col p-3 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center h-11 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/40 rounded-xl px-4 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 mt-1 border-t border-border">
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 h-11 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors mt-2"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}