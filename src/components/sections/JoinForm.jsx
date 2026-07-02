"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import cohorts from "@/data/cohorts";
import sectionVisuals from "@/data/sectionVisuals";
import { packageIncludes } from "@/constants/site";
import { joinFormDefaultValues, joinFormSchema } from "@/utils/join-form-schema";

const cohortOptions = [
  { value: "", label: "Select...", disabled: true },
  ...cohorts
    .filter((cohort) => cohort.href)
    .flatMap((cohort) =>
      cohort.dates.map((date) => ({
        value: `${cohort.city} - ${date}`,
        label: `${cohort.city} - ${date}`,
      }))
    ),
];

export default function JoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: joinFormDefaultValues,
    resolver: zodResolver(joinFormSchema),
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 500);
    });

    startTransition(() => {
      setIsSubmitted(true);
    });

    reset(joinFormDefaultValues);
  });

  return (
    <section id="join" className="apply-form-band">
      <Container>
        <FadeUp>
          <Grid className="items-start gap-11 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="section-eyebrow section-eyebrow--large mb-[18px]">Apply</div>
              <Heading className="section-title-gradient mb-5 text-[clamp(32px,4.2vw,44px)]">
                Join the Next VEGA Cohort
              </Heading>
              <p className="max-w-[640px] text-[17px] leading-[1.75] text-muted">
                Applications are reviewed to ensure every cohort is composed of growth-minded business leaders
                committed to building stronger, more scalable businesses.
              </p>

              <div className="mt-9 overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_24px_64px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <div className="relative min-h-[280px]">
                  <Image
                    src={sectionVisuals.apply.src}
                    alt={sectionVisuals.apply.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.16)_40%,rgba(15,23,42,0.86)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/56">
                      Your package includes
                    </div>
                    <h3 className="mt-3 text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.12] tracking-[-0.035em] text-white">
                      A guided path from diagnosis to execution.
                    </h3>
                  </div>
                </div>

                <ul className="border-t border-white/10 bg-white/92">
                  {packageIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3.5 border-b border-line px-6 py-[18px] text-[15.5px] text-foreground last:border-b-0"
                    >
                      <span className="size-[6px] shrink-0 rounded-full bg-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="apply-form-card p-8 lg:p-11">
              <Heading as="h3" size="h3" className="mb-1 text-[#172235]">
                Reserve Your Seat
              </Heading>
              <p className="mb-8 text-sm text-muted">Fill out the form and our team will be in touch soon.</p>

              <form className="space-y-[22px]" onSubmit={onSubmit}>
                <Input
                  label="Full Name *"
                  placeholder="Enter your full name"
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />

                <Select
                  label="Which Batch Are You Interested In? *"
                  options={cohortOptions}
                  error={errors.batch?.message}
                  {...register("batch")}
                />

                <Grid className="gap-4 md:grid-cols-2">
                  <Input
                    label="Company Name *"
                    placeholder="Your company name"
                    error={errors.company?.message}
                    {...register("company")}
                  />
                  <Input
                    label="Title / Role *"
                    placeholder="Your title"
                    error={errors.title?.message}
                    {...register("title")}
                  />
                </Grid>

                <Button fullWidth type="submit" showArrow className="group" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>

              <p aria-live="polite" className="mt-4 min-h-6 text-sm text-muted">
                {isSubmitted
                  ? "Thanks. Your cohort application request has been captured and the VEGA team will follow up soon."
                  : ""}
              </p>
            </div>
          </Grid>
        </FadeUp>
      </Container>
    </section>
  );
}
