import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#080809",
        surface: "#0d0d10",
        border: "rgba(255, 255, 255, 0.14)",
        borderStrong: "rgba(255, 255, 255, 0.35)",
      },
      animation: {
        "spin-slow": "spin 36s linear infinite",
        "spin-reverse-slow": "spin-reverse 45s linear infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "dash-flow": "dash-flow 12s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.7" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
