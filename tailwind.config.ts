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
        background: "var(--background)",
        foreground: "var(--foreground)",
        rotate: {
          primary: '#E07A5F',
          bg: '#FDFCFB',
          accent: '#F2CC8F',
          muted: '#F5F0EB',
        },
        edit: {
          primary: '#C9A94E',
          bg: '#0A0A0A',
          accent: '#2D2D2D',
          cream: '#F5F5DC',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
