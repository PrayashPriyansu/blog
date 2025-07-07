import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        orbi: "var(--font-orbi)",
      },
      colors: {
        background: "rgba(var(--color-background))" /* Background color */,
        foreground: "rgba(var(--color-foreground))" /* Text color */,
        card: "rgba(var(--color-card))",
        cardBorder: "rgba(var(--color-card-border))",

        cardText: "rgba(var(--color-card-text))",
        border: "rgba(var(--color-border))",

        bentoWhite: "rgb(224, 225, 215)",
        bentoSWhite: "rgb(245, 239, 232)",
        bentoGreen: "rgb(2,77,67)",
        bentoRed: "rgb(212,3,3)",
        bentoPink: "rgb(246, 93, 72)",
        bentoBlue: "rgb(8, 5, 52)",
        bentoLightBlue: "rgb(74,61,227)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
