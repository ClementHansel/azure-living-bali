// src/hooks/useScrollLock.ts
"use client";

import { useEffect, useRef, useState } from "react";

export const useScrollLock = (threshold = 0.6) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // lock when intersection ratio is >= threshold, unlock otherwise
        if (entry.intersectionRatio >= threshold) {
          document.body.style.overflow = "hidden";
          setIsLocked(true);
        } else {
          document.body.style.overflow = "";
          setIsLocked(false);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      document.body.style.overflow = "";
    };
  }, [threshold]);

  const unlockScroll = () => {
    document.body.style.overflow = "";
    setIsLocked(false);
  };

  return { sectionRef, isLocked, unlockScroll };
};

export default useScrollLock;
