"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 md:mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        {tag}
      </span>
      <h2 className="text-editorial mb-4 text-4xl text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-lg text-white/40 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
