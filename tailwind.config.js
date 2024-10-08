/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#00CF5D',
                secondary: '#111A28',
                tertiary: '#1D293A',
            },
            container: {
                center: true,
            }
        },
    },
    plugins: [],
};
