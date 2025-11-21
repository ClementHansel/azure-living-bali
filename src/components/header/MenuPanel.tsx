"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MenuPanelProps {
  open: boolean;
  headerHeight: number;
}

export default function MenuPanel({ open, headerHeight }: MenuPanelProps) {
  // Define menu items and their target section IDs
  const MENU_ITEMS: { label: string; target: string }[] = [
    { label: "Home", target: "hero" },
    { label: "Who we are", target: "company" },
    { label: "Our Projects", target: "projects" },
    { label: "What we do", target: "whatwedo" },
    { label: "Contact Us", target: "contact" },
  ];

  // Scroll to section smoothly
  const handleClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: headerHeight, opacity: 1 }}
          exit={{ y: -500, opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ top: 0 }}
          className="
            fixed left-0 w-full h-dvh
            bg-white/90 backdrop-blur-2xl
            z-150
            shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]
            border-b border-white/20
            px-8 pt-10
          "
        >
          <nav className="flex flex-col space-y-6 mt-4">
            {MENU_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                onClick={() => handleClick(item.target)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.15 + i * 0.06,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-black text-3xl font-semibold tracking-tight
                  relative cursor-pointer
                  transition-all duration-300
                  hover:text-gray-800
                "
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
