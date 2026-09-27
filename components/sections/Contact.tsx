"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Check,
  Loader2,
} from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: FaGithub as any,
  linkedin: FaLinkedin as any,
  mail: Mail as any,
  twitter: FaTwitter as any,
  discord: FaDiscord as any,
};

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email";
    if (message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Contact
          </span>
          <h2 className="text-editorial text-4xl text-white md:text-5xl lg:text-6xl">
            Let&apos;s work
            <br />
            together
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-10 text-lg text-white/40 leading-relaxed">
              Have a project in mind? I&apos;m always open to discussing new
              projects and opportunities. Let&apos;s create something amazing
              together.
            </p>

            {/* Contact info */}
            <div className="mb-10 space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex cursor-pointer items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5">
                  <Mail size={20} className="text-white/40" />
                </div>
                <div>
                  <span className="block text-xs text-white/30 uppercase tracking-wider">
                    Email
                  </span>
                  <span className="text-base font-medium text-white transition-colors duration-300 group-hover:text-white/80">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                  <MapPin size={20} className="text-white/40" />
                </div>
                <div>
                  <span className="block text-xs text-white/30 uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-base font-medium text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Connect with me
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
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-white/20 hover:text-white"
                      aria-label={link.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "success" ? (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00b181]/10">
                  <Check size={32} className="text-[#00b181]" />
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/40">
                  Thank you! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-white/50"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={`w-full rounded-xl border bg-white/[0.03] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-white/20 focus:bg-white/[0.05] ${
                      errors.name
                        ? "border-[#ff3700]/50"
                        : "border-white/8"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#ff3700]">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-white/50"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={`w-full rounded-xl border bg-white/[0.03] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-white/20 focus:bg-white/[0.05] ${
                      errors.email
                        ? "border-[#ff3700]/50"
                        : "border-white/8"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#ff3700]">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-white/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full resize-none rounded-xl border bg-white/[0.03] px-5 py-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-white/20 focus:bg-white/[0.05] ${
                      errors.message
                        ? "border-[#ff3700]/50"
                        : "border-white/8"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#ff3700]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="gp-button-solid w-full justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
