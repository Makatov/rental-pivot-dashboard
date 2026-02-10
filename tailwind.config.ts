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
          primary: '#00B463',
          bg: '#F9F6ED',
          accent: '#3153FF',
          muted: '#F0EDE4',
        },
        edit: {
          primary: '#D4A017',
          bg: '#F9F6ED',
          accent: '#F7E7CE',
          cream: '#F7E7CE',
        },
        brand: {
          brown: '#3A3530',
          warm: '#F9F6ED',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        lora: ['var(--font-lora)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
