/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgColor: 'var(--color-Bgcolor)',
        TextColor: 'var(--color-TextColor)'
      },
    },
  },
  plugins: [],
}
