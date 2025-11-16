// src/hooks/useScrambleText.ts
"use client";

import { useEffect, useRef, useState } from "react";

export const useScrambleText = () => {
  const [display, setDisplay] = useState("");
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:<>/?";

  const scrambleOnce = (target: string, duration = 800) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;

    const step = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const progress = Math.min(1, elapsed / duration);

      const revealCount = Math.floor(progress * target.length);
      let out = "";

      for (let i = 0; i < target.length; i++) {
        if (i < revealCount) out += target[i];
        else out += chars[Math.floor(Math.random() * chars.length)];
      }

      setDisplay(out);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { display, scrambleOnce };
};

export default useScrambleText;
