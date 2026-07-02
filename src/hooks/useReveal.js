"use client";

export default function useReveal({
  amount = 0.18,
  delay = 0,
  distance = 28,
  duration = 0.8,
} = {}) {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount },
    variants: {
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  };
}
