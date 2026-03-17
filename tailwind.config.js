module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-80px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(80px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.8s ease-out forwards",
        slideRight: "slideRight 0.8s ease-out forwards",
      },
    },
  },
};