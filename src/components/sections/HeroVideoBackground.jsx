"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/videocitybg.mp4";
const PLAYBACK_RATE = 0.55;
const CROSSFADE_LEAD_SECONDS = 1.2;
const CROSSFADE_MS = 1200;

const videoClassName =
  "absolute inset-0 h-full w-full scale-[1.03] object-cover object-center brightness-[1.02] contrast-[0.95] saturate-[0.9] transition-opacity duration-[1200ms] ease-in-out";

export default function HeroVideoBackground() {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const activeRef = useRef("a");
  const crossfadingRef = useRef(false);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      videoA.pause();
      videoB.pause();
      return;
    }

    const prepareVideo = (video) => {
      video.playbackRate = PLAYBACK_RATE;
      video.muted = true;
    };

    prepareVideo(videoA);
    prepareVideo(videoB);

    void videoA.play().catch(() => {});

    const crossfade = (fromVideo, toVideo, nextActive) => {
      if (crossfadingRef.current || activeRef.current !== nextActive.from) return;

      crossfadingRef.current = true;
      prepareVideo(toVideo);
      toVideo.currentTime = 0;

      void toVideo.play().catch(() => {});

      fromVideo.style.opacity = "0";
      toVideo.style.opacity = "1";
      activeRef.current = nextActive.to;

      window.setTimeout(() => {
        fromVideo.pause();
        fromVideo.currentTime = 0;
        fromVideo.style.opacity = "0";
        crossfadingRef.current = false;
      }, CROSSFADE_MS);
    };

    const handleTimeUpdate = (primary, secondary, nextActive) => {
      if (!primary.duration || Number.isNaN(primary.duration)) return;

      const remaining = primary.duration - primary.currentTime;
      if (remaining <= CROSSFADE_LEAD_SECONDS) {
        crossfade(primary, secondary, nextActive);
      }
    };

    const onTimeUpdateA = () => {
      if (activeRef.current === "a") {
        handleTimeUpdate(videoA, videoB, { from: "a", to: "b" });
      }
    };

    const onTimeUpdateB = () => {
      if (activeRef.current === "b") {
        handleTimeUpdate(videoB, videoA, { from: "b", to: "a" });
      }
    };

    videoA.addEventListener("timeupdate", onTimeUpdateA);
    videoB.addEventListener("timeupdate", onTimeUpdateB);

    return () => {
      videoA.removeEventListener("timeupdate", onTimeUpdateA);
      videoB.removeEventListener("timeupdate", onTimeUpdateB);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoARef}
        className={videoClassName}
        style={{ opacity: 1 }}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        className={videoClassName}
        style={{ opacity: 0 }}
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 44% 31% at center, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.86) 34%, rgba(255,255,255,0.44) 58%, rgba(255,255,255,0) 75%), linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.74) 100%), radial-gradient(circle at top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 52%)",
        }}
      />
    </div>
  );
}
