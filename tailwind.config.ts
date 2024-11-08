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
      fontFamily: {
        'ibm-mono': ['ibm-plex-mono', 'monospace']
      },
      fontWeight: {
        'regular': '400',
        'bold': '800',
      },
    },
  },
  plugins: [],
};
export default config;
