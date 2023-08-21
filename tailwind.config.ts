import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow': '4px 4px 0px 0px rgba(95, 106, 161, 0.10);',
      },
      colors: {
        links: "#4891FF",
        primary: "#5F7D95",
        button: "#4891FF",
        buttonHover: "#4891F1",
        "gray-ultra-light": "#f8f8f8",
        "gray-ultra-dark": "#333",
        "gray-medium": "#7b7b7b",
        danger: "#7b7b7b",
      },
      width: {
        input: "462px"
      }

    },
  },
  plugins: [],
}
export default config