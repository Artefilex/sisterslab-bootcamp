/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-green": "rgb(8,255,0)",
        "bg-dark" : "rgb(56, 56, 58)",
        "bg-navbar": "rgb(46, 42, 42)",
        "bg-pokemon-card": "rgb(255, 255, 255)",
        "bg-red":"rgb(255, 0, 0)",
        "box-shadow": "rgba(77, 77, 77, 0.25) 0px 14px 28px, rgba(133, 133, 133, 0.22) 0px 10px 10px"
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

