// FULL UPDATED HERO.TSX WITH 2-SCREEN STRUCTURE, AUTOPLAY INTRO, NEW TEXT, MENU BLINK, AUTO-CYCLE, CLICK TO CHANGE, AND FULL-HEIGHT VIDEO

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, EasingFunction } from "framer-motion";

/** --------------------------------------------------------------------------
 * MENU CONFIG
 * -------------------------------------------------------------------------- */
type MenuItem = {
  id: string;
  label: string;
  image: string;
};

const MENU: MenuItem[] = [
  { id: "digital", label: "digital", image: "/images/Digital.jpg" },
  {
    id: "marketing",
    label: "marketing strategy.",
    image: "/images/MarketingStrategy.png",
  },
  { id: "creatives", label: "creatives.", image: "/images/Creative.jpg" },
  { id: "technology", label: "technology.", image: "/images/Technology.webp" },
  { id: "ads", label: "ads.", image: "/images/ads.webp" },
];

const AUTO_CYCLE_MS = 5000;

/** --------------------------------------------------------------------------
 * EASING (A+2+i CURVE)
 * -------------------------------------------------------------------------- */
function cubicBezier(
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number
): EasingFunction {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;

  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const slopeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;

  const solve = (x: number) => {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const x2 = sampleX(t) - x;
      if (Math.abs(x2) < 1e-6) return t;
      const d = slopeX(t);
      if (Math.abs(d) < 1e-6) break;
      t = t - x2 / d;
    }
    let t0 = 0;
    let t1 = 1;
    t = x;
    while (t0 < t1) {
      const x2 = sampleX(t);
      if (Math.abs(x2 - x) < 1e-6) return t;
      if (x > x2) t0 = t;
      else t1 = t;
      t = (t0 + t1) / 2;
    }
    return t;
  };

  return (t: number) => sampleY(solve(t));
}

const cinematic = cubicBezier(0.22, 1, 0.36, 1);
const softEase = cubicBezier(0.25, 0.1, 0.25, 1);

