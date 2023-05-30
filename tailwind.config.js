module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#FFA500',
        secondary: '#FFD700',
        accent: '#FF6347',
        warning: '#FF4500',
        'light-background': '#FFF8DC',
        'dark-background': '#FFFAF0',
        'subtle-accent': '#F0E68C',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #FFA500, #FFD700)',
        'gradient-2': 'linear-gradient(135deg, #FFD700, #FF6347)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}