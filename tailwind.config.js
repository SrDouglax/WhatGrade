/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xl: "60px",
      },
      colors: {
        red: {
          500: "#FF3D00",
        },
        gray: {
          200: "#5C5C5C",
          300: "#303030",
          900: "#1A1A1A",
        },
      },
      backgroundColor: {
        gray: {
          200: "#5C5C5C",
          300: "#303030",
          900: "#1A1A1A",
        },
      },
      borderColor: {
        gray: {
          200: "#5C5C5C",
          300: "#303030",
          900: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};