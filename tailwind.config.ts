import type { Config } from "tailwindcss";

export default {
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
        "coda-blue-100": "#B3D0FF",
        "coda-blue-500": "#1A72FF",
        "coda-blue-600": "#0052D7"
      },
    },
  },
  plugins: [],
} satisfies Config;
