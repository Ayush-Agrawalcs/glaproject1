/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EAEDFD',
          100: '#D6DCFB',
          200: '#ADB9F7',
          300: '#8495F3',
          400: '#5C72EF',
          500: '#4361EE', // Main primary
          600: '#1E43E3',
          700: '#1736BF',
          800: '#13299A',
          900: '#0F1F76',
        },
        secondary: {
          50: '#E4F7F5',
          100: '#C9F0EB',
          200: '#94E1D6',
          300: '#5ED2C2',
          400: '#32C8B9',
          500: '#2EC4B6', // Main secondary
          600: '#25A196',
          700: '#1D7F77',
          800: '#165D57',
          900: '#103B38',
        },
        accent: {
          50: '#FFF1E0',
          100: '#FFE3C2',
          200: '#FFC785',
          300: '#FFAB47',
          400: '#FFA530',
          500: '#FF9F1C', // Main accent
          600: '#FF8D00',
          700: '#E67E00',
          800: '#BF6900',
          900: '#995300',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      boxShadow: {
        'neu': '8px 8px 16px #e0e0e0, -8px -8px 16px #ffffff',
        'neu-sm': '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff',
        'neu-inner': 'inset 2px 2px 5px #c8c9cc, inset -2px -2px 5px #ffffff',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};