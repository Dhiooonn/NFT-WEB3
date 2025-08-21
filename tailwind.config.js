const { transform } = require('framer-motion');

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
        // custom glass color
        glassLight: 'rgba(255, 255, 255, 0.1)',
        glassDark: 'rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        blueGlow: "2.387px 2.387px 32.882px 0 #2B6DE5",
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'glass-light': 'rgba(255, 255, 255, 0.2)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        backgoundGradient: "linear-gradient(270deg, #2B6DE5 46.9%, #5FA6FE 100%)",
        backgroundCard: "linear-gradient(333deg, #30227D 0%, #124D85 37.4%)",
        backgroundCardSeller: "linear-gradient(90deg, #30227D 0%, #124D85 100%)",
        borderColor: "linear-gradient(333deg, #124D85 37.4%, #30227D 0%)",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out"
      }
    },
  },
  plugins: [],
}

