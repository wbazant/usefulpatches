module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["garden"]
  }
};
