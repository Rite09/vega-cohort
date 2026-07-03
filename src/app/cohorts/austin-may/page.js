import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  MapPin,
  MessageSquareQuote,
  Presentation,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import VegaName from "@/components/ui/VegaName";
import { previousCohorts } from "@/data/cohorts";
import sectionVisuals from "@/data/sectionVisuals";
import testimonials from "@/data/testimonials";
import { formatSectionLabel } from "@/utils/format-section-label";
import { formatVegaText } from "@/utils/format-vega-text";
import styles from "@/app/cohorts/austin-may/page.module.css";

const cohort = previousCohorts.find((item) => item.id === "austin-may");

const seminarGallery = [
  sectionVisuals.process,
  sectionVisuals.apply,
  sectionVisuals.whatIsVega,
];

const cohortHighlights = [
  {
    title: "Leadership diagnostics",
    description:
      "Founders and leadership teams worked through structured assessments to clarify growth stage, communication patterns, and execution bottlenecks.",
    icon: BarChart3,
  },
  {
    title: "In-person workshop sessions",
    description:
      "Attendees moved through facilitated strategy sessions, debriefs, and practical exercises built around real operating decisions.",
    icon: Presentation,
  },
  {
    title: "Actionable takeaways",
    description:
      "Every session focused on turning insight into a clearer roadmap, stronger team alignment, and next-step execution discipline.",
    icon: Target,
  },
];

const featuredReviews = testimonials.items.slice(0, 3);

export const metadata = {
  title: "Austin, TX Cohort | VEGA",
  description: "See highlights, workshop moments, and participant reviews from the Austin VEGA cohort.",
};

export default function AustinMayCohortPage() {
  return (
    <main className={`${styles.page} pb-24 pt-32 md:pt-36`}>
      <Container className="max-w-[1280px]">
        <Link href="/#previous-cohorts" className={styles.backLink}>
          <ArrowLeft className="size-4" />
          Back to previous cohorts
        </Link>

        <section className={styles.heroGrid}>
          <div className={styles.heroPanel}>
            <div className={styles.heroBadgeRow}>
              <span className={styles.statusBadge}>{cohort.status}</span>
              <span className={styles.recapBadge}>
                <Sparkles className="size-3.5" />
                austin cohort recap
              </span>
            </div>

            <h1 className={styles.heroTitle}>Austin, TX</h1>

            <p className={styles.heroCopy}>
              A look back at the Austin {formatVegaText("VEGA cohort")} experience, including the workshop environment, growth-focused
              sessions, and what previous participants had to say about the program.
            </p>

            <ol className={styles.dateList}>
              {cohort.dates.map((date, index) => (
                <li key={date} className={styles.dateItem}>
                  <span className={styles.dateMarker}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.dateText}>{date}</span>
                </li>
              ))}
            </ol>

            <div className={styles.metaRow}>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>location</div>
                <div className={styles.metaValue}>
                  <MapPin className="size-4 text-[#ff8a82]" />
                  Austin, TX
                </div>
              </div>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>format</div>
                <div className={styles.metaValue}>
                  <Users className="size-4 text-[#ff8a82]" />
                  in-person cohort
                </div>
              </div>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>highlights</div>
                <div className={styles.metaValue}>
                  <MessageSquareQuote className="size-4 text-[#ff8a82]" />
                  reviews included
                </div>
              </div>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={styles.galleryHero}>
              <Image
                src={seminarGallery[0].src}
                alt={seminarGallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                priority
              />
              <div className={styles.galleryCaption}>
                <div className={styles.galleryCaptionLabel}>workshop setting</div>
                <div className={styles.galleryCaptionTitle}>
                  Strategy-led sessions designed for real operating conversations.
                </div>
              </div>
            </div>

            <div className={styles.galleryGrid}>
              {seminarGallery.slice(1).map((image) => (
                <div key={image.src} className={styles.galleryTile}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightsIntro}>
              <div className={styles.sectionHeader}>
                <div className="section-eyebrow mb-5">{formatSectionLabel("what happened")}</div>
                <Heading className="!bg-none text-[clamp(32px,3.6vw,44px)] tracking-[-0.03em] text-[#0f172a] [-webkit-text-fill-color:#0f172a]">
                  See how the Austin cohort was structured
                </Heading>
                <p className="mt-5 text-[17px] leading-[1.8] text-[#4a5e79]">
                  Two focused in-person sessions built around assessment, facilitated workshops, and practical
                  implementation planning for growth-minded leaders.
                </p>
              </div>
            </div>

            <div className={styles.highlightsCards}>
              {cohortHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className={styles.highlightCard}>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#f0d8cf] bg-[#fff6f4] text-[#c41e24]">
                        <Icon className="size-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className={styles.highlightIndex}>highlight 0{index + 1}</div>
                        <h3 className={styles.highlightTitle}>{item.title}</h3>
                        <p className={styles.highlightCopy}>{item.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.reviewsBand}>
          <div className="mx-auto max-w-[760px] text-center">
            <div className="section-eyebrow mx-auto mb-5">{formatSectionLabel("participant reviews")}</div>
            <Heading className="!bg-none text-[clamp(32px,3.6vw,44px)] tracking-[-0.03em] text-[#0f172a] [-webkit-text-fill-color:#0f172a]">
              What previous participants said
            </Heading>
          </div>

          <div className={styles.reviewsGrid}>
            {featuredReviews.map((item) => (
              <article key={item.id} className={styles.reviewCard}>
                <p className={styles.reviewQuote}>&ldquo;{formatVegaText(item.quote)}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <p className={styles.reviewName}>{item.name}</p>
                  <p className={styles.reviewRole}>{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <div>
              <div className="section-eyebrow mb-5">{formatSectionLabel("next step")}</div>
              <Heading className="section-title-gradient text-[clamp(30px,3.6vw,44px)]">
                Want to join the next <VegaName /> cohort?
              </Heading>
              <p className="mt-5 max-w-[620px] text-[17px] leading-[1.8] text-[#4a3d58]">
                Explore the upcoming calendar and apply for the next available cohort if you want the same structured,
                in-person {formatVegaText("VEGA experience")}.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Button href="/#cohorts" variant="ghost">
                View upcoming cohorts
              </Button>
              <Button href="/#join" showArrow className="group">
                Reserve my seat
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
