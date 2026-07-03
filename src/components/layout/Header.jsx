"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/components/layout/Header.module.css";
import VegaName from "@/components/ui/VegaName";
import { cn } from "@/utils/cn";

const MENU_ITEMS = [
  { label: "home", href: "/", sectionId: "top" },
  { label: "partnerships", href: "/#what-is-vega", sectionId: "what-is-vega" },
  { label: "register", href: "/#join", sectionId: "join" },
];

const NAV_OFFSET = 120;

function getActiveSectionFromScroll() {
  const join = document.getElementById("join");
  if (join && join.getBoundingClientRect().top <= NAV_OFFSET) {
    return "join";
  }

  const partnerships = document.getElementById("what-is-vega");
  if (partnerships && partnerships.getBoundingClientRect().top <= NAV_OFFSET) {
    return "what-is-vega";
  }

  return "top";
}

function useActiveNavSection() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState("top");

  const navigateToSection = useCallback(
    (sectionId) => {
      setActiveSection(sectionId);
      pendingSectionRef.current = sectionId;

      if (pathname !== "/") {
        router.push(sectionId === "top" ? "/" : `/#${sectionId}`);
        return;
      }

      if (sectionId === "top") {
        window.history.replaceState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(sectionId);
      if (!element) return;

      window.history.replaceState(null, "", `/#${sectionId}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [pathname, router]
  );

  useEffect(() => {
    if (pathname !== "/") {
      pendingSectionRef.current = null;
      return undefined;
    }

    const hash = window.location.hash.replace("#", "");
    const hashSection = MENU_ITEMS.find((item) => item.sectionId === hash)?.sectionId;

    if (hashSection) {
      setActiveSection(hashSection);
      pendingSectionRef.current = hashSection;
      requestAnimationFrame(() => {
        if (hashSection === "top") {
          window.scrollTo({ top: 0, behavior: "auto" });
          return;
        }
        document.getElementById(hashSection)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else {
      setActiveSection(getActiveSectionFromScroll());
    }

    let frameId = 0;

    const syncActiveSection = () => {
      const pending = pendingSectionRef.current;
      if (pending) {
        if (pending === "top") {
          if (window.scrollY <= 80) {
            pendingSectionRef.current = null;
          } else {
            return;
          }
        } else {
          const pendingElement = document.getElementById(pending);
          if (pendingElement && pendingElement.getBoundingClientRect().top <= NAV_OFFSET + 24) {
            pendingSectionRef.current = null;
          } else {
            return;
          }
        }
      }

      const nextSection = getActiveSectionFromScroll();
      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    const tick = () => {
      syncActiveSection();
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return {
    activeSection: pathname === "/" ? activeSection : null,
    navigateToSection,
  };
}

const activeNavClassName =
  "rounded-[18px] border border-[rgba(204,32,40,0.18)] bg-[rgba(255,250,250,0.94)] text-[#b51d22] shadow-none hover:bg-[rgba(255,250,250,0.94)] hover:text-[#b51d22] hover:shadow-none";

const DESKTOP_ITEMS = MENU_ITEMS;

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

function DesktopNavItem({ href, isActive, label, onSelect }) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onSelect();
      }}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative isolate inline-flex min-h-[38px] items-center justify-center overflow-hidden rounded-full px-[18px] py-[10px] text-[15px] font-semibold text-[#2b3343] transition-[color,background-color,box-shadow,border-color] duration-200 hover:bg-[rgba(43,51,67,0.05)] hover:text-[#111827] hover:shadow-[inset_0_0_0_1px_rgba(43,51,67,0.04)]",
        isActive && activeNavClassName
      )}
    >
      {isActive ? (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-20 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(204,32,40,0.16)_0%,rgba(204,32,40,0)_68%),linear-gradient(135deg,rgba(204,32,40,0.08),rgba(255,145,42,0.1))]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-[1px] -z-10 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,244,244,0.92)_100%)]"
          />
        </>
      ) : null}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

function MobileNavItem({ href, isActive, label, onSelect, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onSelect();
        onNavigate();
      }}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative isolate flex min-h-[52px] items-center overflow-hidden rounded-[18px] px-[18px] text-base font-semibold transition-[transform,background-color,color] duration-200",
        isActive
          ? activeNavClassName
          : "bg-[#f7f9ff] text-[#242a38] hover:translate-x-1 hover:bg-[linear-gradient(90deg,#edf6ff_0%,#f7f0ff_100%)] hover:text-[#4a3cf4]"
      )}
    >
      {isActive ? (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-20 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(204,32,40,0.16)_0%,rgba(204,32,40,0)_68%),linear-gradient(135deg,rgba(204,32,40,0.08),rgba(255,145,42,0.1))]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-[1px] -z-10 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,244,244,0.92)_100%)]"
          />
        </>
      ) : null}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export default function Header() {
  const { activeSection, navigateToSection } = useActiveNavSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div ref={navRef} className={styles.inner}>
        <BrandMark />

        <nav
          aria-label="Desktop navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[34px] min-[1025px]:inline-flex"
        >
          {DESKTOP_ITEMS.map((item) => (
            <DesktopNavItem
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.sectionId}
              onSelect={() => navigateToSection(item.sectionId)}
            />
          ))}
        </nav>

        <Link
          href="/"
          className="ml-6 hidden shrink-0 items-center justify-end min-[1025px]:inline-flex"
          aria-label="Go to home page"
        >
          <Image
            src="/vrt_logo.png"
            alt="VRT Management Group logo"
            width={160}
            height={92}
            className="h-[72px] w-auto object-contain"
          />
        </Link>

        <div className="relative shrink-0 min-[1025px]:hidden">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="home-nav-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(255,145,42,0.9)] bg-[rgba(255,255,255,0.92)] shadow-[0_14px_28px_rgba(255,145,42,0.12)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,145,42,0.18)] max-[640px]:h-12 max-[640px]:w-12"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="inline-flex flex-col gap-1" aria-hidden="true">
              <span className="h-0.5 w-[18px] rounded-full bg-[#f38b18]" />
              <span className="h-0.5 w-[18px] rounded-full bg-[#f38b18]" />
              <span className="h-0.5 w-[18px] rounded-full bg-[#f38b18]" />
            </span>
          </button>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                id="home-nav-menu"
                className="absolute right-0 top-[calc(100%+14px)] w-[min(320px,calc(100vw-40px))] rounded-[26px] border border-[rgba(217,224,238,0.95)] bg-[rgba(255,255,255,0.98)] p-[18px] shadow-[0_28px_60px_rgba(26,34,56,0.14)]"
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-3 text-[0.74rem] font-bold tracking-[0.08em] text-[#111827]">
                  Navigate <VegaName />
                </p>
                <nav className="grid gap-2.5" aria-label="Homepage navigation">
                  {MENU_ITEMS.map((item) => (
                    <MobileNavItem
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      isActive={activeSection === item.sectionId}
                      onSelect={() => navigateToSection(item.sectionId)}
                      onNavigate={() => setIsMenuOpen(false)}
                    />
                  ))}
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
