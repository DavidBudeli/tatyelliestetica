import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tatyelli: {
          green: "#062E26",
          "green-dark": "#031F1A",
          "green-soft": "#1F5A49",
          gold: "#C8A24A",
          "gold-soft": "#D8C48A",
          beige: "#E9DFC9",
          offwhite: "#F7F2E8",
          graphite: "#1D1D1B",
          rose: "#BD7F6E",
        },
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 46, 38, 0.15)",
        soft: "0 16px 40px rgba(6, 46, 38, 0.09)",
      },
      borderRadius: {
        panel: "8px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
