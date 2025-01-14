/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			dark: "#1b1b1b",
			light: "#fff",
			accent: "#7B00D3",
			accentDark: "#ffdb4d",
			gray: "#747474",
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  screens:{
			sxl: "1180px",
			// @media (min-width: 1180px){...}
			xs: "480px"
			// @media (min-width: 480px){...}
		  }
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('@tailwindcss/typography'),
],
} satisfies Config;
