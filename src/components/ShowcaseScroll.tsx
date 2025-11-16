// src/components/ShowcaseScroll.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollLock from "@/hooks/useScrollLock";
import { useScrambleText } from "@/hooks/useScrambleText";
import ParallaxLayer from "@/components/ParallaxLayer";

type ShowcaseItem = {
  id: number;
  title: string;
  description: string;
  video: string;
};

const showcases: ShowcaseItem[] = [
  {
    id: 1,
    title: "Design Excellence",
    description: "Crafting premium aesthetics that define modern experiences.",
    video: "/videos/design.mp4",
  },
  {
    id: 2,
    title: "Technology & Innovation",
    description:
      "Harnessing cutting-edge tools to deliver seamless performance.",
    video: "/videos/tech.mp4",
  },
  {
    id: 3,
    title: "Strategic Growth",
    description:
      "Aligning creativity with business goals for exponential reach.",
    video: "/videos/strategy.mp4",
  },
  {
    id: 4,
    title: "Brand Storytelling",
    description:
      "Transforming data into emotional journeys that resonate deeply.",
    video: "/videos/storytelling.mp4",
  },
  {
    id: 5,
    title: "Customer Engagement",
    description: "Delivering tailored interactions that build lasting loyalty.",
    video: "/videos/engagement.mp4",
  },
];

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const ShowcaseScroll: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const animatingRef = useRef(false);

  const mouseRef = useRef({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const { sectionRef, isLocked, unlockScroll } = useScrollLock(0.6);
  const { display: scrambledTitle, scrambleOnce } = useScrambleText();

  useEffect(() => {
    scrambleOnce(showcases[activeIndex].title, 850);
  }, [activeIndex, scrambleOnce]);

  const goTo = useCallback(
    (i: number) => {
      if (animatingRef.current || i === activeIndex) return;
      animatingRef.current = true;

      setDirection(i > activeIndex ? 1 : -1);
      setActiveIndex(i);

      setTimeout(() => {
        animatingRef.current = false;
      }, 900);
    },
    [activeIndex]
  );

  const nextSlide = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection(1);

    if (activeIndex === showcases.length - 1) {
      unlockScroll();
      setTimeout(() => (animatingRef.current = false), 200);
      return;
    }

    setActiveIndex((v) => v + 1);
    setTimeout(() => (animatingRef.current = false), 900);
  }, [activeIndex, unlockScroll]);

  const prevSlide = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection(-1);

    if (activeIndex === 0) {
      unlockScroll();
      setTimeout(() => (animatingRef.current = false), 200);
      return;
    }

    setActiveIndex((v) => v - 1);
    setTimeout(() => (animatingRef.current = false), 900);
  }, [activeIndex, unlockScroll]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !isLocked) return;

    const onWheel = (ev: WheelEvent) => {
      if (ev.deltaY > 20) {
        ev.preventDefault();
        nextSlide();
      } else if (ev.deltaY < -20) {
        ev.preventDefault();
        prevSlide();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isLocked, nextSlide, prevSlide, sectionRef]);

  useEffect(() => {
    if (!isLocked) return;

    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "ArrowDown") nextSlide();
      if (ev.key === "ArrowUp") prevSlide();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLocked, nextSlide, prevSlide]);

  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isLocked) return;
    if (touchStartY.current === null) return;

    const y2 = e.changedTouches[0].clientY;
    const diff = touchStartY.current - y2;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartY.current = null;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      mouseRef.current.x = clamp((ev.clientX - cx) / (r.width / 2), -1, 1);
      mouseRef.current.y = clamp((ev.clientY - cy) / (r.height / 2), -1, 1);
    };

    const onLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [sectionRef]);

  useEffect(() => {
    let raf: number;

    const tick = () => {
      setParallax((p) => ({
        x: p.x + (mouseRef.current.x * 40 - p.x) * 0.08,
        y: p.y + (mouseRef.current.y * 30 - p.y) * 0.08,
      }));

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="group"
      aria-roledescription="carousel"
    >
      {/* background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={showcases[activeIndex].id}
            src={showcases[activeIndex].video}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center pointer-events-none">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={showcases[activeIndex].id}
            initial={{
              opacity: 0,
              rotateX: direction > 0 ? -80 : 80,
              y: direction > 0 ? 120 : -120,
              scale: 0.98,
            }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              rotateX: direction > 0 ? 80 : -80,
              y: direction > 0 ? -120 : 120,
              scale: 0.98,
            }}
            transition={{ duration: 0.9, ease: [0.2, 0.9, 0.25, 1] }}
            style={{ perspective: 1400, width: "100%" }}
            className="relative max-w-5xl mx-auto"
          >
            {/* BACK layer */}
            <ParallaxLayer
              depth={0.18}
              className="absolute inset-0"
              style={{
                transform: `translate3d(${parallax.x * 0.18}px, ${
                  parallax.y * 0.18
                }px, 0) rotate(${parallax.x * 0.01}deg)`,
                willChange: "transform",
              }}
            />

            {/* MIDDLE text */}
            <ParallaxLayer
              depth={0.35}
              className="relative z-10"
              style={{
                transform: `translate3d(${parallax.x * 0.35}px, ${
                  parallax.y * 0.35
                }px, 0) rotate(${parallax.x * 0.02}deg)`,
                willChange: "transform",
              }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                <span aria-hidden>{scrambledTitle}</span>
                <span className="sr-only">{showcases[activeIndex].title}</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                {showcases[activeIndex].description}
              </p>
            </ParallaxLayer>

            {/* FOREGROUND */}
            <ParallaxLayer
              depth={0.65}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                transform: `translate3d(${parallax.x * 0.65}px, ${
                  parallax.y * 0.65
                }px, 0) rotate(${parallax.x * 0.025}deg)`,
                willChange: "transform",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOT NAVIGATOR */}
      <nav
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30"
        aria-label="Showcase navigation"
      >
        <ul className="flex flex-col gap-3">
          {showcases.map((s, i) => {
            const isActive = i === activeIndex;

            return (
              <li key={s.id}>
                <motion.button
                  onClick={() => goTo(i)}
                  className="relative w-4 h-4 flex items-center justify-center"
                  aria-label={`Go to ${s.title}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className={`block rounded-full ${
                      isActive ? "w-4 h-4" : "w-2 h-2"
                    } bg-white`}
                    style={{
                      opacity: isActive ? 1 : 0.6,
                      boxShadow: isActive
                        ? "0 6px 20px rgba(255,255,255,0.08)"
                        : "none",
                    }}
                  />

                  {isActive && (
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0.2 }}
                      animate={{ scale: 1.8, opacity: 0.06 }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="absolute rounded-full w-8 h-8 -z-10"
                      style={
                        {
                          background:
                            "radial-gradient(closest-side, rgba(255,255,255,0.06), rgba(255,255,255,0))",
                        } as React.CSSProperties
                      }
                    />
                  )}
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default ShowcaseScroll;
