/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileAdaptive: { min: "375px" },
        tablet: "768px",
        desktop: "1440px",
      },
      padding: {
        42: "10.5rem",
      },
      margin: {
        18: "4.5rem",
      },
      colors: {
        "primary-white-color": "#FCFCFC",
        "secondary-white": "#F8F8F8",
        "main-text-color": "#121417",
        "light-green-color": "#A5C0B8",
        "dark-green-color": "#85AA9F",
        "light-green-bg": "rgba(133, 170, 159, 0.1)",
        "light-link-color": "rgba(18, 20, 23, 0.5)",
        "gray-border-color": "rgba(18, 20, 23, 0.1)",
        "red-error-color": "#E90516",
        "green-success-color": "#30B94D",
      },
      backgroundImage: {
        imgStartMob: "url('/public/img/img-mob-1x.png')",
        imgStartDesktop: "url('/public/img/img-desc-1x.png')",
        bgTablet: "url('/public/img/bg-tablet.png')",
        bgDesktop: "url('/public/img/bg-desk.png')",
      },
      fontFamily: {
        maxPaw: ["MacPaw Fixel Display", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      fontSize: {
        tiny: ["16px", "1.5"],
        small: ["18px", "1.33"],
        lightSmall: ["12px", "1.33"],
        lightMedium: ["22px", "1.33"],
        medium: ["32px", "1"],
      },
      borderRadius: {
        sm: "8px",
        md: "15px",
        lg: "30px",
        full: "50%",
      },
    },
  },
  plugins: [],
};
