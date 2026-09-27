"use client";

import { navLinks, socialLinks, personalInfo } from "@/lib/data";
import { Mail, ArrowUp } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: FaGithub as any,
  linkedin: FaLinkedin as any,
  mail: Mail as any,
  twitter: FaTwitter as any,
  discord: FaDiscord as any,
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        {/* Top area */}
        <div className="mb-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-block cursor-pointer">
              <span className="font-heading text-2xl font-bold text-white">
                {personalInfo.name}
                <span className="text-[#213ded]">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/30">
              Crafting digital experiences that move forward. Building code with
              passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/8 text-white/30 transition-all duration-300 hover:border-white/20 hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/8 pt-8">
          <p className="text-sm text-white/20">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/8 text-white/30 transition-all duration-500 hover:border-white/20 hover:text-white ${
              showTop
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            }`}
            aria-label="Back to top"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
