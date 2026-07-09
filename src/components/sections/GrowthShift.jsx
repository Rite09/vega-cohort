import { GitBranch, Layers, MessageSquareMore, Target, TrendingUp, UserRound } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import Grid from "@/components/ui/Grid";
import SectionHeading from "@/components/ui/SectionHeading";
import { growthShiftPoints } from "@/constants/site";

const icons = [MessageSquareMore, GitBranch, Layers, Target, UserRound];
const accents = [
  { glow: "from-[#dff7ff] via-[#f7fbff] to-transparent", icon: "from-[#29c3d6] to-[#2783ff]" },
  { glow: "from-[#ffe8ef] via-[#fff7fa] to-transparent", icon: "from-[#ff8a7a] to-[#ff4f88]" },
  { glow: "from-[#e7eeff] via-[#f8faff] to-transparent", icon: "from-[#5a8cff] to-[#34c7d9]" },
  { glow: "from-[#fff0e5] via-[#fff9f5] to-transparent", icon: "from-[#ff9a6b] to-[#ff6a56]" },
  { glow: "from-[#eee9ff] via-[#faf8ff] to-transparent", icon: "from-[#5b8bff] to-[#8c3cf0]" },
];

export default function GrowthShift() {
  return (
    <Section
      id="growth-shift"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]"
      containerClassName="max-w-[1280px]"
    >
      <FadeUp>
        <SectionHeading
          centered
          label="Understand the cause"
          title="Why are these challenges happening?"
          description="Founder-led businesses rarely slow down because of ambition. They slow down when the business starts requiring more structure than the current operating system can support."
          descriptionClassName="max-w-[1080px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[32px] border border-[#dbe4f4] bg-[#0f172a] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.16)] md:p-10">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-44 w-44 rounded-full bg-linear-to-br from-[#27c6d9]/30 via-[#5d8dff]/20 to-transparent blur-3xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-white/82 backdrop-blur">
                  <TrendingUp className="size-3.5" />
                  Internal strain
                </div>
                <h3 className="mt-6 max-w-[460px] text-[clamp(28px,3vw,40px)] font-semibold leading-[1.12] tracking-[-0.035em] text-white">
                  Your business is outgrowing the systems that built it.
                </h3>
                <p className="mt-5 max-w-[480px] text-[16px] leading-[1.8] text-white/78">
                  Most founder-led businesses don&apos;t stall because the owner stopped working hard. They stall when
                  communication, decision-making, and execution can no longer keep pace with the complexity growth creates.
                </p>
              </div>

              {/* <div className="relative mt-10 rounded-[24px] border border-white/14 bg-white/10 p-6 backdrop-blur-md lg:mt-12">
                <p className="text-[15px] leading-[1.75] text-white/84">
                  The shift is not about working harder. It is about building the structure, rhythm, and leadership
                  discipline required for the next stage of growth.
                </p>
              </div> */}
            </div>
          </div>

          <Grid className="grid-cols-1 gap-3.5 lg:min-h-[520px] lg:grid-rows-5">
            {growthShiftPoints.map((item, index) => {
              const Icon = icons[index % icons.length];
              const accent = accents[index % accents.length];

              return (
                <div
                  key={item}
                  className="group soft-panel relative flex overflow-hidden rounded-[22px] border border-[#e8edf5] bg-white px-5 py-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#d9e4f5] hover:shadow-[0_20px_44px_rgba(26,34,56,0.1)]"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute right-0 top-0 h-20 w-20 rounded-full bg-linear-to-br ${accent.glow} opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-center gap-4">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${accent.icon} text-white shadow-[0_12px_24px_rgba(40,56,93,0.14)]`}
                    >
                      <Icon className="size-4" strokeWidth={1.85} />
                    </span>
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] tracking-[0.08em] text-[#111827]">
                        Cause 0{index + 1}
                      </div>
                      <p className="text-[18px] leading-[1.5] tracking-[-0.02em] text-[#162033] md:text-[20px]">
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
    </Section>
  );
}
