/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#ffffff',
        ink: '#111111',
        mute: '#555555',
        line: '#e5e5e5',
        brand: {
          DEFAULT: '#3070f0',
          soft: '#e8f0fe',
          deep: '#2454b4',
        },
        // aliases used by existing pages
        primary: '#ffffff',
        secondary: '#f7f7f7',
        accent: '#3070f0',
        mist: '#ffffff',
        surface: '#f7f7f7',
        muted: '#555555',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
