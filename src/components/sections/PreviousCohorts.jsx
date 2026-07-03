"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import VegaName from "@/components/ui/VegaName";
import { previousCohorts } from "@/data/cohorts";

function CohortDateList({ dates, className = "" }) {
  return (
    <ol className={`cohorts-past-timeline ${className}`.trim()}>
      {dates.map((date, index) => (
        <li key={date} className="cohorts-past-timeline__item">
          <span className="cohorts-past-timeline__marker">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[14px] font-semibold leading-[1.45] text-[#172235]">{date}</span>
        </li>
      ))}
    </ol>
  );
}

function PreviousCohortCard({ cohort }) {
  return (
    <div className="cohort-card-ref cohort-card-ref--previous cohort-card-ref--previous-compact w-full">
      <div className="flex flex-col p-6 md:p-7">
        <span className="cohort-tag cohort-tag--complete">{cohort.status}</span>
        <h3 className="cohorts-past-card__title">{cohort.city}</h3>

        <CohortDateList dates={cohort.dates} className="cohorts-past-card__dates" />

        {cohort.href ? (
          <Link href={cohort.href} className="cohorts-past-cta mt-6 inline-flex w-full items-center justify-center gap-2">
            <span className="button-label">{cohort.ctaLabel}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function PastCohortSpotlight({ cohort }) {
  return (
    <div className="cohorts-past-spotlight">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(196,30,36,0.22)] bg-white/90 px-4 py-2 text-[13px] font-bold tracking-[0.06em] text-[#c41e24]">
        <MapPin className="size-3.5 text-[#c41e24]" />
        completed cohort
      </div>

      <h3 className="mt-5 max-w-[460px] text-[clamp(26px,2.8vw,36px)] font-semibold leading-[1.14] tracking-[-0.03em] text-[#0f172a]">
        A completed <VegaName /> cohort in {cohort.city.split(",")[0]}.
      </h3>

      <p className="mt-4 max-w-[480px] text-[16px] leading-[1.75] text-[#516178]">
        Leaders came together for two focused sessions to diagnose growth friction, strengthen leadership
        systems, and leave with a clearer roadmap for scale.
      </p>
    </div>
  );
}

export default function PreviousCohorts() {
  const cohort = previousCohorts[0];

  return (
    <section id="previous-cohorts" className="overflow-hidden pb-6 pt-8 md:pb-8">
      <Container>
        <FadeUp>
          <SectionHeading
            centered
            label="pastCohorts"
            title="Previous VEGA Cohorts"
            titleClassName="text-[37px] font-medium tracking-[-0.02em]"
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="cohorts-past-layout mx-auto max-w-[1120px]">
            {cohort ? <PastCohortSpotlight cohort={cohort} /> : null}

            <div className="cohorts-past-card-wrap">
              {previousCohorts.map((item) => (
                <PreviousCohortCard key={item.id} cohort={item} />
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
