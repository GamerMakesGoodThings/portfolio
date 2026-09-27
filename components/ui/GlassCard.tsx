"use client";

import { ReactNode } from "react";
import SpotlightCard from "../reactbits/SpotlightCard";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function GlassCard({
  children,
  className = "",
  spotlightColor = "rgba(212, 197, 178, 0.08)",
}: GlassCardProps) {
  return (
    <SpotlightCard
      spotlightColor={spotlightColor}
      className={`rounded-xl border border-[#2A2A2E] bg-[#161618] transition-all duration-300 hover:border-[#3A3A3F] hover:bg-[#1C1C1F] ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </SpotlightCard>
  );
}
