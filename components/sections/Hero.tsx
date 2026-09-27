"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown } from "lucide-react";

// Scattered project images for the right side collage
const collageImages = [
  { src: "/projects/minecraft-network.jpg", x: "5%", y: "5%", rotate: -8, w: 220, h: 160, delay: 0.4 },
  { src: "/projects/anticheat.jpg", x: "55%", y: "-5%", rotate: 6, w: 200, h: 200, delay: 0.6 },
  { src: "/projects/rpg.jpg", x: "15%", y: "35%", rotate: 4, w: 240, h: 180, delay: 0.5 },
  { src: "/projects/dashboard.jpg", x: "60%", y: "30%", rotate: -5, w: 180, h: 220, delay: 0.7 },
  { src: "/projects/fabric-mod.jpg", x: "-5%", y: "65%", rotate: 7, w: 200, h: 150, delay: 0.8 },
  { src: "/projects/discord.jpg", x: "50%", y: "62%", rotate: -10, w: 190, h: 190, delay: 0.9 },
  { src: "/projects/control-panel.jpg", x: "30%", y: "0%", rotate: 12, w: 160, h: 200, delay: 0.55 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background — dark with animated gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#070709]" />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="animate-aurora-drift-1 absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #213ded 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="animate-aurora-drift-2 absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #00acd7 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="animate-aurora-drift-3 absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #00b181 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* Subtle noise/grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content — two column layout */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid min-h-[80vh] items-center gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Left: Text */}
          <div className="flex flex-col items-start">
            {/* Main headline */}
            <motion.h1
              className="text-editorial mb-6 max-w-[600px] text-5xl text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Crafting digital
              <br />
              experiences that
              <br />
              <span className="relative inline-block">
                move forward
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#213ded] via-[#00acd7] to-[#00b181]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-statement mb-10 max-w-[480px] text-base md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a href="#contact" className="gp-button-solid">
                Get in touch
              </a>
              <a href="#projects" className="gp-button">
                View projects
              </a>
            </motion.div>
          </div>

          {/* Right: Scattered Image Collage — Gallery Play style */}
          <div className="relative hidden h-[600px] lg:block">
            {collageImages.map((img, i) => (
              <motion.div
                key={i}
                className="absolute overflow-hidden rounded-xl shadow-2xl shadow-black/40"
                style={{
                  left: img.x,
                  top: img.y,
                  width: img.w,
                  height: img.h,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: img.rotate * 2,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: img.rotate,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: img.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.4 },
                }}
              >
                <img
                  src={img.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                {/* Hover shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </motion.div>
            ))}

            {/* Floating decorative elements */}
            <motion.div
              className="absolute right-[10%] top-[25%] z-[60] rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00b181]" />
                <span className="text-xs font-medium text-white/70">
                  Available for work
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
