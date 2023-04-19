/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Khand', 'sans-serif']
    },
    extend: {
      colors: {
        'clr-primary-10': 'hsl(22, 28%, 21%)',
        'clr-primary-9': 'hsl(22, 28%, 29%)',
        'clr-primary-8': 'hsl(22, 28%, 37%)',
        'clr-primary-7': 'hsl(22, 28%, 45%)',
        'clr-primary-6': 'hsl(22, 31%, 52%)',
        'clr-primary-5': 'hsl(22, 31%, 60%)',
        'clr-primary-4': 'hsl(22, 31%, 67%)',
        'clr-primary-3': 'hsl(20, 31%, 74%)',
        'clr-primary-2': 'hsl(22, 31%, 81%)',
        'clr-primary-1': 'hsl(22, 31%, 88%)',
      },
    },
  },
  plugins: [],
};
