/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: (theme) => ({
      center: true,
      padding: '1em',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1240px',
        '2xl': '1330px',
      },
    }),
    fontSize: {
      xs: ['0.75em', '1.34em'],
      sm: ['1.125em', '1.23em'],
      base: ['1.25em', '1.2em'],
      md: ['1.63em', '1.19em'],
      lg: ['2em', '1.2em'],
      xl: ['4em', '1.2em'],
      xxl: ['4.5em', '1.12em'],
      extralg: ['5.4em', '1.12em']
    },
    extend: {
      colors: {
        darkblue: {
          '900': '#00282E',
        },
        red: {
          '900': '#F3535C',
        },
        lime: {
          '900': '#D7FF65',
        },
        lightgray: {
          '900': '#E5E5E5',
        }
      }
    },
  },
  plugins: [],
}

