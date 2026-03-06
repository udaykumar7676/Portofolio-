import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          50: "#f2f9ff",
          100: "#c8e8ff",
          200: "#99d3ff",
          300: "#5cb8ff",
          400: "#2d9fff",
          500: "#0084f0",
          600: "#0068be",
          700: "#00508f",
          800: "#003a66",
          900: "#07263f"
        },
        magma: "#ff5f2d",
        neon: "#36f3b7"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 95, 45, 0.22), 0 20px 60px -16px rgba(255, 95, 45, 0.6)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(0,132,240,0.30) 0%, rgba(0,0,0,0) 35%), radial-gradient(circle at 80% 10%, rgba(255,95,45,0.22) 0%, rgba(0,0,0,0) 30%), radial-gradient(circle at 50% 80%, rgba(54,243,183,0.15) 0%, rgba(0,0,0,0) 35%)"
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
};

export default config;
