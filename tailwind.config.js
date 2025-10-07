module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        gray: {
          1: "#111113",
          2: "#19191b",
          3: "#222325",
          4: "#292a2e",
          5: "#303136",
          6: "#393a40",
          7: "#46484f",
          8: "#5f606a",
          9: "#6c6e79",
          10: "#797b86",
          11: "#b2b3bd",
          12: "#eeeef0",
          contrast: "#FFFFFF",
          surface: "rgba(0, 0, 0, 0.05)",
          indicator: "#6c6e79",
          track: "#6c6e79"
        },
        red: {
          1: "#170f0e",
          2: "#201311",
          3: "#3c120e",
          4: "#530b0a",
          5: "#641210",
          6: "#76201c",
          7: "#8f312a",
          8: "#b94038",
          9: "#dc2626",
          10: "#b63d36",
          11: "#ff9083",
          12: "#ffd1ca",
          contrast: "#fff",
          surface: "#2f151180",
          indicator: "#dc2626",
          track: "#dc2626"
        }
      },
      fontFamily: {
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)",
        sans: ["Inter", "sans-serif"]
      },
      borderWidth: {
        1: "1px"
      },
      text: {
        white: "#E8E6E3"
      },
      dropShadow: {
        sm: "1px 2px 2px #000"
      }
    }
  },
  plugins: []
};
