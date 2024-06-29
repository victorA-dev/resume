/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        },
    },
};
export const plugins = [];
