/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                prism: {
                    red: '#ff4d4d',
                    orange: '#ffa64d',
                    yellow: '#ffff4d',
                    green: '#4dff4d',
                    blue: '#4d4dff',
                    indigo: '#4b0082',
                    violet: '#9400d3',
                }
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'refraction': 'refraction 3s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                refraction: {
                    '0%, 100%': { filter: 'hue-rotate(0deg) blur(0px)' },
                    '50%': { filter: 'hue-rotate(180deg) blur(2px)' },
                }
            }
        },
    },
    plugins: [],
}
