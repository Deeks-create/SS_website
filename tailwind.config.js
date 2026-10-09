/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050505",       // Deepest black
          card: "#0d0a0b",       // Very dark burgundy-tinted black
          hover: "#171012",      // Slightly lighter burgundy-black
          border: "#2a1b1e",     // Deep burgundy border
          burgundy: "#4a0410",   // Rich editorial burgundy
          red: "#e11d48",        // Rose/vibrant red
          "red-hover": "#be123c",
          "red-light": "#ffe4e6",
          "red-glow": "rgba(225, 29, 72, 0.15)",
          gold: "#fbbf24",
          muted: "#94a3b8",
          light: "#f8fafc",
          surface: "#ffffff"
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        editorial: ['Playfair Display', 'Georgia', 'serif'], // Fallback if we ever use serif
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'blur(40px)' },
          '100%': { opacity: '0.8', filter: 'blur(60px)' },
        }
      }
    },
  },
  plugins: [],
}
