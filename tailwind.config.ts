import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      margin: {
        calcBtn: 'calc(100% + 16px)',
      },
      fontFamily: {
        'sans': ["Lexend", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        defCol1: '#2276d6',
        defCol2: '#579CEB',
        defCol3: '#7EB1EB',
        defCol4: '#3B6BA1',
        defDark: '#1b1f1b',
        defGray: '#D5DAE5'
      },
      boxShadow: {
        'whiteRgba': 'rgba(255, 255, 255, .3) 0px 0px 0px, rgba(255, 255, 255, .3) 0px 0px 0px 5px', //White shadow
        'blackShadow': 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px', //Blue shadow (for testing purposes)
      },
    },

  },
  plugins: [],
};
export default config;

