"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { formatValue } from "@/utils/format-value";

export default function useCounter(
  ref,
  { duration = 1.4, prefix = "", start = 0, suffix = "", value }
) {
  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const writeValue = (nextValue) => {
      if (!ref.current) {
        return;
      }

      ref.current.textContent = formatValue(nextValue, { prefix, suffix });
    };

    writeValue(start);

    const counter = { value: start };

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 82%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value,
          duration,
          ease: "power3.out",
          onUpdate: () => writeValue(Math.floor(counter.value)),
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(counter);
    };
  }, [duration, prefix, ref, start, suffix, value]);
}
