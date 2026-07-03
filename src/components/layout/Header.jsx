"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/components/layout/Header.module.css";
import { cn } from "@/utils/cn";

function BrandMark() {
  return (
    <Link href="/" className="inline-flex min-w-0 items-center" aria-label="Go to home page">
      <Image
        src="/vega_logo.png"
        alt="VEGA logo"
        width={190}
        height={72}
        priority
        className="h-[84px] w-auto object-contain max-[820px]:h-[62px] max-[520px]:h-[50px]"
      />
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let lastScrolled = false;

    const syncScrolled = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const nextScrolled = scrollY > 24;

      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      syncScrolled();
    };

    const tick = () => {
      syncScrolled();
      frameId = window.requestAnimationFrame(tick);
    };

    syncScrolled();
    frameId = window.requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <BrandMark />

        <Link
          href="/"
          className="ml-auto inline-flex shrink-0 items-center justify-end"
          aria-label="Go to home page"
        >
          <Image
            src="/vrt_logo.png"
            alt="VRT Management Group logo"
            width={160}
            height={92}
            className="h-[72px] w-auto object-contain max-[820px]:h-[58px] max-[520px]:h-[48px]"
          />
        </Link>
      </div>
    </header>
  );
}
