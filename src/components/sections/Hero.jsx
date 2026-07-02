import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#f7f7f4] pb-[74px] pt-[124px] max-[820px]:pt-[108px] max-[640px]:pt-[94px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="h-full w-full scale-[1.03] object-cover object-center brightness-[1.02] contrast-[0.95] saturate-[0.9]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videocitybg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 44% 31% at center, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.86) 34%, rgba(255,255,255,0.44) 58%, rgba(255,255,255,0) 75%), linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.74) 100%), radial-gradient(circle at top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 52%)",
          }}
        />
      </div>

      <Container className="relative z-10 w-full max-w-[1400px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <Heading
            as="h1"
            size="h1"
            className="mx-auto max-w-[1280px] text-[clamp(3.35rem,4.8vw,61px)] font-bold leading-[1.07] tracking-[-0.035em] text-[#333333]"
          >
            <span className="block lg:whitespace-nowrap">Your business is growing.</span>
            <span className="mt-[0.12em] block bg-linear-to-r from-[#e03a42] via-[#c91f2a] to-[#8f1118] bg-clip-text pb-[0.08em] text-transparent">
              Why does it feel harder than ever?
            </span>
          </Heading>

          <p className="mx-auto mt-[34px] max-w-[900px] text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.65] text-[#43506a]">
            As businesses grow, the leadership habits and systems that once fueled success can become the very things
            that limit future growth. <strong className="font-semibold text-[#2b313f]">VEGA</strong> helps founders
            identify what is slowing growth and build the structure, decision-making discipline, and execution rhythm
            needed to scale.
          </p>

          <div className="mt-[38px] flex flex-wrap justify-center gap-[18px] max-[640px]:w-full max-[640px]:gap-3.5">
            <Button
              href="#join"
              className="min-h-[58px] min-w-[250px] px-9 text-[1.12rem] font-bold max-[640px]:w-full max-[640px]:min-w-0 max-[640px]:text-base"
            >
              Register for the Next Cohort
            </Button>
            <Button
              href="#how-it-works"
              variant="ghost"
              className="min-h-[58px] min-w-[250px] px-9 text-[1.12rem] font-bold max-[640px]:w-full max-[640px]:min-w-0 max-[640px]:text-base"
            >
              See How VEGA Works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
