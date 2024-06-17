/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '1vw',
        base: '1.5vw',
        lg: '2vw',
        xl: '2.5vw',
        '2xl': '3vw',
        '3xl': '3.5vw',
        '4xl': '4vw',
        '5xl': '4.5vw',
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      colors: {
        blue1: '#142748',
        blue2: '#2F5AA6',
        blue3: '#62C5E3',
        blue4: '#E9F7FB',
      },
    },
  },
  plugins: [],
};
