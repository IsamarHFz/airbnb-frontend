// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"

  ],
  theme: {
    extend: {
      colors:{
        'airbnb':'#ff385c',
        'airbnb-dark': '#d50027'

      }
    },
    plugins: [],
  },
}
export default config;
