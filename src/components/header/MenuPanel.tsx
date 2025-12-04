"use client";

import { useRouter } from "next/router";

interface MenuPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuPanel({ open, onClose }: MenuPanelProps) {
  const router = useRouter();

  const MENU_ITEMS: { label: string; target: string }[] = [
    { label: "Home", target: "hero" },
    { label: "Who we are", target: "company" },
    { label: "Our Projects", target: "projects" },
    { label: "What we do", target: "whatwedo" },
    { label: "Contact Us", target: "contact" },
  ];

  const handleClick = (targetId: string) => {
    if (router.pathname !== "/") {
      // If not on homepage, navigate there and pass target via query
      router.push(`/?scrollTo=${targetId}`);
    } else {
      // Already on homepage: scroll after small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
    // Close menu after click
    onClose();
  };

  return (
    <>
      {open && (
        <div
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
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                onClick={() => handleClick(item.target)}
                className="
                  text-black text-3xl font-semibold tracking-tight
                  relative cursor-pointer
                  hover:text-gray-800
                "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
