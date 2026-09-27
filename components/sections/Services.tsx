"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const serviceColors = [
  "#213ded",
  "#00acd7",
  "#00b181",
  "#e6c82a",
  "#ff3700",
  "#8b5cf6",
  "#00acd7",
  "#00b181",
];

// 3 audience showcase cards directly inspired by Gallery Play (Image 1)
const audienceCards = [
  {
    title: "FOR GAME NETWORKS",
    tagline: "Custom plugins, packet-level security, proxies, and multi-server architecture.",
    image: "/projects/minecraft-network.jpg",
    accent: "#213ded",
  },
  {
    title: "FOR DIGITAL BRANDS",
    tagline: "High-performance web apps, interactive 3D experiences, and fintech checkouts.",
    image: "/projects/dashboard.jpg",
    accent: "#00acd7",
  },
  {
    title: "FOR CREATORS & GUILDS",
    tagline: "Custom Fabric/Forge mods, Discord synchronization, and headless portals.",
    image: "/projects/discord.jpg",
    accent: "#ff3700",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing relative overflow-hidden bg-[#070709]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-12">
        {/* Section heading inspired by Image 1 */}
        <motion.div
          className="mb-14 md:mb-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Tailored Collaboration
          </span>
          <h2 className="text-editorial text-4xl text-white md:text-5xl lg:text-7xl leading-none mb-6">
            ENGINEERING PRECISION.
            <br />
            PRODUCTION DEPTH.
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
            We tailor every collaboration to the client. Game networks, digital brands, startups, and creative communities.
          </p>
        </motion.div>

        {/* 3 Large Pill / Rounded Cards side by side (Image 1 replica) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {audienceCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 p-6 md:p-8 flex flex-col justify-between cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Background image with hover zoom */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/90" />

              {/* Floating "Get in Touch" pill badge at top */}
              <div className="relative z-10 flex justify-end">
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-black flex items-center gap-1.5"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Bottom text */}
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                  {card.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service List */}
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Capabilities
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Core Service Offerings</h3>
            </div>
            <span className="text-xs text-white/40">0{services.length} Specializations</span>
          </div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="group flex cursor-pointer items-start gap-6 border-b border-white/10 py-7 transition-all duration-500 hover:pl-4 md:items-center md:py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Colored dot */}
                <span
                  className="service-dot mt-1 md:mt-0 transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: serviceColors[i % serviceColors.length],
                  }}
                />

                {/* Content */}
                <div className="flex-1">
                  <h4 className="mb-1 font-heading text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {service.title}
                  </h4>
                  <p className="max-w-xl text-sm text-white/40 md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
