"use client";

import { useEffect, useRef } from "react";

/**
 * Heatmap cursor overlay — Gallery Play signature effect.
 * Creates a colorful heat trail following the cursor.
 */
export default function HeatmapOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; t: number; age: number }[]>([]);
  const lastAddRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const TRAIL_LENGTH = 80;
    const POINT_INTERVAL = 20;
    const DECAY_MS = 4000;
    const RADIUS = 50;

    const colors = [
      { r: 33, g: 61, b: 237 },   // #213ded
      { r: 0, g: 172, b: 215 },   // #00acd7
      { r: 0, g: 177, b: 129 },   // #00b181
      { r: 230, g: 200, b: 42 },  // #e6c82a
      { r: 255, g: 55, b: 0 },    // #ff3700
    ];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function addPoint(x: number, y: number) {
      const now = performance.now();
      if (now - lastAddRef.current < POINT_INTERVAL) return;
      lastAddRef.current = now;

      pointsRef.current.push({ x, y, t: now, age: 0 });
      if (pointsRef.current.length > TRAIL_LENGTH) {
        pointsRef.current.splice(0, pointsRef.current.length - TRAIL_LENGTH);
      }
    }

    function render() {
      if (!canvas || !ctx) return;

      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove expired points
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.t < DECAY_MS
      );

      for (let i = 0; i < pointsRef.current.length; i++) {
        const p = pointsRef.current[i];
        const age = now - p.t;
        const life = 1 - age / DECAY_MS;
        const easedLife = Math.pow(life, 2.5);

        // Pick color based on position in trail
        const colorIdx = (i * colors.length) / pointsRef.current.length;
        const cIdx = Math.floor(colorIdx) % colors.length;
        const c = colors[cIdx];

        const alpha = easedLife * 0.35;
        const r = RADIUS * (0.6 + easedLife * 0.4);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        gradient.addColorStop(
          0,
          `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`
        );
        gradient.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    }

    const handleMouseMove = (e: MouseEvent) => {
      addPoint(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      for (let i = 0; i < e.touches.length; i++) {
        addPoint(e.touches[i].clientX, e.touches[i].clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchstart", handleTouchMove as any, {
      passive: true,
    });

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchMove as any);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[999999]"
      aria-hidden="true"
      style={{
        width: "100vw",
        height: "100vh",
        mixBlendMode: "screen",
      }}
    />
  );
}
