/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      fontSize: {
        sm: '2.5vh',
        base: '3vh',
        lg: '3.5vh',
        xl: '4vh',
        '2xl': '4.5vh',
        '3xl': '5vh',
        '4xl': '5.5vh',
        '5xl': '6vh',
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
