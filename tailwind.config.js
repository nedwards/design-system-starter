module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'var(--grid-container-xs)',
        sm: 'var(--grid-container-sm)',
        md: 'var(--grid-container-md)',
        lg: 'var(--grid-container-lg)',
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)'
      }
    },
  },
  plugins: [],
}
