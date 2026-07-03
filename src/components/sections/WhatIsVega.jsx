import Image from "next/image";
import { Compass, Layers3, Route, Sparkles } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";
import VegaName from "@/components/ui/VegaName";
import sectionVisuals from "@/data/sectionVisuals";
import { formatVegaText } from "@/utils/format-vega-text";

const highlightCards = [
  {
    title: "Structured Accelerator",
    description: "A guided framework for founders who need clarity, alignment, and operational discipline.",
    icon: Layers3,
    tone: "from-[#f5fbff] to-[#ffffff]",
    iconTone: "from-[#2cc8d8] to-[#2982ff]",
  },
  {
    title: "Practical Roadmap",
    description: "Translate insight into an execution path that supports sustainable, stage-aware growth.",
    icon: Route,
    tone: "from-[#fff3f7] to-[#ffffff]",
    iconTone: "from-[#ff877c] to-[#ff4f8a]",
  },
  {
    title: "Founder Momentum",
    description: "Build confidence around what matters next, how to prioritize, and how to move with focus.",
    icon: Compass,
    tone: "from-[#f4f6ff] to-[#ffffff]",
    iconTone: "from-[#5b8cff] to-[#7d44ef]",
  },
];

export default function WhatIsVega() {
  return (
    <Section id="what-is-vega" className="bg-white" containerClassName="max-w-[1280px]">
      <FadeUp>
        <div className="grid gap-10">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
            <div className="section-eyebrow section-eyebrow--large mb-[18px]">definition</div>
            <Heading className="section-title-gradient mb-6">What is <VegaName />?</Heading>
            <div className="w-full max-w-[1160px]">
              <p className="text-[19px] leading-8 text-muted">
                <strong className="font-semibold text-foreground"><VegaName /> is a structured business growth accelerator</strong>{" "}
                designed for founders, entrepreneurs, and executive leaders who want to build businesses that scale with
                more clarity, alignment, and discipline.
              </p>
              <p className="mt-4 text-[19px] leading-8 text-muted">
                Through assessments, executive coaching, workshops, and implementation support, {formatVegaText("VEGA helps leaders")}{" "}
                identify what is slowing their growth, and build a practical roadmap for sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
            <div className="soft-panel relative overflow-hidden rounded-[34px] border border-[#e8edf5] bg-white p-6 md:p-7">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-36 w-36 rounded-full bg-linear-to-br from-[#e2efff] via-[#f9f0ff] to-transparent opacity-90 blur-3xl"
              />

              <div className="grid gap-4">
                {highlightCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group flex items-start gap-5 rounded-[26px] border border-white/80 bg-linear-to-br ${item.tone} p-5 shadow-[0_14px_32px_rgba(26,34,56,0.06)] transition-transform duration-300 hover:-translate-y-1 md:p-6`}
                    >
                      <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${item.iconTone} text-white shadow-[0_16px_30px_rgba(40,56,93,0.16)]`}>
                        <Icon className="size-[18px]" strokeWidth={1.9} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[21px] leading-[1.2] tracking-[-0.03em] text-[#152033]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.7] text-[#111111]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-[#dfe7f5] bg-[#f5f9ff] shadow-[0_30px_90px_rgba(26,34,56,0.08)]">
              <div className="relative min-h-[500px] lg:min-h-[520px]">
                <Image
                  src={sectionVisuals.whatIsVega.src}
                  alt={sectionVisuals.whatIsVega.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(12,17,30,0.12)_40%,rgba(12,17,30,0.85)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <span className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-[#ff8c79] to-[#ff4d8b] text-white">
                      <Sparkles className="size-4" strokeWidth={1.9} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-white/82">How {formatVegaText("VEGA helps")}</span>
                  </div>
                  <h3 className="mt-5 max-w-[420px] text-[clamp(30px,3vw,42px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                    A founder-first accelerator designed for businesses entering a more complex stage of growth.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
