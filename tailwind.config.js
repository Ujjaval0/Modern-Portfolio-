/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7F00FF',
          dark: '#6A00D6',
        },
        secondary: {
          DEFAULT: '#3700B3',
        },
        background: {
          dark: '#0B0C2A',
          darker: '#0D0E35',
        },
      },
    },
  },
  plugins: [],
}
