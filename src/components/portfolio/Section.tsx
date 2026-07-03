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
      className={`relative py-36 md:py-56 scroll-mt-28 ${tone === "alt" ? "section-alt" : ""}`}
    >
      {/* Hairline transition */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

      <motion.div
        className={`mx-auto ${maxW} px-6 md:px-12`}
        variants={stagger(0.12, 0)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          variants={fadeUp}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground/80 mb-8">
            {eyebrow}
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-foreground leading-[1.02]">
            {title}
          </h2>
          {description && (
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}