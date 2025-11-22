/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f9fafb",
          500: "#0f172a",
        },
      },
      fontFamily: {
        // Default sans font
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        // Söhne Mono for monospace text
        mono: ['"Söhne Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
