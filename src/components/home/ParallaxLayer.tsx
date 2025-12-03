// src/components/ParallaxLayer.tsx
"use client";

import React from "react";

type Props = {
  depth?: number; // 0..1, bigger = more movement
  x?: number;
  y?: number;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ParallaxLayer: React.FC<Props> = ({
  depth = 0.2,
  x = 0,
  y = 0,
  rotate = 0,
  className = "",
  style,
  children,
}) => {
  const tx = x * depth;
  const ty = y * depth;
  const tr = rotate * depth;

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${tr}deg)`,
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
