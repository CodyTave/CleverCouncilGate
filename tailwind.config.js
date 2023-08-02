/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aca: ["#109CD7", "#1187B9", "#F1FBFF "],
        com: ["#CF4187", "B02D6E", "#FDF5F9 "],
        tech: ["#C6A180", "#FFF9F4"],
        light: ["#F9F9FC"],
        dark: ["#141419 "],
      },
      backgroundColor: {
        aca: ["#109CD7", "#1187B9", "#F1FBFF "],
        com: ["#CF4187", "B02D6E", "#FDF5F9 "],
        tech: ["#C6A180", "#FFF9F4"],
        light: ["F9F9FC"],
        dark: ["#141419 "],
      },
    },
  },
  plugins: [],
};
