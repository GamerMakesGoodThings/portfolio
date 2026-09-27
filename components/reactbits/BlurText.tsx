"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export default function BlurText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  staggerDelay = 0.04,
  duration = 0.5,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={`inline-block mr-[0.28em] last:mr-0 ${wordClassName}`}
          initial={{
            filter: "blur(8px)",
            opacity: 0,
            y: 8,
          }}
          whileInView={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
