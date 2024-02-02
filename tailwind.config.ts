/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
// #34251A
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#192C16",
          secondary: "#00daf4",
          success: "#167E27",
          warning: "#dc8d00",
          error: "#f4395d",
          default: "#2F2E41",
        },
      },
    ],
  },
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [daisyui],
};
