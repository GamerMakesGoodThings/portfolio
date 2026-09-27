"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import Contact from "@/components/sections/Contact";
import SmoothScroll from "@/providers/SmoothScroll";

// Lazy load heavier sections
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: false,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false }
);
const TechStack = dynamic(() => import("@/components/sections/TechStack"), {
  ssr: false,
});
const HeatmapOverlay = dynamic(
  () => import("@/components/ui/HeatmapOverlay"),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      {/* Gallery Play heatmap cursor effect */}
      <HeatmapOverlay />

      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Services />
        <Statistics />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
