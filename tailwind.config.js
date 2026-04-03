/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#82B540',
          dark: '#6a9a32',
          light: '#f0f7e6',
        },
        silver: {
          light: '#F8FAFC', // Slate-50
          medium: '#E2E8F0', // Slate-200
          dark: '#94A3B8', // Slate-400
          brushed: '#CBD5E1', // Slate-300
        },
        dark: '#1C1C1C',
        muted: '#64748B', // Slate-500
        border: '#CBD5E1', // Slate-300
        surface: '#F1F5F9', // Slate-100
        card: '#FFFFFF',
      },
      backgroundImage: {
        'liquid-chrome': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'mesh-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
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
      },
    },
  },
  plugins: [],
};
