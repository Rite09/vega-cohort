import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import sectionVisuals from "@/data/sectionVisuals";
import processSteps from "@/data/process";

const accents = [
  "from-[#2cc8d8] to-[#2982ff]",
  "from-[#ff8c79] to-[#ff4f8a]",
  "from-[#6b95ff] to-[#7d44ef]",
  "from-[#ffa36c] to-[#ff6464]",
  "from-[#e3ca57] to-[#69cf7b]",
  "from-[#40c5d8] to-[#7b4ef4]",
];

export default function Process() {
  return (
    <Section id="how-it-works" className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" containerClassName="max-w-[1280px]">
      <FadeUp>
        <SectionHeading
          centered
          label="The path"
          title="How the VEGA Cohort Works"
          description="A structured sequence of assessment, coaching, workshops, and implementation support designed to help leaders move from diagnosis to execution."
          descriptionClassName="max-w-[1080px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.22fr)]">
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[36px] border border-[#dfe7f5] bg-[#0f172a] shadow-[0_30px_90px_rgba(15,23,42,0.16)]">
              <div className="relative min-h-[640px]">
                <Image
                  src={sectionVisuals.process.src}
                  alt={sectionVisuals.process.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,25,0.05)_0%,rgba(11,15,25,0.24)_40%,rgba(11,15,25,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <div className="rounded-[28px] border border-white/14 bg-white/10 p-6 backdrop-blur-md">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/58">
                      Delivery format
                    </div>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-3 text-[14px] text-white/84">
                        Assessments and leadership diagnostics
                      </div>
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-3 text-[14px] text-white/84">
                        Strategy debriefs and in-person workshops
                      </div>
                      <div className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-3 text-[14px] text-white/84">
                        Implementation tools and roadmap support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step, index) => {
              const accent = accents[index % accents.length];

              return (
                <div
                  key={step.number}
                  className="group soft-panel relative overflow-hidden rounded-[32px] border border-[#e8edf5] bg-white px-5 py-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#d9e5f6] hover:shadow-[0_26px_58px_rgba(26,34,56,0.12)] md:py-8 md:pl-7 md:pr-6"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1.5 bg-linear-to-b ${accent} opacity-80`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-32 w-32 rounded-full bg-linear-to-br from-[#ecf4ff] via-[#fef7fb] to-transparent opacity-90 blur-3xl"
                  />
                  <div className="grid gap-3 md:grid-cols-[80px_1fr] md:items-start md:gap-4">
                    <div className="flex items-center gap-4 md:block">
                      <div className="font-mono text-[38px] font-semibold tracking-[-0.06em] text-red">{step.number}</div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#7a88a4] md:mt-2">
                        Step {step.number}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[clamp(22px,2.1vw,31px)] leading-[1.2] tracking-[-0.035em] text-[#182236]">
                        {step.title}
                      </h3>
                      {step.description ? (
                        <p className="mt-3 max-w-[760px] text-[17px] leading-[1.8] text-[#455972]">{step.description}</p>
                      ) : null}
                      {step.note ? (
                        <p className="mt-4 inline-flex rounded-full border border-[#f0d8cf] bg-[#fff6f4] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c8302f]">
                          {step.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
