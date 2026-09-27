"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-[100] py-5 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a href="#hero" className="group relative z-[110] cursor-pointer">
            <span className="font-heading text-xl font-bold tracking-tight text-white md:text-2xl">
              {personalInfo.name}
              <span className="text-[#213ded]">.</span>
            </span>
          </a>

          {/* Desktop nav — glassmorphic pill */}
          <nav className="hidden items-center md:flex">
            <div
              className="flex items-center gap-1 rounded-full px-2 py-1.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="gp-button cursor-pointer"
            >
              Get in touch
            </a>
          </div>

          {/* Hamburger — Gallery Play style */}
          <button
            className="relative z-[110] flex cursor-pointer flex-col items-center justify-center gap-[6px] p-3 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-7 rounded-full bg-white transition-all duration-400 ${
                mobileOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 rounded-full bg-white transition-all duration-400 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-7 rounded-full bg-white transition-all duration-400 ${
                mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="fixed inset-0 z-[105] flex flex-col items-start justify-center gap-2 px-10"
            style={{
              background: "rgba(8, 8, 11, 0.95)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Large nav links */}
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-4 py-2 font-heading text-4xl font-bold text-white/40 transition-colors duration-300 hover:text-white sm:text-5xl"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  delay: i * 0.06 + 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="font-mono text-sm text-white/20 tabular-nums">
                  0{i + 1}
                </span>
                {link.name}
              </motion.a>
            ))}

            {/* CTA at bottom */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="gp-button-solid"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
