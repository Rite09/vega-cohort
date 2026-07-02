import Image from "next/image";
import { ArrowUpRight, Dot } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import sectionVisuals from "@/data/sectionVisuals";
import { complexityStages, growthShiftPoints } from "@/constants/site";

export default function GrowthShift() {
  return (
    <Section id="growth-shift" className="bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" containerClassName="max-w-[1280px]">
      <FadeUp>
        <SectionHeading
          centered
          label="Why growth stalls"
          title="Growth changes the way your business needs to operate."
          description="Founder-led businesses rarely slow down because of ambition. They slow down when the business starts requiring more structure than the current operating system can support."
          descriptionClassName="max-w-[1080px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="grid gap-8">
          <Card
            variant="surface"
            className="relative overflow-hidden rounded-[32px] border-[#e8edf5] bg-white p-7 md:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-36 w-36 rounded-full bg-linear-to-br from-[#e9f2ff] via-[#fff7fb] to-transparent opacity-90 blur-3xl"
            />
            <div className="mb-7 flex items-center justify-between gap-4">
              <div className="font-mono text-[11px] tracking-[0.08em] text-[#111827]">
                Internal strain
              </div>
              <span className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#ff7d7d] to-[#ff4f8a] text-white shadow-[0_16px_30px_rgba(255,79,138,0.22)]">
                <ArrowUpRight className="size-[17px]" strokeWidth={1.9} />
              </span>
            </div>

            <p className="mb-6 w-full text-[18px] leading-[1.9] text-[#111111]">
              Most founder-led businesses don&apos;t stall because the owner stopped working hard. They stall because
              your business is outgrowing the systems, communication patterns, leadership habits, and decision-making
              processes that got the business to its current point.
            </p>

            <div className="space-y-3 border-t border-[#ebeef4] pt-5">
              {growthShiftPoints.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-[20px] border border-transparent bg-[#fbfdff] px-4 py-4 transition-colors duration-300 hover:border-[#dce7f6] hover:bg-white"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#ff8e84] to-[#ff5f78] text-white">
                    <Dot className="size-8" strokeWidth={3} />
                  </span>
                  <span className="text-[17px] leading-[1.55] text-[#111111]">
                    {item}
                  </span>
                  <span className="ml-auto font-mono text-[11px] text-[#111827]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)] lg:items-stretch">
            <Card
              variant="panel"
              className="relative rounded-[32px] border-[#e8edf5] bg-white p-7 md:p-9 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-linear-to-br from-[#e3f4ff] via-[#f3f0ff] to-transparent opacity-90 blur-3xl"
              />
              <div className="mb-8 font-mono text-[11px] tracking-[0.08em] text-[#111827]">
                Complexity vs. Founder Capacity
              </div>

              <div className="space-y-5">
                {complexityStages.map((stage, index) => (
                  <div key={stage.label} className="rounded-[22px] border border-[#edf2fa] bg-[#fbfdff] px-5 py-4 shadow-[0_12px_28px_rgba(26,34,56,0.04)]">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-[11px] font-semibold tracking-[0.08em] text-[#111827]">
                        Stage 0{index + 1}
                      </span>
                      <span className="text-[14px] text-[#111111]">{stage.label}</span>
                    </div>
                    <div className="h-3 rounded-full bg-[#e8eef7]">
                      <div
                        className={`h-full rounded-full bg-linear-to-r from-[#27c6d9] via-[#5d8dff] to-[#ff4d7e] ${stage.widthClassName}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="relative overflow-hidden rounded-[36px] border border-[#dbe4f4] bg-[#0f172a] shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
              <div className="relative min-h-[720px]">
                <Image
                  src={sectionVisuals.growthShift.src}
                  alt={sectionVisuals.growthShift.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.26)_36%,rgba(15,23,42,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <div className="rounded-[28px] border border-white/14 bg-white/10 p-6 backdrop-blur-md">
                    <div className="font-mono text-[11px] tracking-[0.08em] text-white/72">
                      Founder reality
                    </div>
                    <h3 className="mt-4 text-[clamp(28px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">
                      Momentum creates complexity. Complexity demands structure.
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-white/78">
                      VEGA helps translate ambition into an operating cadence your team can actually execute, measure,
                      and sustain.
                    </p>
                    <div className="mt-6 grid gap-3">
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4 text-[14px] text-white/82">
                        Better role clarity across the leadership team
                      </div>
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4 text-[14px] text-white/82">
                        Stronger decisions without routing everything through the founder
                      </div>
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4 text-[14px] text-white/82">
                        More consistent execution across functions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
