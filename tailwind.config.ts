import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        brown: "#816C65",
        beige: "#DEBAA7",
        "beige-light": "#FBF1EB",
        purple: "#664164",
      },
      gridTemplateColumns: {
        "auto-fill-400": "repeat(auto-fill, minmax(300px, 1fr))",
        "auto-fit-400": "repeat(auto-fit, minmax(1fr, 300px))",
        "auto-fill-2": "repeat(auto-fill, min(400px, 400px))",
      },
      screens: {
        xs: "20rem",
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
