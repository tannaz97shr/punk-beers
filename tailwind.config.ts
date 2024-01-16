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
        transparent: "transparent",
        "bg-primary": "#fff8e1",
        "bg-secndary": "#FFE0B2",
        "text-primary": "#404040",
        "text-secondary": "#a0a0a0",
        "border-brown": "#8D6E63",
        "custom-orange": "#FF6F00",
      },
    },
  },
  plugins: [],
};
export default config;
