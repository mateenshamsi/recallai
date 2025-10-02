/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure it scans your .tsx files
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          accent: "hsl(var(--text-accent))",
          danger: "hsl(var(--text-danger))",
          success: "hsl(var(--text-success))",
          warning: "hsl(var(--text-warning))",
        },
      },
    },
  },
  plugins: [],
};
