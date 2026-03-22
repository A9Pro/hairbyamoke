import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        "gold-dark": "#9A7A2E",
        black: "#080808",
        dark: "#0E0E0E",
        "dark-2": "#161616",
        "dark-3": "#1E1E1E",
        cream: "#F5EDD6",
        "cream-dim": "#D4C4A0",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        serif: ["Playfair Display", "serif"],
        sans: ["Jost", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
