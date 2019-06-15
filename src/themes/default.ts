const defaultTheme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: ['#4325c6'],
    secondary: ['#01b7b4'],
    white: '#ffffff',
    black: '#000000',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    serif:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    mono:
      'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
};

export default defaultTheme;
