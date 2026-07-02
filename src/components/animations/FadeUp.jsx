"use client";

import Reveal from "@/components/animations/Reveal";

export default function FadeUp(props) {
  return <Reveal distance={24} duration={0.8} {...props} />;
}
