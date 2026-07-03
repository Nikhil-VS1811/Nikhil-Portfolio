import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 md:py-40 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary/90 mb-5">
            <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_20%,transparent)]" />
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}