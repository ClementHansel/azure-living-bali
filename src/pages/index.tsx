"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import Company from "@/components/home/Company";
import ContactUs from "@/components/home/ContactUs";
import COOTestimony from "@/components/home/COOTestimony";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import WhatWeDo from "@/components/home/WhatWeDo";
import { Project } from "@/types";

export default function Home({}: { projects?: Project[] }) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollTo) {
      const targetId = router.query.scrollTo as string;

      // Small timeout to ensure sections are mounted
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [router.query.scrollTo]);

  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="company">
        <Company />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="whatwedo">
        <WhatWeDo />
      </div>
      <div id="coo">
        <COOTestimony />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}
