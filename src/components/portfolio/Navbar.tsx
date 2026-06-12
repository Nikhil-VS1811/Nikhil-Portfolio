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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="font-mono text-sm tracking-tight text-foreground shrink-0"
        >
          <span className="text-primary">/</span>
          <span className="hidden sm:inline">nikhil.dev</span>
          <span className="sm:hidden">nikhil</span>
        </a>

        {/* Desktop nav - hidden below lg to avoid overflow on tablets */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-muted-foreground">
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
          className="hidden lg:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors shrink-0"
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
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg hover:bg-accent/50 transition-colors"
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
        className={`lg:hidden absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 sm:px-6 py-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center h-11 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/40 rounded-lg px-3 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-border mt-2">
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 h-10 text-sm font-medium rounded-full border border-border hover:border-primary hover:text-primary transition-colors mt-2"
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