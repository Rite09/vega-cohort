"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import founder from "@/data/founder";

function emphasizeMetrics(paragraph) {
  return paragraph
    .replace("39 years", "<strong>39 years</strong>")
    .replace("GE", "<strong>GE</strong>")
    .replace("Global Quality Leader", "<strong>Global Quality Leader</strong>")
    .replace("Senior Vice President", "<strong>Senior Vice President</strong>")
    .replace("Lean Six Sigma Master Black Belt", "<strong>Lean Six Sigma Master Black Belt</strong>")
    .replace("1,428 entrepreneurs, SMBs, and leadership teams", "<strong>1,428 entrepreneurs, SMBs, and leadership teams</strong>")
    .replace("$526 million in measurable financial impact", "<strong>$526 million in measurable financial impact</strong>");
}

export default function Founder() {
  return (
    <Section id="founder" noBorder className="founder-section border-b border-line py-[clamp(72px,8vw,100px)]">
      <FadeUp>
        <SectionHeading
          centered
          label="Leadership"
          title={`Meet ${founder.name}`}
          titleClassName="!bg-none font-medium text-[37px] tracking-[-0.02em] text-[#08090d] [-webkit-text-fill-color:#08090d]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="founder-layout">
          <motion.div
            className="founder-card"
            whileHover={{ y: -6, transition: { duration: 0.35 } }}
          >
            <div className="absolute inset-0">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-[center_18%]"
              />
              <div className="founder-card__overlay" />
            </div>
            <div className="founder-card__content">
              <h3>{founder.name}</h3>
              <div className="founder-card__role">{founder.role}</div>
              <div className="founder-stat-row">
                {founder.stats.map((stat) => (
                  <div key={stat.label} className="founder-stat">
                    <div className="n">{stat.displayValue}</div>
                    <div className="l">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="founder-text-panel">
            {founder.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                dangerouslySetInnerHTML={{ __html: emphasizeMetrics(paragraph) }}
              />
            ))}

            <blockquote className="founder-quote">
              <span className="founder-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="founder-quote-text">{founder.quote}</p>
              <span className="founder-quote-mark founder-quote-mark--end" aria-hidden="true">
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
