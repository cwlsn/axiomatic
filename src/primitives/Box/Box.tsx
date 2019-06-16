import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  fontFamily,
  color,
  order,
  alignSelf,
} from 'styled-system';
import { themed } from '../../utils/theme';

const Box = styled.div.attrs(({ fontFamily }) => ({
  fontFamily: fontFamily || 'serif',
}))(space, width, fontSize, fontFamily, color, order, alignSelf, themed('Box'));

export default Box;
