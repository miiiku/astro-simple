/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
		extend: {},
    screens: {
      "mobile": { "max": "767px" },
      "desktop": { "min": "768px" },
      ...defaultTheme.screens,
    },
  },
	plugins: [],
}
