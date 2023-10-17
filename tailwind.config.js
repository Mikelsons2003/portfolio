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
            'sm': '640px',   // Small screens (e.g., mobile)
            'md': '768px',   // Medium screens (e.g., tablets)
            'lg': '1024px',  // Large screens (e.g., laptops)
            'xl': '1280px',  // Extra-large screens (e.g., desktops)
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
