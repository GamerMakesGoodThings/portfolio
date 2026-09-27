"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.01,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width;
    const yPercent = mouseY / height;

    const rotateX = (0.5 - yPercent) * (maxTilt * 2);
    const rotateY = (xPercent - 0.5) * (maxTilt * 2);

    setTransform({
      rotateX,
      rotateY,
      glareX: xPercent * 100,
      glareY: yPercent * 100,
      isHovered: true,
    });
  };

  const handleMouseEnter = () => {
    setTransform((prev) => ({ ...prev, isHovered: true }));
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transform.isHovered
            ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: transform.isHovered
            ? "transform 0.15s ease-out"
            : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden ${className}`}
      >
        {/* Subtle Glare effect */}
        {glare && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: transform.isHovered ? 0.07 : 0,
              background: `radial-gradient(400px circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.8), transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    </div>
  );
}
