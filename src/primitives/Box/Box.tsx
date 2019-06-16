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
  Theme,
} from 'styled-system';
import { themed } from '../../utils/theme';

export type CombinedBoxProps = Theme &
  SpaceProps &
  WidthProps &
  ColorProps &
  TextAlignProps;

const Box = styled.div<CombinedBoxProps>`
  font-family: ${({ theme }) => theme.fonts.serif};

  ${space}
  ${width}
  ${color}
  ${textAlign} 
  ${themed('Box')}
`;

export default Box;
