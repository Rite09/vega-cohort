"use client";

import { motion } from "framer-motion";
import useReveal from "@/hooks/useReveal";

const motionMap = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
  section: motion.section,
  ul: motion.ul,
};

export default function Reveal({
  amount,
  as = "div",
  children,
  className,
  delay,
  distance,
  duration,
}) {
  const animation = useReveal({ amount, delay, distance, duration });
  const MotionTag = motionMap[as] || motion.div;

  return (
    <MotionTag className={className} {...animation}>
      {children}
    </MotionTag>
  );
}
