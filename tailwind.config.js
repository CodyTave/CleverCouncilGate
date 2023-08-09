/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aca: ["#109CD7", "#1187B9", "#F1FBFF "],
        tech: ["#CF4187", "#B02D6E", "#FDF5F9"],
        com: ["#C6A180", "#FFF9F4"],
        light: ["#F9F9FC"],
        dark: ["#141419 "],
      },
      backgroundColor: {
        aca: ["#109CD7", "#1187B9", "#F1FBFF "],
        tech: ["#CF4187", "#B02D6E", "#FDF5F9 "],
        com: ["#C6A180", "#FFF9F4"],
        light: ["F9F9FC"],
        dark: ["#141419 "],
      },
      screens: {
        xl: "1850px",
        lg: "1600px",
        md: "1300px",
        mmd: "990px",
        sm: "750px",
        msm: "600px",
        xs: "550px",
        xxs: "390px",
        tn: "175px",
      },
    },
  },
  plugins: [],
};
