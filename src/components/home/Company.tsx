"use client";

import { useRef } from "react";

export default function Company() {
  const ref = useRef(null);

  const text = "NEO THE AGENCY";

  return (
    <section
      ref={ref}
      className="
        flex flex-col items-center justify-center
        bg-white text-black relative overflow-hidden
        px-4 sm:px-6
        py-8 sm:py-12 md:py-16
      "
    >
      {/* Company Title */}
      <h1
        className="
          text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
          font-bold tracking-tight 
          flex flex-wrap justify-center text-center
        "
      >
        {text.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </h1>

      {/* Subtitle */}
      <p
        className="
          mt-3 sm:mt-5 md:mt-6
          text-base sm:text-lg md:text-2xl
          text-gray-600
          max-w-sm sm:max-w-xl md:max-w-2xl
          text-center leading-relaxed
        "
      >
        <span>
          We build immersive digital experiences, forward-thinking products, and
          creative strategies that turn ideas into human connections.
        </span>
        <br />
        <span className="block mt-2">
          Merging design, technology, and emotion into powerful brand moments.
        </span>
      </p>
    </section>
  );
}
