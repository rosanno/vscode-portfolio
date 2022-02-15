module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
