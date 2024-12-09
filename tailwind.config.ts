import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
        "coda-black-100": "#181818",
        "coda-black-200": "#303030",
        "coda-blue-100": "#B3D0FF",
        "coda-blue-200": "#8FBAFF",
        "coda-blue-300": "#66A1FF",
        "coda-blue-400": "#4D91FF",
        "coda-blue-500": "#1A72FF",
        "coda-blue-600": "#0052D7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
