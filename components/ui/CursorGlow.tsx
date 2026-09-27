"use client";

import { useEffect, useRef, useState } from "react";

interface CursorGlowProps {
  size?: number;
  color?: string;
}

export default function CursorGlow({
  size = 600,
  color = "rgba(99, 102, 241, 0.08)",
}: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      if (!visible) setVisible(true);
      glowRef.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [size, visible]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-300"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        willChange: "transform",
      }}
    />
  );
}
