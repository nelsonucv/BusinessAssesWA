/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003057', // Deep Ocean Blue
          light: '#004C8C',
          dark: '#001A33',
        },
        secondary: {
          DEFAULT: '#C69214', // Earthy Ochre/Gold
          light: '#E6B02E',
          dark: '#946C0D',
        },
        accent: {
          DEFAULT: '#00A99D', // Vibrant Teal
          light: '#33C2B8',
          dark: '#007A70',
        },
        surface: {
          DEFAULT: '#F3F4F6',
          paper: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
