const colors = {
  primary: ['#32235d', '#5F4B8B', '#8e77bb'],
  secondary: ['#00766c', '#26a69a', '#64d8cb'],
  white: '#ffffff',
  black: '#000000',
  gray: ['#23242e', '#56574f', '#9a9b90', '#c8c8c0', '#efefe9'],
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];

const lineHeights = [1, 1.15, 1.5, 2];

const defaultTheme = {
  colors,
  fontSizes,
  lineHeights,
  breakpoints: ['40em', '52em', '64em'],
  radii: [2, 6, 8, 999],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    serif:
      'Maven Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    mono:
      'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important',
  },
  shadows: {
    small: '1px 2px 4px rgba(0, 0, 0, .1)',
    large: '3px 6px 24px rgba(0, 0, 0, .125)',
  },
  borders: ['1px solid', '2px solid'],
  textStyles: {
    eyebrow: {
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontWeight: 'bold',
    },
    h1: {
      fontSize: fontSizes[5],
      lineHeight: lineHeights[0],
      color: colors.primary[1],
    },
    h2: {
      fontSize: fontSizes[4],
      lineHeight: lineHeights[0],
      color: colors.primary[2],
    },
    h3: {
      fontSize: fontSizes[3],
      lineHeight: lineHeights[0],
      color: colors.gray[1],
    },
    h4: {
      fontSize: fontSizes[2],
      lineHeight: lineHeights[0],
      color: colors.gray[1],
    },
    h5: {
      fontSize: fontSizes[1],
      lineHeight: lineHeights[0],
      color: colors.gray[2],
    },
    h6: {
      fontSize: fontSizes[0],
      lineHeight: lineHeights[0],
      color: colors.gray[2],
    },
  },
  buttons: {
    primary: {
      backgroundColor: colors.primary[0],
      color: colors.white,
      borderColor: colors.primary[0],
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: colors.primary[0],
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
