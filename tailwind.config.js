/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff5fda',
          dark: '#f043c9',
          light: '#fff0fb',
        },
        secondary: '#d946ef',
        accent: '#ff2bd6',
        cosmos: {
          950: '#06050b',
          900: '#0b0912',
          850: '#100d19',
          800: '#151124',
          700: '#211837',
        },
        silver: {
          light: '#faf5ff',
          medium: '#eadcfb',
          dark: '#a78bc7',
          brushed: '#cfb7ed',
        },
        dark: '#1b1329',
        muted: '#7e7196',
        border: '#e7d8fb',
        surface: '#faf5ff',
        card: '#FFFFFF',
      },
      backgroundImage: {
        'liquid-chrome': 'linear-gradient(135deg, #fff4fc 0%, #fee5fb 34%, #f7ddff 68%, #ffd8fb 100%)',
        'mesh-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
        'brand-gradient': 'linear-gradient(135deg, #ffb0f2 0%, #ff69e6 18%, #ff2bd6 42%, #d946ef 68%, #8b5cf6 100%)',
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.07)",
        "card-hover": "0 20px 40px -10px rgba(0,0,0,0.15), 0 10px 15px -5px rgba(0,0,0,0.05)",
        neon: "0 24px 70px -24px rgba(255,95,218,0.46), 0 16px 44px -22px rgba(255,43,214,0.28)",
      },
    },
  },
  plugins: [],
};
