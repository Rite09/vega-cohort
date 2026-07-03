"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatVegaText } from "@/utils/format-vega-text";
import testimonials from "@/data/testimonials";

function TestimonialCard({ item, onToggleMotion, onPause, onResume }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggleMotion();
    }
  };

  return (
    <article
      className="testimonial-card"
      role="button"
      tabIndex={0}
      onClick={onToggleMotion}
      onKeyDown={handleKeyDown}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocus={onPause}
      onBlur={onResume}
    >
      <blockquote className="testimonial-card__quote">&ldquo;{formatVegaText(item.quote)}&rdquo;</blockquote>
      <div className="testimonial-card__author">
        <p className="testimonial-card__name">{item.name}</p>
        <p className="testimonial-card__role">{item.role}</p>
      </div>
    </article>
  );
}

export function TestimonialsMarquee({ className = "" }) {
  const marqueeRef = useRef(null);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [...testimonials.items, ...testimonials.items];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const syncViewport = () => setIsCompactViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isCompactViewport || isPaused || !marqueeRef.current) {
      return undefined;
    }

    const marquee = marqueeRef.current;
    let intervalId = 0;
    let startId = 0;

    const startAutoScroll = () => {
      const resetPoint = marquee.scrollWidth / 2;

      if (resetPoint <= marquee.clientWidth) {
        startId = window.setTimeout(startAutoScroll, 180);
        return;
      }

      if (marquee.scrollLeft >= resetPoint) {
        marquee.scrollLeft -= resetPoint;
      }

      intervalId = window.setInterval(() => {
        const halfway = marquee.scrollWidth / 2;

        if (halfway <= marquee.clientWidth) {
          return;
        }

        marquee.scrollLeft += 1;

        if (marquee.scrollLeft >= halfway) {
          marquee.scrollLeft -= halfway;
        }
      }, 56);
    };

    startAutoScroll();

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(startId);
    };
  }, [isCompactViewport, isPaused]);

  const handleToggleMotion = () => {
    if (!isCompactViewport) return;
    setIsPaused((current) => !current);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div className={className}>
      <div className="testimonials-stage">
        <div ref={marqueeRef} className="testimonials-marquee">
          <div className={`testimonials-marquee__track${isPaused ? " testimonials-marquee__track--paused" : ""}`}>
            {slides.map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                item={item}
                onToggleMotion={handleToggleMotion}
                onPause={handlePause}
                onResume={handleResume}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ embedded = false }) {
  const content = (
    <>
      <Container className="max-w-[min(1600px,calc(100%-32px))] px-4 lg:px-6">
        <SectionHeading
          centered
          className="mb-9"
          title={testimonials.title}
          titleClassName="text-[37px] font-medium tracking-[-0.02em]"
        />
      </Container>
      <TestimonialsMarquee />
    </>
  );

  if (embedded) {
    return <div className="testimonials testimonials--inline">{content}</div>;
  }

  return (
    <section className="testimonials" id="testimonials">
      {content}
    </section>
  );
}
