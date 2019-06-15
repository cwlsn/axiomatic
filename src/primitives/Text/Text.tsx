import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const Text = styled(Box).attrs({ as: 'p' })(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text')
);

export default Text;
