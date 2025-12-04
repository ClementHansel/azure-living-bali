"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
        {/* Left section: brand */}

        <div className="space-y-4">
          <Link href="/" className="block">
            <h3 className="text-3xl font-semibold tracking-tight cursor-pointer">
              NEO THE AGENCY
            </h3>
          </Link>
        </div>

        {/* Right section: legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 text-gray-400 text-sm"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center md:justify-end">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <span className="hidden sm:block text-gray-600">|</span>

            <Link
              href="/cookies"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Preference
            </Link>
          </div>

          <p className="text-xs text-gray-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Neo The Agency. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom line animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="h-1px bg-linear-to-r from-white/20 via-white/60 to-white/20"
      />
    </footer>
  );
};
