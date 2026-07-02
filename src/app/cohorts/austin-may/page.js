import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, MessageSquareQuote, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { previousCohorts } from "@/data/cohorts";
import sectionVisuals from "@/data/sectionVisuals";
import testimonials from "@/data/testimonials";

const cohort = previousCohorts.find((item) => item.id === "austin-may");

const seminarGallery = [
  sectionVisuals.process,
  sectionVisuals.apply,
  sectionVisuals.whatIsVega,
];

const cohortHighlights = [
  {
    title: "Leadership diagnostics",
    description: "Founders and leadership teams worked through structured assessments to clarify growth stage, communication patterns, and execution bottlenecks.",
  },
  {
    title: "In-person workshop sessions",
    description: "Attendees moved through facilitated strategy sessions, debriefs, and practical exercises built around real operating decisions.",
  },
  {
    title: "Actionable takeaways",
    description: "Every session focused on turning insight into a clearer roadmap, stronger team alignment, and next-step execution discipline.",
  },
];

const featuredReviews = testimonials.items.slice(0, 3);

export const metadata = {
  title: "Austin, TX Cohort | VEGA",
  description: "See highlights, workshop moments, and participant reviews from the Austin VEGA cohort.",
};

export default function AustinMayCohortPage() {
  return (
    <main className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_42%,#ffffff_100%)] pb-24 pt-32 md:pt-36">
      <Container className="max-w-[1280px]">
        <section className="rounded-[38px] border border-[#dfe7f5] bg-white/88 p-8 shadow-[0_24px_72px_rgba(15,23,42,0.08)] backdrop-blur md:p-10 lg:p-12">
          <Link
            href="/#previous-cohorts"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#53657f] transition-colors hover:text-[#111827]"
          >
            <ArrowLeft className="size-4" />
            Back to previous cohorts
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9e4f4] bg-[#fbfdff] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#7a88a4]">
                <span className="rounded-full bg-[#edf7ef] px-3 py-1 text-[#6a9b78]">{cohort.status}</span>
                Austin cohort recap
              </div>

              <Heading as="h1" size="h1" className="mt-6 max-w-[780px] text-[clamp(42px,5vw,68px)] tracking-[-0.04em]">
                Austin, TX
              </Heading>

              <p className="mt-6 max-w-[760px] text-[18px] leading-[1.85] text-[#4a5e79]">
                A look back at the Austin VEGA cohort experience, including the workshop environment, growth-focused
                sessions, and what previous participants had to say about the program.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {cohort.dates.map((date) => (
                  <div
                    key={date}
                    className="inline-flex items-center gap-3 rounded-[18px] border border-[#e5ecf7] bg-[#fbfdff] px-5 py-4 text-[15px] font-semibold text-[#22304a] shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
                  >
                    <CalendarDays className="size-4 text-[#c81f2a]" />
                    {date}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-[#e5ecf7] bg-[#fbfdff] px-5 py-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a88a4]">Location</div>
                  <div className="mt-3 flex items-center gap-2 text-[18px] font-semibold text-[#182236]">
                    <MapPin className="size-4 text-[#c81f2a]" />
                    Austin, TX
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#e5ecf7] bg-[#fbfdff] px-5 py-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a88a4]">Format</div>
                  <div className="mt-3 flex items-center gap-2 text-[18px] font-semibold text-[#182236]">
                    <Users className="size-4 text-[#c81f2a]" />
                    In-person cohort
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#e5ecf7] bg-[#fbfdff] px-5 py-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a88a4]">Highlights</div>
                  <div className="mt-3 flex items-center gap-2 text-[18px] font-semibold text-[#182236]">
                    <MessageSquareQuote className="size-4 text-[#c81f2a]" />
                    Reviews included
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative overflow-hidden rounded-[30px] border border-[#dfe7f5] bg-[#0f172a] shadow-[0_24px_72px_rgba(15,23,42,0.14)]">
                <div className="relative min-h-[280px]">
                  <Image
                    src={seminarGallery[0].src}
                    alt={seminarGallery[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,25,0.1)_0%,rgba(11,15,25,0.82)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/58">Workshop setting</div>
                    <div className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
                      Strategy-led sessions designed for real operating conversations.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {seminarGallery.slice(1).map((image) => (
                  <div
                    key={image.src}
                    className="relative overflow-hidden rounded-[26px] border border-[#dfe7f5] bg-white shadow-[0_16px_42px_rgba(15,23,42,0.08)]"
                  >
                    <div className="relative min-h-[220px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 220px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-[34px] border border-[#e3eaf6] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-9">
            <div className="section-eyebrow mb-5">What Happened</div>
            <Heading className="!bg-none text-[38px] tracking-[-0.03em] text-[#0f172a] [-webkit-text-fill-color:#0f172a]">
              See how the Austin cohort was structured
            </Heading>
            <div className="mt-8 grid gap-4">
              {cohortHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[#ecf1f9] bg-[#fbfdff] px-5 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a88a4]">Highlight 0{index + 1}</div>
                  <h3 className="mt-3 text-[24px] leading-[1.2] tracking-[-0.03em] text-[#182236]">{item.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.8] text-[#4a5e79]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#e3eaf6] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-9">
            <div className="section-eyebrow mb-5">Participant Reviews</div>
            <Heading className="!bg-none text-[38px] tracking-[-0.03em] text-[#0f172a] [-webkit-text-fill-color:#0f172a]">
              What previous participants said
            </Heading>
            <div className="mt-8 grid gap-4">
              {featuredReviews.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[24px] border border-[#e9eef8] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-[17px] leading-[1.8] text-[#24344d]">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-[#eef2f9] pt-4">
                    <p className="text-[15px] font-semibold text-[#111827]">{item.name}</p>
                    <p className="mt-1 text-[13px] leading-[1.6] text-[#667085]">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[34px] border border-[#dfe7f5] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="section-eyebrow section-eyebrow--large mx-auto mb-5">Next Step</div>
            <Heading className="section-title-gradient text-[clamp(34px,4vw,50px)]">Want to join the next VEGA cohort?</Heading>
            <p className="mt-5 text-[17px] leading-[1.8] text-[#4a5e79]">
              Explore the upcoming calendar and apply for the next available cohort if you want the same structured,
              in-person VEGA experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/#cohorts" showArrow className="group">
                View Upcoming Cohorts
              </Button>
              <Button href="/#join" variant="ghost">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
