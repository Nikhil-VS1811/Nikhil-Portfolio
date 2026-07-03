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
      className={`relative py-40 md:py-64 scroll-mt-28 ${tone === "alt" ? "section-alt" : ""}`}
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
          className="mb-24 md:mb-32"
        >
          <div className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
            {eyebrow}
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-foreground leading-[1.05] max-w-[18ch]">
            {title}
          </h2>
          {description && (
            <p className="mt-8 text-[18px] font-normal text-muted-foreground leading-[1.75] max-w-[68ch]">
              {description}
            </p>
          )}
        </motion.div>
        <motion.div variants={fadeUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}