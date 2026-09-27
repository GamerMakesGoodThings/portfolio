"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

// Map project images
const projectImages = [
  "/projects/minecraft-network.jpg",
  "/projects/anticheat.jpg",
  "/projects/rpg.jpg",
  "/projects/fabric-mod.jpg",
  "/projects/dashboard.jpg",
  "/projects/discord.jpg",
  "/projects/control-panel.jpg",
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="project-card group"
        style={{
          backgroundImage: `url(${projectImages[index % projectImages.length]})`,
        }}
      >
        {/* Dark gradient overlay — always visible for title readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Project title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <h3 className="font-heading text-lg font-bold text-white drop-shadow-lg md:text-xl">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay — Gallery Play style */}
        <div className="project-card-overlay z-20">
          {/* Arrow icon */}
          <div className="absolute right-5 top-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="mb-2 font-heading text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Learn more */}
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-white/50">
              Learn more
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-spacing relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section heading — Gallery Play "Work that speaks louder than words" style */}
        <div className="mb-16 grid gap-12 md:mb-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-editorial text-5xl text-white md:text-6xl lg:text-7xl">
              Work
              <br />
              that
              <br />
              speaks
              <br />
              louder
              <br />
              than
              <br />
              words.
            </h2>
          </motion.div>
        </div>

        {/* Project grid — 3 column square grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="gp-button group">
            <span>View all projects</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
