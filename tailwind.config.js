/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1E7DC9',
        'secondary': '#205D8E',
        'tertiary': 'rgba(2, 111, 154, 0.2);',
        'barbg': 'rgba(2, 111, 154, 0.2);',
        'gradbg': 'rgba(32, 93, 142, 0.42);'
      },
      width: {
        '80': '80px',
        '90': '90px',
        '164': '164.67px',
        '184.52': '184.52px',
        '335.49': '335.49pxs',
      },
      height: {
        '38': '38px',
        '80': '80px',
        '90': '90px',
        '178': '178px',
        '184.52': '184.52px',
        '500': '500px',
        '600': '600px',
        '800': '800px',
      },
      fontSize: {
        '13': '13px',
        '14': '14px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '36': '36px',
        '46': '46px',
        '54': '54px',
        '90': '90px',
      },
      lineHeight: {
        '21': '21px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '39': '39px',
        '36': '36px',
        '53': '53px',
        '60': '60px',
        '86': '86px',
      },
      padding: {
        '8per': '8%'
      }
    },
  },
  plugins: [],
};