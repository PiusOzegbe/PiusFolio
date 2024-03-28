/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sec-color': '#3b82f6',
        "firstD": "#000000",
        "secondD": "#130F40",
        "lightest-slate": "#ccd6f6",
        "slate": "#8892b0",
        "contact": "rgba(255, 255, 255, 0.08)"
      },
    },
  },
  plugins: [],
}

