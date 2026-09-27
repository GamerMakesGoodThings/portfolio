"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number; // in seconds
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#F5F5F4", "#D4C5B2", "#E8E4DE", "#A8A29E", "#F5F5F4"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={`relative inline-block ${
        showBorder ? "rounded-full border border-[#2A2A2E] px-4 py-1.5" : ""
      }`}
    >
      <span
        style={gradientStyle}
        className={`animate-gradient-travel bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    </span>
  );
}
