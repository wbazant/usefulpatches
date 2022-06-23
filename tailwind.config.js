module.exports = {
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["garden"]
  }
};
