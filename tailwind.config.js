// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-delay-1': 'float 3s ease-in-out infinite 0.6s',
        'float-delay-2': 'float 3s ease-in-out infinite 1.2s',
        'float-delay-3': 'float 3s ease-in-out infinite 1.8s',
        'float-delay-4': 'float 3s ease-in-out infinite 2.4s',
        slideDown: 'slideDown 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
      }
    }
  },
  plugins: [],
}