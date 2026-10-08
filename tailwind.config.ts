import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#070707",
        panel: "#111110",
        ink: "#F3F0EA",
        muted: "#9C988F",
        line: "#24231F",
        accent: "#7FD6E8",
        warm: "#F0B27A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        cut: "cubic-bezier(0.76, 0, 0.24, 1)",
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
