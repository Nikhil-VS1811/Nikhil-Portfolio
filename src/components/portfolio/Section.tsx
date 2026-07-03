import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

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
  const maxW = width === "narrow" ? "max-w-5xl" : "max-w-7xl";

  return (
    <section
      id={id}
      className={`relative py-32 md:py-44 scroll-mt-28 ${tone === "alt" ? "section-alt" : ""}`}
    >
      {/* Smooth transition dividers */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/0 via-background/0 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />

      <motion.div
        className={`mx-auto ${maxW} px-6 md:px-10`}
        variants={stagger(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          variants={fadeUp}
          className="mb-20 md:mb-24 max-w-2xl"
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
        </motion.div>
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}