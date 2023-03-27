/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#285ba8",
        
"secondary": "#fce380",
        
"accent": "#e56784",
        
"neutral": "#1C2126",
        
"base-100": "#EEEBEF",
        
"info": "#92A0E3",
        
"success": "#0D733E",
        
"warning": "#B96709",
        
"error": "#EE2F3F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}