"use client";
import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Map,
  Presentation,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, startTransition, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import VegaName from "@/components/ui/VegaName";
import { formatSectionLabel } from "@/utils/format-section-label";
import cohorts from "@/data/cohorts";
import { packageIncludes } from "@/constants/site";
import { joinFormDefaultValues } from "@/utils/join-form-schema";

const cohortOptions = [
  { value: "", label: "Select...", disabled: true },
  ...cohorts
    .filter((cohort) => cohort.href)
    .map((cohort) => {
      const combinedDates = cohort.dates.join(" / ");
      const optionLabel = `${cohort.city} - ${combinedDates}`;

      return {
        value: optionLabel,
        label: optionLabel,
      };
    }),
];

const companySizeOptions = [
  { value: "", label: "Select...", disabled: true },
  { value: "1-10 employees", label: "1-10 employees" },
  { value: "11-50 employees", label: "11-50 employees" },
  { value: "51-200 employees", label: "51-200 employees" },
  { value: "201-500 employees", label: "201-500 employees" },
  { value: "500+ employees", label: "500+ employees" },
];

const packageIcons = [BarChart3, ClipboardList, Sparkles, Presentation, Wrench, Map];
const SUCCESS_DISPLAY_MS = 4000;

function BatchPrefill({ setValue }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const batchCity = searchParams.get("batch");

    if (!batchCity) return;

    const selectedBatchOption = cohortOptions.find((option) => option.label.startsWith(`${batchCity} - `));
    if (selectedBatchOption?.value) {
      setValue("batch", selectedBatchOption.value);
    }
  }, [searchParams, setValue]);

  return null;
}

export default function JoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    formState: { errors, isSubmitting },
    clearErrors,
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    control,
  } = useForm({
    defaultValues: joinFormDefaultValues,
  });
  const selectedBatchValue = useWatch({ control, name: "batch" });
  const selectedCompanySizeValue = useWatch({ control, name: "companySize" });

  useEffect(() => {
    if (!isSubmitted) return undefined;

    const timer = window.setTimeout(() => {
      setIsSubmitted(false);
    }, SUCCESS_DISPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [isSubmitted]);

  const onSubmit = handleSubmit(async (formData) => {
    setFormError("");
    clearErrors();

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result?.fieldErrors && typeof result.fieldErrors === "object") {
          Object.entries(result.fieldErrors).forEach(([fieldName, message]) => {
            if (typeof message === "string") {
              setError(fieldName, {
                type: "server",
                message,
              });
            }
          });
        }

        setFormError(result?.message || "Unable to submit the form right now. Please try again.");
        return;
      }

      startTransition(() => {
        setIsSubmitted(true);
      });

      reset(joinFormDefaultValues);
    } catch {
      setFormError("Unable to submit the form right now. Please try again.");
    }
  });

  return (
    <section id="join" className="join-section">
      <Container className="max-w-[1180px]">
        <FadeUp>
          <div className="join-form-layout">
            <div className="join-form-copy">
              <span className="join-form-copy__badge">{formatSectionLabel("reserveYourSpot")}</span>

              <Heading
                as="h2"
                size="h2"
                className="join-form-copy__title mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.08] tracking-[-0.03em]"
              >
                Join the Next <VegaName /> Cohort
              </Heading>

              <p className="join-form-copy__description mt-5 max-w-[520px]">
                Applications are reviewed to ensure every cohort is composed of growth-minded business leaders
                committed to building stronger, more scalable businesses.
              </p>

              <div className="join-form-package mt-10">
                <p className="join-form-package__label">{formatSectionLabel("your package includes")}</p>
                <h3 className="join-form-package__headline">
                  A guided path from diagnosis to execution.
                </h3>
                <ul className="join-form-package__grid">
                  {packageIncludes.map((item, index) => {
                    const Icon = packageIcons[index % packageIcons.length];

                    return (
                      <li key={item} className="join-form-package__tile">
                        <span className="join-form-package__icon" aria-hidden="true">
                          <Icon className="size-4" strokeWidth={2.2} />
                        </span>
                        <span className="join-form-package__text">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="join-form-card flex h-full flex-col">
              {isSubmitted ? (
                <div className="join-form-success" aria-live="polite">
                  <div className="join-form-success__icon-wrap">
                    <CheckCircle2 className="size-9" strokeWidth={2.2} />
                  </div>
                  <h3 className="join-form-success__title">You&apos;re all set!</h3>
                  <p className="join-form-success__message">
                    Thank you for your application. Our team will reach out to you soon.
                  </p>
                  <p className="join-form-success__note">Returning to the form shortly...</p>
                </div>
              ) : (
                <>
                  <div className="join-form-card__header">
                    <h3 className="join-form-card__title">Reserve Your Seat</h3>
                    <p className="join-form-card__subtitle">
                      Fill out the form and our team will be in touch soon!
                    </p>
                  </div>

                  <form className="join-form-card__body join-form-fields" onSubmit={onSubmit}>
                  <Suspense fallback={null}>
                    <BatchPrefill setValue={setValue} />
                  </Suspense>
                  <Input
                    label="Full name *"
                    labelClassName="join-form-label"
                    placeholder="Enter your full name"
                    className="join-form-input"
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />

                  <Select
                    label="Which batch are you interested in? *"
                    labelClassName="join-form-label"
                    className="join-form-input"
                    options={cohortOptions}
                    error={errors.batch?.message}
                    value={selectedBatchValue}
                    {...register("batch")}
                  />

                  <Grid className="join-form-row gap-4 md:grid-cols-2">
                    <Input
                      label="Company name *"
                      labelClassName="join-form-label"
                      placeholder="Your company name"
                      className="join-form-input"
                      error={errors.company?.message}
                      {...register("company")}
                    />
                    <Input
                      label="Title / role *"
                      labelClassName="join-form-label"
                      placeholder="Your title"
                      className="join-form-input"
                      error={errors.title?.message}
                      {...register("title")}
                    />
                  </Grid>

                  <Grid className="join-form-row gap-4 md:grid-cols-2">
                    <Input
                      label="Company Email *"
                      labelClassName="join-form-label"
                      type="email"
                      placeholder="you@company.com"
                      className="join-form-input"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                    <Input
                      label="Phone"
                      labelClassName="join-form-label"
                      type="tel"
                      placeholder="10-digit mobile number"
                      className="join-form-input"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </Grid>

                  <Select
                    label="Company size *"
                    labelClassName="join-form-label"
                    className="join-form-input"
                    options={companySizeOptions}
                    error={errors.companySize?.message}
                    value={selectedCompanySizeValue}
                    {...register("companySize")}
                  />

                  <Button
                    fullWidth
                    type="submit"
                    className="join-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit & Reserve My Seat"}
                  </Button>
                  {formError ? <p className="text-sm text-red-bright">{formError}</p> : null}
                  </form>
                </>
              )}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
