/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DC2626',
        'secondary': '#1F2937',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'button-glow': 'button-glow 2s ease-in-out infinite',
        'button-glow-gray': 'button-glow-gray 2s ease-in-out infinite',
        'star': 'star 30s linear infinite',
      },
      keyframes: {
        star: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200vh)' }
        },
        glow: {
          '0%, 100%': {
            'text-shadow': '0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.3)'
          },
          '50%': {
            'text-shadow': '0 0 40px rgba(220,38,38,0.5), 0 0 80px rgba(220,38,38,0.3)'
          }
        },
        'button-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(220,38,38,0.5), 0 0 30px rgba(220,38,38,0.3), 0 0 45px rgba(220,38,38,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(220,38,38,0.5), 0 0 60px rgba(220,38,38,0.3), 0 0 90px rgba(220,38,38,0.1)'
          }
        },
        'button-glow-gray': {
          '0%, 100%': {
            'box-shadow': '0 0 15px rgba(31,41,55,0.5), 0 0 30px rgba(31,41,55,0.3), 0 0 45px rgba(31,41,55,0.1)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(31,41,55,0.5), 0 0 60px rgba(31,41,55,0.3), 0 0 90px rgba(31,41,55,0.1)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 