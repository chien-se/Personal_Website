import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#faf7f2",
          100: "#f3ede3",
          200: "#e6dac6",
          300: "#d4c1a0",
          400: "#c2a67a",
          500: "#b08d5a",
          600: "#8b6d3f",
          700: "#6b5330",
          800: "#4a3a22",
          900: "#2e2416",
        },
        forest: {
          50: "#f2f7f2",
          100: "#e0ede0",
          200: "#c1dbc1",
          300: "#94c294",
          400: "#6aaa6a",
          500: "#4a8f4a",
          600: "#3a7340",
          700: "#2e5a32",
          800: "#234425",
          900: "#1a331c",
        },
        sky: {
          50: "#f0f5fa",
          100: "#dce8f3",
          200: "#b8d1e8",
          300: "#8bb4d6",
          400: "#6499c3",
          500: "#4a7faa",
          600: "#3a6588",
          700: "#2e4f6b",
          800: "#233c52",
          900: "#1a2b3b",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
