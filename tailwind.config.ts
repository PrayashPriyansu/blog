import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "rgba(var(--color-background))" /* Background color */,
        foreground: "rgba(var(--color-foreground))" /* Text color */,

        header: "rgba(var(--color-header))",

        surface: "rgba(var(--color-surface))" /* Section or card background */,
        primary:
          "rgba(var(--color-primary))" /* Primary action color (buttons) */,
        border: "rgba(var(--color-border))" /* Border color */,
      },
    },
  },
  plugins: [],
} satisfies Config;
