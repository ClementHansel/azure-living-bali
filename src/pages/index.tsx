// src/pages/index.tsx
"use client";

import Company from "@/components/home/Company";
import ContactUs from "@/components/home/ContactUs";
import COOTestimony from "@/components/home/COOTestimony";
import { Footer } from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import WhatWeDo from "@/components/home/WhatWeDo";
import { Project } from "@/types";

export default function Home({}: { projects: Project[] }) {
  return (
    <>
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Company / Who we are Section */}
      <div id="company">
        <Company />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* What We Do Section */}
      <div id="whatwedo">
        <WhatWeDo />
      </div>

      {/* COO Testimony */}
      <div id="coo">
        <COOTestimony />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}
