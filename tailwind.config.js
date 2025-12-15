/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f8fa",
        primary: "#162C45" /* Deep Blue */,
        secondary: "#84C9E2" /* Light Blue Button/Accent */,
        secondaryHover: "#73b2c9",
        tertiary: "#1B3756" /* Darker Blue for Cards */,
        cardGray: "#F2F4F6",
        borderGray: "#E5E7EB",
      },
      fontFamily: {
        serif: ["Forum", "serif"],
        sans: ["DM Sans", "sans-serif"],
        signature: ["Great Vibes", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
