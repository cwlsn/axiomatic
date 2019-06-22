import styled from 'styled-components';
import {
  space,
  width,
  color,
  textAlign,
  SpaceProps,
  WidthProps,
  ColorProps,
  TextAlignProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  Theme,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system';
import { themed } from '../../utils/theme';

export type CombinedBoxProps = Theme &
  SpaceProps &
  WidthProps &
  ColorProps &
  TextAlignProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Box = styled.div<CombinedBoxProps>`
  font-family: ${({ theme }) => theme.fonts.serif};
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${space}
  ${width}
  ${color}
  ${textAlign} 
  ${themed('Box')}
`;

export default Box;
