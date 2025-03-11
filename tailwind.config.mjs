/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: '#FFCC00',
        mainBlue: '#07294E',
        textColor: '#4B5D68',
        offWhite:'#F3F1EC',
        darkblue:"#003180",
        orange:"#FB6302",
        lightpurple:"#8794BA",
        grey:"#808080"
      },
      fontFamily: {
        enriqueta: "var(--font-enriqueta)",
        roboto: "var(--font-roboto)",
        poppins: "var(--font-poppins)"
      },
    },
  },
  plugins: [],
};
