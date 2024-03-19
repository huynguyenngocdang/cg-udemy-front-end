/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2d2f31',
        secondary: {
          dark: '#371783',
          bold: '#5624d0',
          screen: '#a335ee',
          medium: '#8072e6',
          light: '#bec2fa'
        },
        bestseller: '#eceb98',
        star: '#f69c08',
        grayLight: '#f5f7f8',
        grayDark: '#1c1d1f',
      },
      width: {
        custom: '1200px',
        box: '360px'
      },
      padding: {
        rightBox: '0 400px 0 0'
      },
    },
  },
  plugins: [],
}

