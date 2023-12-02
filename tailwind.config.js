/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: 'rgb(176, 102, 243)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(278deg, #b066f3, #c20dc5);',
      },
      screens: {
        lg: { max: '900px' },
      },
    },
  },
  plugins: [],
};
