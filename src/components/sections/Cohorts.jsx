"use client";

import "swiper/css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { upcomingCohorts } from "@/data/cohorts";

function CohortCard({ cohort }) {
  const batchParam = encodeURIComponent(cohort.city);
  const applyHref = `/?batch=${batchParam}#join`;

  return (
    <div className="cohort-card-ref h-full">
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-[28px_26px_30px]">
        <span className="cohort-tag">{cohort.status}</span>
        <h3 className="mb-2 text-[clamp(20px,6vw,28px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#0d1117]">
          {cohort.city}
        </h3>
        <p className="mb-4 text-[14px] leading-[1.45] text-[#111111] sm:mb-[22px] sm:text-[15px]">{cohort.sublabel}</p>

        <ul className="mb-auto flex flex-col gap-2.5 sm:gap-3">
          {cohort.dates.map((date) => (
            <li
              key={date}
              className="flex items-center gap-2.5 text-left text-[15px] font-semibold leading-[1.35] text-[#111827] sm:text-[16px] sm:leading-[1.4]"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-[#de2c26]" />
              {date}
            </li>
          ))}
        </ul>

        {cohort.href ? (
          <Link
            href={applyHref}
            className="mt-auto inline-flex items-center gap-2 pt-4 text-[14px] font-semibold text-[#de2c26] hover:underline sm:pt-[18px] sm:text-[15px]"
          >
            <span className="button-label">{cohort.ctaLabel}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function Cohorts() {
  return (
    <section id="cohorts" className="overflow-hidden pb-10 pt-0">
      <Container>
        <FadeUp>
          <SectionHeading
            centered
            label="calendar"
            title="Upcoming VEGA Cohorts"
            description="Choose the cohort closest to you and begin your VEGA journey."
            titleClassName="text-[37px] font-medium tracking-[-0.02em]"
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mx-auto hidden max-w-[1240px] gap-5 lg:grid lg:grid-cols-3">
            {upcomingCohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="lg:hidden">
          <Swiper
            spaceBetween={14}
            slidesPerView={1.04}
            breakpoints={{
              520: { slidesPerView: 1.2, spaceBetween: 16 },
              700: { slidesPerView: 1.5, spaceBetween: 16 },
              860: { slidesPerView: 1.85, spaceBetween: 18 },
            }}
          >
            {upcomingCohorts.map((cohort) => (
              <SwiperSlide key={cohort.id} className="!h-auto pb-1">
                <CohortCard cohort={cohort} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUp>
      </Container>
    </section>
  );
}
