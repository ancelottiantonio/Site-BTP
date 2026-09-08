// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Crème / albâtre (fond principal, chaleureux) ---
        cream: {
          50: "#FDFBF7",
          100: "#F8F3EC",
          200: "#F0E7D8",
          300: "#E4D4BC",
          400: "#C9B393",
          500: "#A8916F",
          600: "#8A7358",
          700: "#6B584A",
          800: "#4A3D34",
          900: "#2E2822",
        },
        // --- Anthracite doux (texte, jamais noir pur) ---
        anthracite: {
          DEFAULT: "#2C2A28", // texte principal
          soft: "#4A4744", // texte secondaire
          muted: "#78746E", // texte tertiaire / légendes
        },
        // --- Terracotta (accent principal, chaleureux) ---
        terracotta: {
          light: "#DDA07A",
          DEFAULT: "#C2703D",
          dark: "#9C5527",
        },
        // --- Bleu nuit (accent secondaire, sections contrastées) ---
        navy: {
          light: "#3A4F7A",
          DEFAULT: "#1E2C4C",
          dark: "#141F38",
        },
      },
      fontFamily: {
        // Titres : sans-serif ronde et élégante
        display: ["var(--font-outfit)", "sans-serif"],
        // Corps de texte : lisible, chaleureuse
        sans: ["var(--font-jakarta)", "sans-serif"],
        // Conservé pour compatibilité — mappé sur la même police ronde
        mono: ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        // Échelle généreuse mais fluide, sans agressivité
        "display-xl": ["clamp(3rem, 7vw, 7.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        // Aucune surcharge : on garde l'échelle Tailwind par défaut
        // (rounded-2xl, rounded-3xl, rounded-full... disponibles nativement)
        "4xl": "2rem",
      },
      boxShadow: {
        // Ombres douces, larges, très diffuses — pas de bordures dures
        soft: "0 4px 24px -4px rgba(44, 42, 40, 0.08)",
        "soft-lg": "0 20px 60px -12px rgba(44, 42, 40, 0.12)",
        "soft-xl": "0 30px 90px -20px rgba(44, 42, 40, 0.18)",
      },
      transitionTimingFunction: {
        // Courbe organique, onctueuse — remplace l'ancien easing brutaliste
        organic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      spacing: {
        section: "clamp(5rem, 12vw, 12rem)", // grands espaces entre sections
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
