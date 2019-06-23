const colors = {
  primary: ['#32235d', '#5F4B8B', '#8e77bb', '#c2b0e5', '#f3edff'],
  secondary: ['#00546d', '#00a1ad', '#60dce5', '#a5f8ff', '#edfdff'],
  danger: ['#c14141', '#ffe0e0'],
  warning: ['#e2c800', '#fcf8d9'],
  success: ['#60c140', '#edffe8'],
  info: ['#3998e5', '#eaf5ff'],
  gray: ['#23242e', '#56574f', '#9a9b90', '#c8c8c0', '#efefe9'],
  white: '#ffffff',
  black: '#000000',
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
  borders: ['1px solid', '2px solid', '6px solid'],
  textStyles: {
    eyebrow: {
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontWeight: 'bold',
    },
    h1: {
      fontSize: fontSizes[5],
      lineHeight: lineHeights[0],
      color: colors.primary[0],
    },
    h2: {
      fontSize: fontSizes[4],
      lineHeight: lineHeights[0],
      color: colors.primary[1],
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
  colorStyles: {
    warning: {
      backgroundColor: colors.warning[1],
      borderColor: colors.warning[0],
      color: colors.warning[0],
    },
    error: {
      backgroundColor: colors.danger[1],
      borderColor: colors.danger[0],
      color: colors.danger[0],
    },
    info: {
      backgroundColor: colors.info[1],
      borderColor: colors.info[0],
      color: colors.info[0],
    },
    success: {
      backgroundColor: colors.success[1],
      borderColor: colors.success[0],
      color: colors.success[0],
    },
  },
  buttons: {
    primary: {
      backgroundColor: colors.primary[0],
      color: colors.white,
      borderColor: colors.primary[0],
      '&:hover': {
        backgroundColor: colors.primary[1],
        borderColor: colors.primary[1],
      },
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: colors.primary[0],
      color: colors.primary[0],
      '&:hover': {
        borderColor: colors.primary[1],
      },
    },
    secondary: {
      backgroundColor: colors.secondary[0],
      color: colors.white,
      borderColor: colors.secondary[0],
      '&:hover': {
        backgroundColor: colors.secondary[1],
        borderColor: colors.secondary[1],
      },
    },
  },
};

export default defaultTheme;
