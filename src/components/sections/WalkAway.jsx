import { Brain, Compass, Gauge, MessageSquareText, Route } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import Grid from "@/components/ui/Grid";
import SectionHeading from "@/components/ui/SectionHeading";
import walkAway from "@/data/walkAway";

const icons = [Compass, Brain, MessageSquareText, Gauge, Route];
const accents = [
  "from-[#2bc7d8] to-[#2982ff]",
  "from-[#ff8c7b] to-[#ff4f88]",
  "from-[#5a8cff] to-[#7c45ef]",
  "from-[#ffa36c] to-[#ff645c]",
  "from-[#e4ca58] to-[#69cf7c]",
];

export default function WalkAway() {
  return (
    <Section id="walkaway" className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" containerClassName="max-w-[1280px]">
      <FadeUp>
        <SectionHeading
          centered
          label="Outcomes"
          title="What You'll Walk Away With"
          description="Every cohort is designed to leave leaders with sharper judgment, stronger systems, and a clearer path to their next stage."
          descriptionClassName="max-w-[1080px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <Grid className="gap-5 md:grid-cols-2 xl:grid-cols-3">
          {walkAway.map((item, index) => {
            const Icon = icons[index % icons.length];
            const accent = accents[index % accents.length];

            return (
              <div
                key={item.number}
                className="group soft-panel relative flex min-h-[260px] flex-col overflow-hidden rounded-[30px] border border-[#e7edf8] bg-white px-8 py-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#dce6f6] hover:shadow-[0_26px_58px_rgba(26,34,56,0.12)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-32 w-32 rounded-full bg-linear-to-br from-[#e9f3ff] via-[#fff3f8] to-transparent opacity-90 blur-2xl"
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="font-mono text-[12px] font-semibold tracking-[0.08em] text-[#111827]">
                    {item.number}
                  </div>
                  <span className={`flex size-12 items-center justify-center rounded-2xl bg-linear-to-br ${accent} text-white shadow-[0_16px_30px_rgba(40,56,93,0.16)]`}>
                    <Icon className="size-[18px]" strokeWidth={1.9} />
                  </span>
                </div>

                <h3 className="relative mt-8 text-[clamp(24px,2vw,33px)] leading-[1.28] tracking-[-0.035em] text-[#182236]">
                  {item.title}
                </h3>
                <p className="relative mt-5 max-w-[340px] text-[16px] leading-[1.85] text-[#111111]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </Grid>
      </FadeUp>
    </Section>
  );
}
