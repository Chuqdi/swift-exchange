import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0D",
          900: "#131217",
          800: "#1B1A20",
          700: "#28262E",
        },
        ember: {
          300: "#FFB25E",
          400: "#FF8A3D",
          500: "#FF5A1F",
          600: "#E8430E",
        },
        flare: {
          500: "#FF2E63",
        },
        wa: {
          500: "#25D366",
          600: "#1FAE55",
        },
        paper: {
          100: "#F6F1E9",
          300: "#D8D2C8",
        },
        mute: {
          400: "#9C9591",
          500: "#736C68",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "ember-gradient":
          "linear-gradient(115deg, #FF2E63 0%, #FF5A1F 42%, #FFB25E 100%)",
        "ember-gradient-soft":
          "linear-gradient(180deg, rgba(255,90,31,0.16) 0%, rgba(255,90,31,0) 100%)",
        "ember-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,138,61,0.25), transparent 60%)",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "bounce-dot": {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.5" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        "flash-up": {
          "0%": { backgroundColor: "rgba(37,211,102,0.25)" },
          "100%": { backgroundColor: "rgba(37,211,102,0)" },
        },
        "flash-down": {
          "0%": { backgroundColor: "rgba(255,46,99,0.25)" },
          "100%": { backgroundColor: "rgba(255,46,99,0)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite",
        "bounce-dot": "bounce-dot 1.4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "flash-up": "flash-up 1s ease-out",
        "flash-down": "flash-down 1s ease-out",
      },
      backgroundSize: {
        "gradient-lg": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
