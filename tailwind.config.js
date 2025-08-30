/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorfull': '#6366f1',
        'white-1': '#fafafa',
        'white-2': '#f5f5f5',
        'white-3': '#e5e5e5',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'nyght': ['var(--font-nyght)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
