import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('../../public/background/bg.svg')",
        main2: "url('../../public/background/bg2.svg')",
        hero: "url('../../public/background/cat.jpg')",
        sasuke: "url('../../public/background/sasuke.jpg')",
      },
      colors: {
        primary: "#2563eb",
        secondary: "#a5b4fc",
        third: "#fb923c",
        dark: "#172554",
      },
    },
  },
  plugins: [],
};
export default config;
