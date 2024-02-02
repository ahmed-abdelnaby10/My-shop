/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'land': 'calc(100vh - 80px)'
      },
      keyframes: {
        "up-down": {
          '0%, 100%': { bottom: '15px', 'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' },
          '50%': { bottom: '0px', 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'},
        }
      },
      animation: {
        "up-down": 'up-down 1s infinite',
        "land": 'up-down 1.5s infinite',
        "flash": 'pulse 0.3s ',
      },
      gridTemplateColumns: {
        "grid4":"repeat(4, minmax(200px, 1fr))",
        "grid3":"repeat(3, minmax(250px, 1fr))",
        "grid2":"repeat(2, minmax(250px, 1fr))",
        "grid1":"repeat(1, minmax(205px, 1fr))",
      }
    },
    screens: {
      'small': {'max': '640px'},
      'medium': {'min': '641px', 'max': '768px'},
      'large': {'min': '769px', 'max': '992px'},
      'xlarge': {'min': '993px', 'max': '1200px'},
      'xxxlarge': {'min': '1201px'},
      'extralarge': {'min': '1300px'},
      'smallerThanLarge': {'max': '992px'},
      'moreThanLarge': {'min': '993px'},
      'small700': {'max': '701px'},
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '15': '15px',
      '170': '170px',
      '500': '500px',
    },
    plugins: [],
  }
}

