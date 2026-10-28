/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        brand: {
          accent: "var(--accent)",
          ink: "var(--ink)",
          surface: "var(--surface)",
          canvas: "var(--canvas-base)",
          border: "var(--border)",
        },
      },
      boxShadow: {
        'hard': '4px 4px 0 0 var(--border)',
        'hard-lg': '6px 6px 0 0 var(--border)',
        'hard-xl': '8px 8px 0 0 var(--border)',
        'hard-sm': '2px 2px 0 0 var(--border)',
        'hard-accent': '4px 4px 0 0 var(--accent)',
      },
      animation: {
        'swing': 'swing 3.5s ease-in-out infinite',
        'swing-subtle': 'swingSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 50s linear infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3.5deg)' },
        },
        swingSubtle: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      }
    },
  },
  plugins: [],
}
