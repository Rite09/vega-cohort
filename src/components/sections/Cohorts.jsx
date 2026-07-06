"use client";

import "swiper/css";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { upcomingCohorts } from "@/data/cohorts";

function CohortCard({ cohort }) {
  return (
    <div className="cohort-card-ref h-full">
      <div className="flex flex-1 flex-col p-[28px_26px_30px]">
        <h3 className="mb-2 text-[clamp(22px,2vw,28px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#0d1117]">
          {cohort.city}
        </h3>
        <p className="mb-[22px] text-[15px] leading-[1.45] text-[#111111]">{cohort.sublabel}</p>

        <ul className="mb-auto flex flex-col gap-3">
          {cohort.dates.map((date) => (
            <li
              key={date}
              className="flex items-center gap-2.5 text-left text-[16px] font-semibold leading-[1.4] text-[#111827]"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-[#de2c26]" />
              {date}
            </li>
          ))}
        </ul>

        {cohort.href ? (
          <a
            href={cohort.href}
            className="mt-auto inline-flex items-center gap-2 pt-[18px] text-[15px] font-semibold text-[#de2c26] hover:underline"
          >
            <span className="button-label">{cohort.ctaLabel}</span>
            <ArrowRight className="size-3.5" />
          </a>
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
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              860: { slidesPerView: 2.2 },
            }}
          >
            {upcomingCohorts.map((cohort) => (
              <SwiperSlide key={cohort.id} className="!h-auto">
                <CohortCard cohort={cohort} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUp>
      </Container>
    </section>
  );
}
