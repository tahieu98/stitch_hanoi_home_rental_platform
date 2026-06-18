import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051625",
        "on-primary": "#ffffff",
        "primary-container": "#1b2b3a",
        "on-primary-container": "#8292a5",
        "inverse-primary": "#b8c8dc",
        "primary-fixed": "#d3e4f8",
        "primary-fixed-dim": "#b8c8dc",
        "on-primary-fixed": "#0c1d2b",
        "on-primary-fixed-variant": "#384858",

        secondary: "#924a34",
        "on-secondary": "#ffffff",
        "secondary-container": "#fea186",
        "on-secondary-container": "#783522",
        "secondary-fixed": "#ffdbd1",
        "secondary-fixed-dim": "#ffb5a0",
        "on-secondary-fixed": "#3b0900",
        "on-secondary-fixed-variant": "#753320",

        tertiary: "#735c00",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#cca830",
        "on-tertiary-container": "#4f3e00",
        "tertiary-fixed": "#ffe088",
        "tertiary-fixed-dim": "#e9c349",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#574500",

        background: "#fbf9f9",
        "on-background": "#1b1c1c",
        surface: "#fbf9f9",
        "surface-dim": "#dbdad9",
        "surface-bright": "#fbf9f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3f3",
        "surface-container": "#efeded",
        "surface-container-high": "#e9e8e7",
        "surface-container-highest": "#e4e2e2",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#43474c",
        "inverse-surface": "#303031",
        "inverse-on-surface": "#f2f0f0",
        outline: "#74777c",
        "outline-variant": "#c4c6cc",
        "surface-tint": "#506071",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        headline: ["var(--font-hanken)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "headline-lg": ["1.875rem", { lineHeight: "2.375rem", fontWeight: "600" }],
        "headline-md": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        "label-lg": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.04em", fontWeight: "600" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      spacing: {
        "stack-sm": "0.5rem",
        "stack-md": "1rem",
        "stack-lg": "2rem",
        "stack-xl": "4rem",
        gutter: "1.5rem",
        "margin-mobile": "1rem",
        "margin-desktop": "3rem",
        "container-max": "80rem",
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(5, 22, 37, 0.05)",
        "card": "0 4px 20px rgba(5, 22, 37, 0.15)",
        "card-hover": "0 8px 30px rgba(5, 22, 37, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
