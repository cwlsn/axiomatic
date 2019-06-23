import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#1181c6',

  // UI
  appBg: '#222',
  appContentBg: 'white',
  appBorderColor: '#222',
  appBorderRadius: 8,

  // Typography
  fontBase:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  fontCode:
    'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important',

  // Text colors
  textColor: '#aaa',
  textInverseColor: '#333',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#333',

  // Form colors
  inputBg: 'white',
  inputBorder: '#444',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  gridCellSize: 8,
  layoutMargin: 120,

  brandTitle: 'Axiomatic Design System',
  brandUrl: 'https://axiomatic.design',
  //   brandImage: 'https://placehold.it/350x150',
});
