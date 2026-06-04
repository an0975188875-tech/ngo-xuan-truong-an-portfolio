/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#060818',
        slate: '#0F172A',
        indigo: '#312E81',
        neonBlue: '#22D3EE',
        holoCyan: '#00F0FF',
        purpleGlow: '#8B5CF6'
      },
      backgroundImage: {
        'duel-grid': 'radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%), linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)',
        'card-holo': 'linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)'
      },
      backgroundSize: {
        'grid-size': '40px 40px'
      }
    },
  },
  plugins: [],
}