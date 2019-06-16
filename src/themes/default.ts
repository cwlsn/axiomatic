import { color, borderColor } from 'styled-system';

const colors = {
  primary: ['#1181c6'],
  secondary: ['#a03983'],
  white: '#ffffff',
  black: '#000000',
  gray: ['#efefe9'],
};

const defaultTheme = {
  colors,
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  radii: [2, 6, 8, 999],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    serif:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    mono:
      'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important',
  },
  shadows: {
    small: '1px 2px 4px rgba(0, 0, 0, .1)',
    large: '3px 6px 24px rgba(0, 0, 0, .125)',
  },
  borders: ['1px solid', '2px solid'],
  buttons: {
    primary: {
      backgroundColor: colors.primary[0],
      color: colors.white,
      borderColor: colors.primary[0],
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary[0],
    },
    secondary: {
      backgroundColor: colors.secondary[0],
      color: colors.white,
      borderColor: colors.secondary[0],
    },
  },
};

export default defaultTheme;
