// src/pages/index.tsx
"use client";

import Company from "@/components/Company";
import Hero from "@/components/Hero";
import { Project } from "@/types";
import Projects from "@/components/Projects";
import WhatWeDo from "@/components/WhatWeDo";
import COOTestimony from "@/components/COOTestimony";
import { Footer } from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

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

      {/* Footer */}
      <Footer />
    </>
  );
}
