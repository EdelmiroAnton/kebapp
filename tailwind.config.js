/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: "#632B30",
        cereal: "#E6AF2E",
        naplesYellow: "#FADF63",
        mindaro: "#E7EB90",
        blue: "#2274A5",
      },
    },
  },
  plugins: [],
};