/** --------------------------------------------------------------------------
 * COMPONENT
 * -------------------------------------------------------------------------- */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const [introPlaying, setIntroPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSecondInView, setIsSecondInView] = useState(false);
  const [blink, setBlink] = useState(false);

  const cycleTimer = useRef<number | null>(null);

  /** AUTOPLAY VIDEO -------------------------------------------------------- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, []);

  /** INTRO AUTO-PLAY -------------------------------------------------------- */
  useEffect(() => {
    const t = window.setTimeout(() => setIntroPlaying(false), 3600);
    return () => window.clearTimeout(t);
  }, []);

  /** MENU BLINK WHEN ENTER SECOND SCREEN ----------------------------------- */
  useEffect(() => {
    if (!isSecondInView) return;

    Promise.resolve().then(() => setBlink(true));

    const t = setTimeout(() => setBlink(false), 700);
    return () => clearTimeout(t);
  }, [isSecondInView]);

  /** AUTO-CYCLE ------------------------------------------------------------- */
  const startCycle = useCallback(() => {
    if (cycleTimer.current) return;
    cycleTimer.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % MENU.length);
    }, AUTO_CYCLE_MS) as unknown as number;
  }, []);

  const stopCycle = useCallback(() => {
    if (!cycleTimer.current) return;
    window.clearInterval(cycleTimer.current);
    cycleTimer.current = null;
  }, []);

  useEffect(() => {
    if (isSecondInView) startCycle();
    else stopCycle();
    return () => stopCycle();
  }, [isSecondInView, startCycle, stopCycle]);

  /** OBSERVE SECOND SCREEN -------------------------------------------------- */
  useEffect(() => {
    const el = secondRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setIsSecondInView(e.isIntersecting);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /** MANUAL SELECT ---------------------------------------------------------- */
  const selectIndex = (i: number) => {
    setActiveIndex(i);
    stopCycle();
    startCycle();
  };

  /** VARIANTS --------------------------------------------------------------- */
  const introLineVariant = (d = 0) => ({
    hidden: { opacity: 0, y: 18 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: d, duration: 0.9, ease: cinematic },
    },
    exit: {
      opacity: 0,
      y: -18,
      transition: { duration: 0.7, ease: cinematic },
    },
  });

  const imageVariants = {
    initial: { opacity: 0, scale: 1.03, y: 12 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.25, ease: cinematic },
    },
    exit: {
      opacity: 0,
      scale: 0.995,
      y: -8,
      transition: { duration: 0.95, ease: cinematic },
    },
  };

  return (
    <section className="w-full min-h-[200vh] relative overflow-hidden">
      {/* STICKY FIRST SCREEN */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/cut.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />

        <div className="absolute inset-0 z-20 grid grid-cols-12 h-full px-6 md:px-12">
          {/* LEFT TEXT -------------------------------------------------------- */}
          <div className="col-span-12 md:col-span-7 flex items-center">
            <div className="max-w-2xl text-white">
              <AnimatePresence mode="wait">
                {introPlaying ? (
                  <motion.div
                    key="intro-block"
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    className="text-white"
                  >
                    <motion.h1
                      variants={introLineVariant(0)}
                      className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95]"
                    >
                      NEO.
                    </motion.h1>

                    <motion.p
                      variants={introLineVariant(0.15)}
                      className="mt-6 text-lg md:text-xl font-light opacity-95"
                    >
                      Global luxury brand factory.
                    </motion.p>

                    <motion.p
                      variants={introLineVariant(0.3)}
                      className="mt-6 text-lg md:text-xl font-light opacity-95"
                    >
                      Prototyping in Bali and Berlin.
                    </motion.p>

                    <motion.p
                      variants={introLineVariant(0.45)}
                      className="mt-6 text-sm md:text-base font-light uppercase opacity-80"
                    >
                      founded by consultants and developers.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.h2
                    key="brand-small"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: cinematic }}
                    className="text-3xl md:text-4xl font-medium text-white"
                  >
                    NEO THE AGENCY.
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SCROLL HINT -------------------------------------------------------- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-widest">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: softEase,
            }}
          >
            Scroll to explore
          </motion.div>
        </div>
      </div>

      {/* SECOND SCREEN -------------------------------------------------------- */}
      <div
        ref={secondRef}
        className="relative h-screen w-full z-10 bg-transparent"
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-12 gap-6 items-center">
          {/* LEFT IMAGE PANEL */}
          <div className="col-span-12 md:col-span-7 h-[68vh] md:h-[78vh] rounded-2xl overflow-hidden relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={MENU[activeIndex].id}
                src={MENU[activeIndex].image}
                alt={MENU[activeIndex].label}
                className="absolute inset-0 w-full h-full object-cover"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                draggable={false}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* RIGHT MENU (DESKTOP ONLY) ---------------------------------------- */}

          <div className="hidden md:flex col-span-12 md:col-span-5 h-full items-center">
            <nav className="w-full flex flex-col items-start gap-6 text-gray-900">
              <div
                className={`uppercase tracking-widest text-sm ${
                  blink ? "animate-pulse" : ""
                }`}
              >
                Explore
              </div>

              <ul className="w-full flex flex-col gap-4">
                {MENU.map((item, i) => {
                  const active = i === activeIndex;
                  return (
                    <li key={item.id} className="w-full">
                      <button
                        onClick={() => selectIndex(i)}
                        className="w-full text-left group"
                      >
                        <motion.span
                          className={`text-2xl md:text-3xl font-light transition-colors duration-500 ${
                            active
                              ? "text-gray-900" // active menu item dark
                              : "text-gray-600 group-hover:text-gray-800" // inactive lighter
                          }`}
                          animate={{
                            x: active ? 6 : 0,
                            opacity: active ? 1 : 0.85,
                          }}
                          transition={{ duration: 0.8, ease: cinematic }}
                        >
                          {item.label}
                        </motion.span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 text-xs text-gray-600 tracking-wide uppercase">
                {activeIndex + 1} / {MENU.length}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
