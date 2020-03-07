import styled from 'styled-components';
import {
  space,
  width,
  color,
  textAlign,
  borders,
  borderColor,
  borderRadius,
  display,
  fontSize,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  Theme,
  DisplayProps,
  FontSizeProps,
} from 'styled-system';
import { themed } from '../../utils/theme';

export type CombinedBoxProps = Theme &
  SpaceProps &
  WidthProps &
  ColorProps &
  TextAlignProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  DisplayProps &
  FontSizeProps;

const Box = styled.div<CombinedBoxProps>`
  font-family: ${({ theme }) => theme.fonts.serif};
  ${display}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${space}
  ${width}
  ${color}
  ${textAlign} 
  ${fontSize}
  ${themed('Box')}
`;

export default Box;
