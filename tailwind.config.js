/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-dark" : "rgb(56, 56, 58)",
        "bg-navbar": "rgb(46, 42, 42)"
      },
      screens: {
        "smobile": "400px",
        'mobile': "600px",
        'tablet': "700px",
        "xtablet": "900px",
        'laptop': '1024px',
        'deskop': '1280px'
      },

    },
    
  },
  plugins: [],
}

