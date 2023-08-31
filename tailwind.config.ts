import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg':
          'linear-gradient(252deg, #69707D -9.94%, #A3A1A4 16.2%, #FFEDE0 61.54%, #FFEDE0 100%)',
      },
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 0%)',
        overlay: 'rgba(0, 0, 0, 0.7)',
        orange: 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      },
      transitionProperty: {
        'text-shadow': 'text-shadow',
        fill: 'fill',
      },
      borderRadius: {
        radii: '10px',
        'radii-4': '4px',
      },
      boxShadow: {
        'sh-cart': '0px 23px 35px 0px rgba(0, 0, 0, 0.10), 0px -1px 10px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    nextui(),
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities({
        '.link-shadow': {
          'text-shadow': '1px 1px 0px rgba(0,0,0,0.2)',
        },
      });
      addVariant('child', '& > *');
    }),
  ],
};
export default config;
