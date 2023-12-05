/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#7286D3', 
        secondColor: '#8EA7E9',
        thirdColor: '#FFF2F2'
      },
      backgroundColor: {
        'main': 'var(--colors-mainColor)', 
        'second': 'var(--colors-secondColor)', 
        'third': 'var(--colors-thirdColor)', 
      },
      textColor: {
        'third': 'var(--colors-thirdColor)'
      }
    },
  },
  plugins: [],
}
