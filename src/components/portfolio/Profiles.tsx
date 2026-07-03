import { Section } from "./Section";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, easeOut } from "./motion";

const profiles = [
  {
    platform: "GitHub",
    handle: "@Nikhil-VS1811",
    stat: "Projects & open-source work",
    href: "https://github.com/Nikhil-VS1811",
  },
  {
    platform: "LinkedIn",
    handle: "in/nikhil-vs",
    stat: "Professional profile",
    href: "https://www.linkedin.com/in/nikhil-vs/",
  },
  {
    platform: "LeetCode",
    handle: "@Nikhilvs1811",
    stat: "DSA practice",
    href: "https://leetcode.com/u/Nikhilvs1811/",
  },
];

export function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Around the web"
      title="Coding profiles."
    >
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {profiles.map((p) => (
          <motion.a
            key={p.platform}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.35, ease: easeOut } }}
            className="gradient-border group surface rounded-2xl p-6 flex items-start justify-between"
          >
            <div>
              <div className="text-foreground font-medium">{p.platform}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">
                {p.handle}
              </div>
              <div className="text-sm text-muted-foreground mt-4">{p.stat}</div>
            </div>
            <span className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
              ↗
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}