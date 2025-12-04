// src/components/header/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuPanel from "./MenuPanel";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to toggle background and text color
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine colors based on scroll and menu open
  const isActive = scrolled || menuOpen; // header is "active" when scrolled or menu open
  const headerBgClass = isActive
    ? "backdrop-blur-xl bg-white/90 border-b border-white/20"
    : "bg-transparent border-none";
  const textColorClass = isActive ? "text-black" : "text-white";
  const lineColorClass = isActive ? "bg-black" : "bg-white";

  return (
    <>
      {/* HEADER */}
      <div
        ref={headerRef}
        className={`
    fixed top-0 left-0 w-full z-200
    flex justify-center items-center
    px-6 py-4
    transition-all duration-300
    ${headerBgClass}
    overflow-visible
  `}
      >
        {/* LOGO */}
        <div
          className={`text-lg font-semibold tracking-tight items-center whitespace-nowrap transition-colors duration-300 ${textColorClass}`}
        >
          neo.
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-end overflow-visible z-500"
        >
          {/* TOP LINE */}
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, translateY: -2 }
                : { rotate: 0, translateY: -8 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute w-7 h-0.5 rounded-full transition-colors duration-300 ${lineColorClass}`}
          />

          {/* MIDDLE LINE */}
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`absolute w-7 h-0.5 rounded-full transition-colors duration-300 ${lineColorClass}`}
          />

          {/* BOTTOM LINE */}
          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, translateY: 2 }
                : { rotate: 0, translateY: 8 }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute w-7 h-0.5 rounded-full transition-colors duration-300 ${lineColorClass}`}
          />
        </button>
      </div>

      {/* MENU PANEL */}
      <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
