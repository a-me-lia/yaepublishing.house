
const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ibm)"],
      },
      textShadow: {
        DEFAULT: '5px 5px rgba(232, 0, 133,0.4), 10px 10px rgba(232, 0, 133,0.3), 15px 15px rgba(232, 0, 133,0.2), 20px 20px rgba(232, 0, 133,0.1), 25px 25px rgba(232, 0, 133,0.05)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
