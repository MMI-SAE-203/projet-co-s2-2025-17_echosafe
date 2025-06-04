/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Active le mode sombre basé sur la classe
    theme: {
      extend: {
        fontFamily: {
          primary: ['Nunito', 'sans-serif'],
          secondary: ['Oleo Script', 'sans-serif'],
        },
        colors: {
          primary: '#323f92',
          secondary: '#6e78c4',
        },
      },
    },
    plugins: [],
  }