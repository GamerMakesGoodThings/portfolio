"use client";

import { motion } from "framer-motion";
import { statistics } from "@/lib/data";
import { AnimatedCounter } from "../reactbits";

export default function Statistics() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Grid of stats — full-width with dividers */}
        <div className="grid grid-cols-2 gap-0 border-t border-b border-white/8 md:grid-cols-4">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center border-r border-white/8 py-12 last:border-r-0 md:py-16"
              style={{
                borderRight:
                  (i + 1) % (i < 2 ? 2 : 4) === 0
                    ? "none"
                    : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-2 font-heading text-4xl font-bold text-white tabular-nums md:text-5xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
