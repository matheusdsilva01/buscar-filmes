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
      backgroundImage: {
        "search-icon":
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSI4IiBjeT0iOCIgcj0iOCIvPjxtYXNrIGlkPSJiIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii43Ij48dXNlIHN0cm9rZT0iI0ZGRiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSI0IiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Im0xMy40MTQgMTEgNi4zNjcgNi4zNjdhLjk5NS45OTUgMCAwIDEtLjAwMyAxLjQxMWMtLjM5LjM5LTEuMDMuMzg1LTEuNDEuMDAzTDEyIDEyLjQxNCAxMy40MTQgMTFaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==')"
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
