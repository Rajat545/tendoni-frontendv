import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image1': "url('/public/images/slider/sunny-meadow-landscape.jpg')",
        'image2': "url('/public/images/slider/cardboard.jpg')"
      }),
      colors: {
        darkColor: "#262626",
        accentColor: "#BF9E60"
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        merriweather: ['var(--font-merriweather)'],
        poppins: ['var(--font-poppins)'],
      },

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [
  ],
}
export default config
