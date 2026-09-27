"use client";

import { ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  speed?: number; // in seconds
  baseColor?: string;
  shineColor?: string;
}

export default function ShinyText({
  children,
  className = "",
  disabled = false,
  speed = 4,
  baseColor = "#A8A29E",
  shineColor = "#FFFFFF",
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled ? "" : "animate-shine-sweep"
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%)`,
        backgroundSize: "250% 100%",
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
