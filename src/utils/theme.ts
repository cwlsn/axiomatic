import defaultTheme from '../themes/default';
import { get, first } from 'lodash';
import colorable from 'colorable';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimesCircle,
} from 'react-icons/fa';

export const themed = key => props => props.theme[key];

const themeLight = get(defaultTheme.colors, 'white', '#ffffff');
const themeDark = get(defaultTheme.colors, 'gray.0', '#000000');

export const lightOrDarkColor = (
  bgColor,
  lightColor = themeLight,
  darkColor = themeDark
) => {
  // If the first char is not a #, it must be a theme color, if not default to white
  const color =
    bgColor.charAt(0) === '#'
      ? bgColor.substring(1, 7)
      : get(defaultTheme.colors, bgColor, '#ffffff').substring(1, 7);
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uiColors = [r / 255, g / 255, b / 255];
  const c = uiColors.map(col => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? darkColor : lightColor;
};

export const ratioPadding = ratio => {
  const ratioRegex = /([0-9])*x([0-9])*/;
  if (!ratio.match(ratioRegex)) {
    return '56.25%'; // 16:9
  }
  const [width, height] = ratio.split('x');
  const value = (height / width) * 100;
  return `${value}%`;
};

export const contrastLevelAndCompliance = (bg, fg) => {
  // Only dealing with two colors, so just need the first result and combo
  const info = first(
    get(first(colorable({ bg, fg }, { compact: true })), 'combinations')
  );
  const roundedContrast = info.contrast.toFixed(2);
  const level = info.accessibility.aaa
    ? 'AAA'
    : info.accessibility.aa
    ? 'AA'
    : 'FAIL';
  return `${roundedContrast} ${level}`;
};

export const renderIcon = (status: string): JSX.Element => {
  // This is a weird workaround
  switch (status) {
    case 'info':
    default:
      return FaInfoCircle({});
    case 'warning':
      return FaExclamationCircle({});
    case 'success':
      return FaCheckCircle({});
    case 'error':
      return FaTimesCircle({});
  }
};
