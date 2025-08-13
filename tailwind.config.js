/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [ "./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
      },
      colors: {
        darkBlue: "#06071B",
        blue: "#2B6DE5",
        borderColor: "#124D85",
      },
      boxShadow: {
        blueGlow: "2.387px 2.387px 32.882px 0 #2B6DE5",
      },
      backgroundImage: {
        backgoundGradient: "linear-gradient(270deg, #2B6DE5 46.9%, #5FA6FE 100%)",
        backgroundCard: "linear-gradient(333deg, #30227D 0%, #124D85 37.4%)",
        borderColor: "linear-gradient(333deg, #124D85 37.4%, #30227D 0%)",
      }
    },
  },
  plugins: [],
}

