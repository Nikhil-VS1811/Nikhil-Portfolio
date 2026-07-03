import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "base",
  width = "wide",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "base" | "alt";
  width?: "wide" | "narrow";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxW = width === "narrow" ? "max-w-5xl" : "max-w-7xl";

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-32 md:py-44 scroll-mt-28 ${tone === "alt" ? "section-alt" : ""}`}
    >
      {/* Smooth transition dividers */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/0 via-background/0 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />

      <div className={`mx-auto ${maxW} px-6 md:px-10`}>
        <div
          className={`mb-20 md:mb-24 max-w-2xl transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary/90 mb-6">
            <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_20%,transparent)]" />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-foreground leading-[1.05]">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}