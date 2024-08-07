/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: {
            500: "#7A08FA",
            200: "#FBF8FF",
          },

          darkblue: {
            700: "#2D3250",
            300: "#424769",
          },

          gold: {
            600: "#eeca2c",
            500: "#ffd829",
          },

          danger: {
            500: "#fa3c08",
          },
        },
      },

      backgroundImage: {
        "morpheus-den": "linear-gradient(to top right, #30cfd0 0%, #330867 100%)",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },

    screens: {
      xl: "1240px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "425px",
    },
  },
  plugins: [],
};
