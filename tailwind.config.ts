import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "3rem",
      },
      backgroundImage: {
        "gradient-green":
          "linear-gradient(352deg, #54AB72 5.5%, #4E9447 93.38%)",
      },
      colors: {
        "anti-flash-white": "#F3F4F6",
        "azureish-white": "#DCF3E7",
        "primary-green": "#54AB72",
        independence: "#4B5563",
        nyanza: "#E1FFE9",
        charcoal: "#374151",
        'dark-jungle-green': "#0F172A",
        "blue-berry": "#3F83F8"
      },
    },
  },
  plugins: [],
};
export default config;
