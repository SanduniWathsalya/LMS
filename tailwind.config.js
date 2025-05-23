/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    animation: {
      fade: 'fadeIn 2s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%':  { opacity: '0'},
        '100%': { opacity: '1' },
      },
    },
  },

  plugins: [],
};
