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
      },
      keyframes: {
        slideLeft: {
          
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        },
        resetPosition: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.5s ease-out',
        resetPosition: 'resetPosition 0.5s ease-in',
      },
    },
  },
  plugins: [],
};

export default config;

