import { colorList, semanticColorList } from "@/styles/color";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        ...colorList,
        fonts: {
          sen: { value: 'var(--font-sen)' },
        }
      },
      semanticTokens: semanticColorList,

    },
  },

  "jsxFramework": "react",
  
  // The output directory for your css system
  outdir: "styled-system",
});
