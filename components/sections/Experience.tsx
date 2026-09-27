"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Sparkles,
  Building2,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Server,
  Zap,
} from "lucide-react";
import MapVectorBackground from "@/components/ui/MapVectorBackground";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  category: string;
  image: string;
  accentColor: string;
  heatmapColor: string;
  metric: string;
  metricLabel: string;
  bullets: string[];
  tech: string[];
  rotation: { x: number; y: number; z: number };
}

const experiences: ExperienceItem[] = [
  {
    id: "smartnodes",
    role: "Head Full Stack Developer",
    company: "SmartNodes",
    period: "Jan 2023 – Present",
    current: true,
    category: "Cloud & Microservices",
    image: "/experience/smartnodes.jpg",
    accentColor: "#00acd7",
    heatmapColor: "rgba(0, 172, 215, 0.45)",
    metric: "100K+",
    metricLabel: "Daily Active Users",
    bullets: [
      "Led end-to-end development of high-throughput real-time analytics dashboard serving 100K+ daily users",
      "Architected distributed microservices and container pipelines reducing deployment turnaround by 40%",
      "Mentored and guided an agile engineering team of 5 junior and mid-level developers",
      "Engineered automated health telemetry and fault-tolerant failover systems",
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis", "TypeScript"],
    rotation: { x: 3, y: -16, z: -2 },
  },
  {
    id: "darkhosting",
    role: "Full Stack Developer",
    company: "DarkHosting",
    period: "Jun 2021 – Dec 2022",
    current: false,
    category: "Fintech & Game Infrastructure",
    image: "/experience/darkhosting.jpg",
    accentColor: "#8b5cf6",
    heatmapColor: "rgba(139, 92, 246, 0.45)",
    metric: "$2M+",
    metricLabel: "Processed Transactions",
    bullets: [
      "Engineered scalable e-commerce infrastructure processing over $2M+ in high-volume customer transactions",
      "Optimized complex database indexing & queries achieving 50% faster page render and checkout latency",
      "Integrated seamless Stripe and PayPal multi-currency payment workflows with automated reconciliation",
      "Automated server provisioning hooks connecting web storefronts directly to hosting hypervisors",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Node.js", "Nginx", "Redis"],
    rotation: { x: 0, y: 0, z: 0 },
  },
  {
    id: "jaccuzimc",
    role: "Frontend Developer",
    company: "JaccuziMC",
    period: "Aug 2020 – May 2021",
    current: false,
    category: "Web Engineering & CMS",
    image: "/experience/jaccuzimc.jpg",
    accentColor: "#ffaa00",
    heatmapColor: "rgba(255, 170, 0, 0.45)",
    metric: "15+",
    metricLabel: "Shipped Platforms",
    bullets: [
      "Designed and deployed responsive web portals for 15+ high-traffic gaming communities and brand partners",
      "Dramatically reduced client page load times by 40% through asset minification and caching strategies",
      "Engineered bespoke headless CMS solutions allowing non-technical staff to publish updates in real-time",
      "Implemented modular component libraries with accessible interactions and dark-mode styling",
    ],
    tech: ["React", "Vue.js", "SCSS", "Firebase", "JavaScript", "Tailwind CSS"],
    rotation: { x: 3, y: 16, z: 2 },
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModalExp, setSelectedModalExp] = useState<ExperienceItem | null>(null);
  const [viewMode, setViewMode] = useState<"cinematic" | "timeline">("cinematic");

  const activeExp = experiences[activeIndex];

  return (
    <section id="experience" className="section-spacing relative overflow-hidden bg-[#070709]">
      {/* Top separator line with glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-12">
        {/* Section Header with Gallery Play Editorial Flair */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Experience & Impact
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Active Roles
              </span>
            </div>
            <h2 className="text-editorial text-4xl text-white md:text-5xl lg:text-6xl">
              Professional
              <br />
              Journey
            </h2>
          </motion.div>

          {/* Mode Switcher Buttons */}
          <motion.div
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md self-start md:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setViewMode("cinematic")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                viewMode === "cinematic"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Layers size={14} />
              <span>3D Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                viewMode === "timeline"
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>Timeline Log</span>
            </button>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: CINEMATIC 3D SHOWCASE (Directly Inspired by Gallery Play Img 2) */}
        {/* ========================================================================= */}
        {viewMode === "cinematic" ? (
          <motion.div
            key="cinematic-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/10 bg-[#08080b] p-6 md:p-10 lg:p-14 overflow-hidden shadow-2xl"
          >
            {/* 1. Authentic SVG Map Background */}
            <MapVectorBackground opacity={0.12} />

            {/* 2. Ambient Heatmap Blobs matching Image 2 */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* Left heatmap (Orange/Amber) */}
              <div
                className="absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full transition-all duration-1000 ease-out"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(230, 200, 42, 0.15) 50%, transparent 75%)",
                  filter: "blur(90px)",
                }}
              />
              {/* Center heatmap (Vibrant cyan/teal) */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: `radial-gradient(circle, ${activeExp.heatmapColor} 0%, rgba(33, 61, 237, 0.15) 50%, transparent 75%)`,
                  filter: "blur(100px)",
                }}
              />
              {/* Right heatmap (Electric blue/purple) */}
              <div
                className="absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full transition-all duration-1000 ease-out"
                style={{
                  background:
                    "radial-gradient(circle, rgba(33, 61, 237, 0.35) 0%, rgba(0, 172, 215, 0.15) 50%, transparent 75%)",
                  filter: "blur(90px)",
                }}
              />
            </div>

            {/* Role Quick Selector Tabs on Top of Canvas */}
            <div className="relative z-20 mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeIndex === idx
                      ? "border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl"
                      : "border border-white/5 bg-white/[0.02] text-white/50 hover:border-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: exp.accentColor }}
                  />
                  <span>{exp.company}</span>
                  <span className="hidden sm:inline text-white/30 text-xs">
                    ({exp.period.split(" ")[0]})
                  </span>
                </button>
              ))}
            </div>

            {/* 3D FLOATING CARDS STAGE */}
            <div className="relative z-10 my-4 min-h-[440px] md:min-h-[500px] lg:min-h-[540px] flex items-center justify-center [perspective:1400px]">
              <div className="relative w-full max-w-[1100px] h-[400px] md:h-[460px] flex items-center justify-center">
                {experiences.map((exp, index) => {
                  const isCurrentActive = activeIndex === index;
                  const isLeft =
                    index === (activeIndex + experiences.length - 1) % experiences.length;
                  const isRight =
                    index === (activeIndex + 1) % experiences.length;

                  // Compute 3D placement based on active role
                  let transformClass = "";
                  let zIndex = 10;
                  let opacity = 0.5;

                  if (isCurrentActive) {
                    transformClass =
                      "scale-100 md:scale-105 translate-x-0 translate-y-0 rotate-0 [transform:translateZ(60px)]";
                    zIndex = 30;
                    opacity = 1;
                  } else if (isLeft) {
                    transformClass =
                      "-translate-x-[48%] md:-translate-x-[42%] lg:-translate-x-[36%] translate-y-2 [transform:perspective(1200px)_rotateY(-20deg)_scale(0.88)]";
                    zIndex = 20;
                    opacity = 0.65;
                  } else if (isRight) {
                    transformClass =
                      "translate-x-[48%] md:translate-x-[42%] lg:translate-x-[36%] translate-y-2 [transform:perspective(1200px)_rotateY(20deg)_scale(0.88)]";
                    zIndex = 20;
                    opacity = 0.65;
                  } else {
                    transformClass = "scale-75 opacity-0 pointer-events-none";
                  }

                  return (
                    <motion.div
                      key={exp.id}
                      layout
                      onClick={() => {
                        if (!isCurrentActive) {
                          setActiveIndex(index);
                        } else {
                          setSelectedModalExp(exp);
                        }
                      }}
                      className={`absolute w-[290px] sm:w-[340px] md:w-[410px] lg:w-[450px] aspect-[4/3] cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${transformClass}`}
                      style={{
                        zIndex,
                        opacity,
                        boxShadow: isCurrentActive
                          ? `0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px ${exp.accentColor}40`
                          : "0 15px 35px -10px rgba(0, 0, 0, 0.7)",
                      }}
                    >
                      {/* Background Image */}
                      <img
                        src={exp.image}
                        alt={`${exp.company} - ${exp.role}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between z-10">
                        <span
                          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-md"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.6)",
                            border: `1px solid ${exp.accentColor}60`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: exp.accentColor }}
                          />
                          {exp.company}
                        </span>

                        {exp.current ? (
                          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
                            Current
                          </span>
                        ) : (
                          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-white/60 backdrop-blur-md">
                            {exp.period}
                          </span>
                        )}
                      </div>

                      {/* Bottom Content Area */}
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10 flex flex-col justify-end">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-1">
                          {exp.category}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                          {exp.role}
                        </h3>

                        {/* Metric highlight badge */}
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex items-baseline gap-1.5">
                            <span
                              className="font-heading text-xl md:text-2xl font-bold"
                              style={{ color: exp.accentColor }}
                            >
                              {exp.metric}
                            </span>
                            <span className="text-xs text-white/60">
                              {exp.metricLabel}
                            </span>
                          </div>
                        </div>

                        {/* Tech tags preview */}
                        <div className="hidden sm:flex flex-wrap gap-1.5 mb-3">
                          {exp.tech.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] text-white/70 backdrop-blur-sm"
                            >
                              {t}
                            </span>
                          ))}
                          {exp.tech.length > 4 && (
                            <span className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] text-white/40">
                              +{exp.tech.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Center frosted glass LEARN MORE CTA overlay (exact match to Image 2) */}
                        {isCurrentActive && (
                          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs text-white/70">
                              Tap to inspect achievements & architecture
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedModalExp(exp);
                              }}
                              className="flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 text-xs font-bold hover:bg-neutral-200 transition-all shadow-md group"
                            >
                              <span>LEARN MORE</span>
                              <ArrowUpRight
                                size={14}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Editorial Narrative & Buttons — Exact Layout of Image 2 */}
            <div className="relative z-20 mt-10 md:mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              {/* Bottom Left Editorial Text */}
              <div className="max-w-xl">
                <p className="text-sm md:text-base leading-relaxed text-white/60">
                  From architecting real-time distributed platforms and high-throughput server
                  networks to scaling $2M+ e-commerce platforms and immersive web ecosystems.
                  Every milestone is engineered for resilience, speed, and lasting impact.
                </p>
              </div>

              {/* Bottom Right Gallery Play Style Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="gp-button-solid group flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-neutral-200 shadow-xl"
                >
                  <span>Get in touch</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#projects"
                  className="gp-button flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/30 backdrop-blur-md"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* VIEW MODE 2: DETAILED TIMELINE GRID */
          /* ========================================================================= */
          <motion.div
            key="timeline-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="gp-card group relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8 lg:p-10 transition-all duration-500 hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 h-full w-[4px]"
                  style={{
                    background: exp.current
                      ? "linear-gradient(to bottom, #00acd7, #213ded)"
                      : exp.accentColor,
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Role Overview & Thumbnail */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                          {exp.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium text-white/60 mb-4">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metric Card */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
                      <div
                        className="font-heading text-3xl font-bold"
                        style={{ color: exp.accentColor }}
                      >
                        {exp.metric}
                      </div>
                      <div className="text-xs text-white/50">{exp.metricLabel}</div>
                    </div>
                  </div>

                  {/* Right Column: Key Achievements & Tech Stack */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                        Key Engineering Deliverables & Leadership
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{ backgroundColor: exp.accentColor }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* ROLE DETAIL MODAL / DRAWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedModalExp && (
          <div className="fixed inset-0 z-[1000000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalExp(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0e0e13] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden z-10 my-8"
            >
              {/* Header Image banner */}
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 md:-mx-10 md:-mt-10 mb-6 h-48 sm:h-56 overflow-hidden">
                <img
                  src={selectedModalExp.image}
                  alt={selectedModalExp.company}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/60 to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedModalExp(null)}
                  className="absolute right-4 top-4 h-10 w-10 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-md"
                >
                  ✕
                </button>

                <div className="absolute bottom-4 left-6 sm:left-8 md:left-10">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white mb-2 shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: `${selectedModalExp.accentColor}30`,
                      border: `1px solid ${selectedModalExp.accentColor}60`,
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: selectedModalExp.accentColor }}
                    />
                    {selectedModalExp.company}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {selectedModalExp.role}
                  </h3>
                </div>
              </div>

              {/* Meta information */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/50">{selectedModalExp.period}</span>
                  {selectedModalExp.current && (
                    <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                      Current Position
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-heading text-2xl font-bold"
                    style={{ color: selectedModalExp.accentColor }}
                  >
                    {selectedModalExp.metric}
                  </span>
                  <span className="text-xs text-white/50">
                    {selectedModalExp.metricLabel}
                  </span>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="space-y-3">
                  {selectedModalExp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: selectedModalExp.accentColor }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                  Tech Stack Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalExp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedModalExp(null)}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedModalExp(null)}
                  className="rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  Contact About Role
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
