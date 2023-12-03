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
        bg: 'rgb(32 31 35)',
        violet: 'rgb(176, 102, 243)',
        'gray-secondary': 'rgb(44 44 44)',
        'sportif/30': 'rgba(61,100,209,.3)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(278deg, #b066f3, #c20dc5);',
      },
      screens: {
        lg: { min: '1200px' },
      },
    },
  },
  plugins: [],
};
