"use client";

import { useEffect, useState } from "react";

export default function useHeaderScroll(offset = 24) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const syncHeaderState = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsSolid(scrollY > offset);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
    };
  }, [offset]);

  return isSolid;
}
