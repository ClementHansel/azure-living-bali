// src/components/header/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuPanel from "./MenuPanel";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Update header height for MenuPanel offset
  useEffect(() => {
    if (!headerRef.current) return;

    const resize = () => setHeaderHeight(headerRef.current!.offsetHeight);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Track scroll to toggle background
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <div
        ref={headerRef}
        className={`
          fixed top-0 left-0 w-full z-200
          flex items-center justify-between
          px-6 py-4
          transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-xl bg-white/70 border-b border-white/20"
              : "bg-transparent border-none"
          }
          overflow-visible
        `}
      >
        {/* LOGO */}
        <div className="text-lg font-semibold tracking-tight text-black whitespace-nowrap">
          NEO THE AGENCY
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="
            relative 
            w-14 h-14
            flex items-center justify-center
            shrink-0
            overflow-visible
            z-500
          "
        >
          {/* TOP LINE */}
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, translateY: -2 }
                : { rotate: 0, translateY: -8 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-7 h-0.5 bg-black rounded-full"
          />

          {/* MIDDLE LINE */}
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-7 h-0.5 bg-black rounded-full"
          />

          {/* BOTTOM LINE */}
          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, translateY: 2 }
                : { rotate: 0, translateY: 8 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-7 h-0.5 bg-black rounded-full"
          />
        </button>
      </div>

      {/* MENU PANEL */}
      <MenuPanel open={menuOpen} headerHeight={headerHeight} />
    </>
  );
}
