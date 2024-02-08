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
        primary: "#23A6F0",
        secondary: "#737373",
        red: "#E74040",
        "primary-10": "#2A7CC7",
        "secondary-10": "#EDEDED"
      },
    },
  },
  plugins: [],
};
export default config;
