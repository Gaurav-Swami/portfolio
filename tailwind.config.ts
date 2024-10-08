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
        background: "#222831",
        primaryText: "#EEEEEE",
        accent: "#00ADB5",
      },
      // colors: {
      //   background: "#ECCEAE",
      //   primaryText: "#131842",
      // },
    },
  },
  plugins: [],
};
export default config;
