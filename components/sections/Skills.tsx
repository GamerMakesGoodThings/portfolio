"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { ArrowRight } from "lucide-react";

// Accent colors matching Gallery Play service icon style
const categoryColors = [
  "#213ded",
  "#00acd7",
  "#00b181",
  "#e6c82a",
  "#ff3700",
  "#8b5cf6",
  "#00acd7",
];

// Scattered skill card positions and rotations — collage style
const scatterPositions = [
  { x: "2%", y: "0%", rotate: -4, scale: 1 },
  { x: "52%", y: "2%", rotate: 5, scale: 1.02 },
  { x: "8%", y: "34%", rotate: 3, scale: 0.98 },
  { x: "55%", y: "30%", rotate: -6, scale: 1.01 },
  { x: "0%", y: "62%", rotate: 5, scale: 1 },
  { x: "48%", y: "60%", rotate: -3, scale: 0.99 },
  { x: "25%", y: "88%", rotate: 4, scale: 1 },
];

// Project images that will peek through the scattered layout
const bgImages = [
  "/projects/minecraft-network.jpg",
  "/projects/dashboard.jpg",
  "/projects/rpg.jpg",
  "/projects/anticheat.jpg",
  "/projects/fabric-mod.jpg",
  "/projects/discord.jpg",
  "/projects/control-panel.jpg",
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Subtle map-like background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 60% 70%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 60px 60px, 50px 50px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Two-column layout like Gallery Play's collage section */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left column — scattered image collage with skill cards overlaid */}
          <div className="relative min-h-[700px] hidden lg:block">
            {/* Scattered project images */}
            {bgImages.slice(0, 6).map((img, i) => {
              const positions = [
                { left: "-5%", top: "0%", w: 200, h: 260, rot: -8 },
                { left: "45%", top: "-3%", w: 180, h: 220, rot: 6 },
                { left: "10%", top: "35%", w: 220, h: 170, rot: 4 },
                { left: "55%", top: "28%", w: 190, h: 240, rot: -10 },
                { left: "-2%", top: "65%", w: 210, h: 180, rot: 7 },
                { left: "50%", top: "63%", w: 170, h: 210, rot: -5 },
              ];
              const pos = positions[i];
              return (
                <motion.div
                  key={i}
                  className="absolute overflow-hidden rounded-xl shadow-2xl shadow-black/50"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: pos.w,
                    height: pos.h,
                    zIndex: i + 1,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: pos.rot * 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: pos.rot,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.06,
                    rotate: 0,
                    zIndex: 30,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              );
            })}

            {/* Floating colored skill badges scattered over images */}
            {[
              { label: "React", color: "#213ded", x: "30%", y: "15%", rot: -3 },
              { label: "Java", color: "#ff3700", x: "70%", y: "50%", rot: 5 },
              { label: "Next.js", color: "#00b181", x: "5%", y: "55%", rot: -6 },
              { label: "Docker", color: "#00acd7", x: "60%", y: "85%", rot: 4 },
              { label: "TypeScript", color: "#e6c82a", x: "35%", y: "75%", rot: -2 },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                className="absolute z-20 rounded-full px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl"
                style={{
                  left: badge.x,
                  top: badge.y,
                  background: `${badge.color}33`,
                  border: `1px solid ${badge.color}55`,
                  rotate: `${badge.rot}deg`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.15, rotate: 0 }}
              >
                {badge.label}
              </motion.div>
            ))}
          </div>

          {/* Right column — text + skill categories */}
          <div>
            {/* Section heading */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                Skills & Tools
              </span>
              <h2 className="text-editorial mb-6 text-4xl text-white md:text-5xl">
                Technical
                <br />
                Expertise
              </h2>
              <p className="max-w-md text-base leading-relaxed text-white/40">
                From full-stack web development to custom Minecraft engineering.
                Our work speaks through the technologies we master.
              </p>
            </motion.div>

            {/* Skill categories — compact list with colored accents */}
            <div className="space-y-6">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className="group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Category header */}
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          categoryColors[i % categoryColors.length],
                        boxShadow: `0 0 12px ${categoryColors[i % categoryColors.length]}40`,
                      }}
                    />
                    <h3 className="font-heading text-base font-semibold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills — flowing inline list */}
                  <div className="ml-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/45 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href="#projects" className="gp-button group">
                <span>See my work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Simplified card grid (collage hidden on mobile) */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {bgImages.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
