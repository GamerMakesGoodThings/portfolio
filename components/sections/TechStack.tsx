"use client";

import { motion } from "framer-motion";

const techItems = [
  "React", "Next.js", "TypeScript", "Node.js", "Java", "Kotlin",
  "Python", "Docker", "Redis", "PostgreSQL", "MongoDB", "MySQL",
  "Tailwind", "Three.js", "Git", "Linux", "Nginx",
  "Spigot", "Paper", "Fabric", "Forge", "Velocity", "Express", "GSAP",
];

export default function TechStack() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Marquee-style infinite scroll — Gallery Play logo carousel inspired */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Double the items for seamless loop */}
            {[...techItems, ...techItems].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-block whitespace-nowrap font-heading text-3xl font-bold text-white/8 transition-colors duration-300 hover:text-white/25 md:text-5xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Second row going opposite direction */}
        <div className="marquee-container mt-4">
          <div
            className="marquee-track"
            style={{ animationDirection: "reverse", animationDuration: "35s" }}
          >
            {[...techItems.reverse(), ...techItems].map((tech, i) => (
              <span
                key={`rev-${tech}-${i}`}
                className="inline-block whitespace-nowrap font-heading text-3xl font-bold text-white/8 transition-colors duration-300 hover:text-white/25 md:text-5xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
