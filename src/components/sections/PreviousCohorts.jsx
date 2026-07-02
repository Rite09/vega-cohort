"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { previousCohorts } from "@/data/cohorts";

function PreviousCohortCard({ cohort }) {
  return (
    <div className="cohort-card-ref cohort-card-ref--previous w-full min-h-[280px]">
      <div className="flex flex-1 flex-col p-8 md:p-9">
        <span className="cohort-tag cohort-tag--complete">{cohort.status}</span>
        <h3 className="mb-6 text-[clamp(26px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#0d1117]">
          {cohort.city}
        </h3>

        <ul className="flex flex-col gap-4">
          {cohort.dates.map((date) => (
            <li
              key={date}
              className="flex items-center gap-3 text-left text-[17px] font-semibold leading-[1.4] text-[#111827]"
            >
              <span className="size-2 shrink-0 rounded-full bg-[#de2c26]" />
              {date}
            </li>
          ))}
        </ul>

        {cohort.href ? (
          <Link
            href={cohort.href}
            className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-semibold text-[#c81f2a] transition-colors hover:text-[#9f1820] hover:underline"
          >
            <span>{cohort.ctaLabel}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function PreviousCohorts() {
  return (
    <section id="previous-cohorts" className="overflow-hidden pb-10 pt-14">
      <Container>
        <FadeUp>
          <SectionHeading
            centered
            label="Past cohorts"
            title="Previous VEGA Cohorts"
            titleClassName="text-[37px] font-medium tracking-[-0.02em]"
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mx-auto grid w-full max-w-[1240px] gap-5 lg:grid-cols-3">
            {previousCohorts.map((cohort) => (
              <div key={cohort.id} className="lg:col-start-2">
                <PreviousCohortCard cohort={cohort} />
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
