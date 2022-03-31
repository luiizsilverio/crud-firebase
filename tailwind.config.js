module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/
    },
    {
      pattern: /^to-/
    },
    {
      pattern: /^via-/
    }
  ],
	darkMode: 'class', // false or "class" or "media"
  theme: {
    extend: {},
  },
  plugins: [],
}