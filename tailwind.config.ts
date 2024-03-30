import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Beige: '#DBDBD8',
        Yellow: '#F6AC5C',
        Blue: '#173A5A',
        LightBlue: '#2A70B7',
        Red: '#B02237',
        Green: '#005200',
        Cyan: '#009B94',
        Grey: '#363636',
        LightGrey: '#CCCCCC',
        Orange: '#D85716',
        Violet: '#7F00B2',
      }
    },
  },
  plugins: [],
}
export default config
