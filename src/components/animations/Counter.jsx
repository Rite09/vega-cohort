"use client";

import { useRef } from "react";
import useCounter from "@/hooks/useCounter";
import { formatValue } from "@/utils/format-value";

export default function Counter({
  className,
  duration,
  prefix,
  start,
  suffix,
  value,
}) {
  const counterRef = useRef(null);

  useCounter(counterRef, {
    duration,
    prefix,
    start,
    suffix,
    value,
  });

  return (
    <span ref={counterRef} className={className}>
      {formatValue(value, { prefix, suffix })}
    </span>
  );
}
