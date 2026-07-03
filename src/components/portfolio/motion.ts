import type { Variants, Transition } from "framer-motion";

// Premium easing — smooth, no bounce. Custom cubic-bezier matches our surface hover.
export const easeOut: Transition["ease"] = [0.2, 0.7, 0.2, 1];
export const easeInOut: Transition["ease"] = [0.6, 0.05, 0.35, 1];

export const baseTransition: Transition = {
  duration: 0.7,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: easeOut } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const viewportOnce = { once: true, amount: 0.2 } as const;

// Reusable hover interaction for cards
export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.35, ease: easeOut } },
  whileTap: { scale: 0.995 },
};

// Button micro-interaction
export const buttonHover = {
  whileHover: { y: -1, transition: { duration: 0.25, ease: easeOut } },
  whileTap: { scale: 0.97 },
};