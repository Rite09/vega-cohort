"use client";

import Reveal from "@/components/animations/Reveal";

export default function FadeIn(props) {
  return <Reveal distance={0} duration={0.7} {...props} />;
}
