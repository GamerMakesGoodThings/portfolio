"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
    >
      {/* Gradient fade from hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070709] to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div style={{ opacity }}>
          {/* Big statement text — Gallery Play style */}
          <motion.h2
            className="text-statement mb-12 text-2xl leading-[1.4] md:text-3xl lg:text-4xl xl:text-[2.75rem]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Rooted in{" "}
            <span className="text-white font-medium">full-stack development</span>, fluent
            in{" "}
            <span className="text-white font-medium">modern web technologies</span>,{" "}
            <span className="text-white font-medium">Minecraft engineering</span>, and{" "}
            <span className="text-white font-medium">server infrastructure</span>.
            I position digital projects where they belong:{" "}
            <span className="text-white font-medium">
              at the heart of innovation.
            </span>
          </motion.h2>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a href="#contact" className="gp-button">
              <span>Start the conversation</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
