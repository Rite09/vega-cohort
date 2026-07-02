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

const companySizeOptions = [
  { value: "", label: "Select...", disabled: true },
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "500+", label: "500+" },
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
          <div className="mx-auto max-w-[1040px]">
            <div className="mx-auto mb-12 flex max-w-[980px] flex-col items-center text-center lg:mb-14">
              <div className="section-eyebrow section-eyebrow--large mb-[18px]">Apply</div>
              <Heading className="section-title-gradient mb-5 w-full text-[clamp(32px,4.2vw,44px)]">
                Join the Next VEGA Cohort
              </Heading>
              <p className="w-full max-w-[900px] text-[17px] leading-[1.75] text-muted">
                Applications are reviewed to ensure every cohort is composed of growth-minded business leaders
                committed to building stronger, more scalable businesses.
              </p>
            </div>

            <Grid className="items-stretch gap-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(340px,0.78fr)] lg:gap-8">
              <div className="flex h-full">
                <div className="flex h-full w-full flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_24px_64px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <div className="relative min-h-[220px]">
                    <Image
                      src={sectionVisuals.apply.src}
                      alt={sectionVisuals.apply.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.16)_40%,rgba(15,23,42,0.86)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-5.5">
                      <div className="font-mono text-[10px] tracking-[0.08em] text-white/72">
                        Your package includes
                      </div>
                      <h3 className="mt-2 max-w-[420px] text-[clamp(18px,2vw,26px)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">
                        A guided path from diagnosis to execution.
                      </h3>
                    </div>
                  </div>

                  <ul className="flex-1 border-t border-white/10 bg-white/92">
                    {packageIncludes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 border-b border-line px-5 py-[14px] text-[14px] text-foreground last:border-b-0"
                      >
                        <span className="size-[6px] shrink-0 rounded-full bg-red" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="apply-form-card flex h-full flex-col overflow-hidden p-0">
                <div className="border-b border-line px-6 py-5 text-center lg:px-7">
                  <Heading as="h3" size="h3" className="mb-2 !font-sans text-[clamp(22px,2.4vw,28px)] font-bold text-[#172235]">
                    Reserve Your Seat
                  </Heading>
                  <p className="text-[14px] leading-[1.6] text-[#425169]">Fill out the form and our team will be in touch soon!</p>
                </div>

                <form className="space-y-4 px-6 py-5 lg:px-7" onSubmit={onSubmit}>
                  <Input
                    label="Full name *"
                    labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                    placeholder="Enter your full name"
                    className="px-4 py-[11px] text-[14px]"
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />

                  <Select
                    label="Which batch are you interested in? *"
                    labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                    className="px-4 py-[11px] text-[14px]"
                    options={cohortOptions}
                    error={errors.batch?.message}
                    {...register("batch")}
                  />

                  <Grid className="gap-4 md:grid-cols-2">
                    <Input
                      label="Company name *"
                      labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                      placeholder="Your company name"
                      className="px-4 py-[11px] text-[14px]"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                    <Input
                      label="Title / role *"
                      labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                      placeholder="Your title"
                      className="px-4 py-[11px] text-[14px]"
                      error={errors.title?.message}
                      {...register("title")}
                    />
                  </Grid>

                  <Grid className="gap-4 md:grid-cols-2">
                    <Input
                      label="Company Email *"
                      labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                      type="email"
                      placeholder="you@company.com"
                      className="px-4 py-[11px] text-[14px]"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Input
                      label="Phone"
                      labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                      type="tel"
                      placeholder="10-digit mobile number"
                      className="px-4 py-[11px] text-[14px]"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </Grid>

                  <Select
                    label="Company size *"
                    labelClassName="mb-2 text-[13px] font-semibold tracking-[-0.01em] text-[#3e4b60]"
                    className="px-4 py-[11px] text-[14px]"
                    options={companySizeOptions}
                    error={errors.companySize?.message}
                    {...register("companySize")}
                  />

                  <Button
                    fullWidth
                    type="submit"
                    className="mt-1 min-h-[48px] !text-[15px] !font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit & Reserve My Seat"}
                  </Button>
                </form>

                <p aria-live="polite" className="px-6 pb-5 lg:px-7 text-sm text-muted">
                  {isSubmitted
                    ? "Thanks. Your cohort application request has been captured and the VEGA team will follow up soon."
                    : ""}
                </p>
              </div>
            </Grid>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
