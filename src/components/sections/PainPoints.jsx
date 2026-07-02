"use client";

import Image from "next/image";
import { Activity, Compass, Lightbulb, Target, TrendingUp, UsersRound, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import Grid from "@/components/ui/Grid";
import SectionHeading from "@/components/ui/SectionHeading";
import sectionVisuals from "@/data/sectionVisuals";
import { gsap } from "@/lib/gsap";
import painPoints from "@/data/painPoints";

const icons = [Compass, UsersRound, Workflow, Target, Activity, Lightbulb];
const accents = [
  { glow: "from-[#dff7ff] via-[#f7fbff] to-transparent", icon: "from-[#29c3d6] to-[#2783ff]" },
  { glow: "from-[#ffe8ef] via-[#fff7fa] to-transparent", icon: "from-[#ff8a7a] to-[#ff4f88]" },
  { glow: "from-[#e7eeff] via-[#f8faff] to-transparent", icon: "from-[#5a8cff] to-[#34c7d9]" },
  { glow: "from-[#fff0e5] via-[#fff9f5] to-transparent", icon: "from-[#ff9a6b] to-[#ff6a56]" },
  { glow: "from-[#eef9df] via-[#fbfef6] to-transparent", icon: "from-[#e7cb58] to-[#6fcf74]" },
  { glow: "from-[#eee9ff] via-[#faf8ff] to-transparent", icon: "from-[#5b8bff] to-[#8c3cf0]" },
];

export default function PainPoints() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-pain-visual]",
        { autoAlpha: 0, x: -36, scale: 0.96 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-pain-stage]",
            start: "top 74%",
          },
        }
      );

      gsap.fromTo(
        "[data-pain-card]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-pain-stage]",
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="pain" className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" containerClassName="max-w-[1280px]" >
      <div ref={sectionRef}>
      <FadeUp>
        <SectionHeading
          centered
          label="Recognize the pattern"
          title="Do any of these sound familiar?"
          description="Growth often creates challenges that are easy to feel but harder to diagnose."
          descriptionClassName="max-w-[1080px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div data-pain-stage className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div data-pain-visual className="relative lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-[#0f172a] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <div className="relative min-h-[520px]">
                <Image
                  src={sectionVisuals.painPoints.src}
                  alt={sectionVisuals.painPoints.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,24,0.1)_0%,rgba(9,14,24,0.34)_45%,rgba(9,14,24,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-white/82 backdrop-blur">
                    <TrendingUp className="size-3.5" />
                    Growth pressure
                  </div>
                  <h3 className="mt-5 max-w-[420px] text-[clamp(30px,3vw,42px)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    Growth becomes expensive when the operating model never evolves.
                  </h3>
                  <p className="mt-4 max-w-[430px] text-[15px] leading-[1.8] text-white/78">
                    VEGA helps leadership teams move from instinct-led growth to repeatable execution, clearer roles,
                    and stronger operating discipline.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-white/14 bg-white/10 px-4 py-4 backdrop-blur">
                      <div className="font-mono text-[11px] tracking-[0.08em] text-white/72">Focus area</div>
                      <div className="mt-2 text-[18px] font-semibold text-white">Leadership alignment</div>
                    </div>
                    <div className="rounded-[20px] border border-white/14 bg-white/10 px-4 py-4 backdrop-blur">
                      <div className="font-mono text-[11px] tracking-[0.08em] text-white/72">Outcome</div>
                      <div className="mt-2 text-[18px] font-semibold text-white">Cleaner execution rhythm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Grid className="gap-5 lg:grid-cols-2">
            {painPoints.map((item, index) => {
              const Icon = icons[index % icons.length];
              const accent = accents[index % accents.length];

              return (
                <div
                  key={item}
                  data-pain-card
                  className="group soft-panel relative overflow-hidden rounded-[30px] border border-[#e8edf5] bg-white px-6 py-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#d9e4f5] hover:shadow-[0_24px_54px_rgba(26,34,56,0.12)] md:px-7 md:py-7"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute right-0 top-0 h-28 w-28 rounded-full bg-linear-to-br ${accent.glow} opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start gap-5">
                    <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${accent.icon} text-white shadow-[0_16px_30px_rgba(40,56,93,0.16)]`}>
                      <Icon className="size-[18px]" strokeWidth={1.85} />
                    </span>
                    <div className="space-y-2">
                      <div className="font-mono text-[11px] tracking-[0.08em] text-[#111827]">
                        Pattern 0{index + 1}
                      </div>
                      <p className="max-w-[560px] text-[22px] leading-[1.55] tracking-[-0.025em] text-[#162033]">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Grid>
        </div>
      </FadeUp>
      </div>
    </Section>
  );
}
