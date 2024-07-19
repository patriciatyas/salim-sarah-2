/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },
      backgroundImage: {
        'paper': "url('/public/images/background-paper.png')",
        'landing-page': "url('/public/images/pilar-2.png')",
        'wedding-gift': "url('/public/images/flower-pillar.png')",
        'right-bg' : "url('/public/images/right-bg.png')",
        'new-landing-page': "url('/public/images/new-landing-page.png')",
      },
      colors: {
        'maroon': '#730101',
      },
    },
  },
  plugins: [],
};

