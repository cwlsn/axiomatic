import styled from 'styled-components';
import {
  space,
  color,
  width,
  height,
  display,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  fontSize,
  fontFamily,
} from 'styled-system';
import { themed } from '../../utils/theme';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    fontFamily: props => props.theme.fonts.copy,
  },
  space,
  color,
  width,
  height,
  display,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  fontSize,
  fontFamily,
  themed('Box')
);

export default Box;
