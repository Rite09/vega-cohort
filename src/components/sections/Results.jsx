"use client";

import Counter from "@/components/animations/Counter";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Testimonials from "@/components/sections/Testimonials";
import stats from "@/data/stats";

export default function Results() {
  return (
    <Section id="results" className="bg-white">
      <FadeUp>
        <SectionHeading
          centered
          label="trackRecord"
          title="Real Businesses. Real Growth. Real Results."
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="stats-bar">
          <div className="stats-bar-inner">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-cell">
                <div>
                  <div className="stat-num">
                    {stat.animate ? (
                      <Counter duration={2} prefix={stat.prefix} suffix={stat.suffix} value={stat.value} />
                    ) : (
                      stat.displayValue
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                {index < stats.length - 1 ? <span className="stat-divider" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.14}>
        <Testimonials embedded />
      </FadeUp>
    </Section>
  );
}
