module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pneuma: {
          lime: "#C9FF3D",
          "lime-hover": "#B8EC29",
          black: "#121212",
          graphite: "#202020",
          panel: "#1B1B1B",
          surface: "#FFFFFF",
          offwhite: "#F4F5F2",
          muted: "#9CA3AF",
          "border-dark": "rgba(255,255,255,0.10)",
          "border-light": "#E5E7EB",
          success: "#31C56C",
          warning: "#F5B942",
          error: "#F05252",
        },
      },
    },
  },
  plugins: [],
}
