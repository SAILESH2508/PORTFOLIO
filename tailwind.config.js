/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Indigo 600 - More vibrant
          hover: '#4338ca',   // Indigo 700
          light: '#818cf8',   // Indigo 400
        },
        secondary: {
          DEFAULT: '#db2777', // Pink 600 - Deeper/More vibrant
          hover: '#be185d',   // Pink 700
          light: '#f472b6',   // Pink 400
        },
        accent: {
          DEFAULT: '#7c3aed', // Violet 600
          hover: '#6d28d9',   // Violet 700
          light: '#a78bfa',   // Violet 400
        },
        purple: {
          DEFAULT: '#a855f7', // Purple 500
          hover: '#9333ea',   // Purple 600
          light: '#c084fc',   // Purple 400
        },
        background: {
          dark: '#020617',    // Slate 950 - Darker/Richer
          card: '#0f172a',    // Slate 900
          light: '#f1f5f9',   // Slate 100
        },
        surface: {
          dark: '#1e293b',
          light: '#ffffff',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
