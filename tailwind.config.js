/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            signature: ["Great Vibes"],
        },
        screens: {
            'sm': '640px',   // Small screens (mobile)
            'md': '768px',   // Medium screens (tablets)
            'lg': '1024px',  // Large screens (laptops)
            'xl': '1280px',  // Extra-large screens (desktops)
        },
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './public/**/*.html',
            './src/**/*.{js,jsx,ts,tsx}',
        ],
    },
}
