"use client";

import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="section-spacing relative">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Testimonials
          </span>
          <h2 className="text-editorial text-4xl text-white md:text-5xl">
            What people say
          </h2>
        </motion.div>

        {/* Quote card */}
        <div className="relative">
          {/* Big quote mark */}
          <Quote
            size={48}
            className="mb-8 text-white/10"
            strokeWidth={1}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Quote text */}
              <p className="mb-10 text-2xl leading-relaxed text-white/60 md:text-3xl lg:text-4xl">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 font-heading text-lg font-bold text-white/60">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/20 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Progress dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-white"
                      : "w-2 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/20 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
