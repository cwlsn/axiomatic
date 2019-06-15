import styled from 'styled-components';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const Button = styled(Box).attrs({
  as: 'button',
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 6,
})(
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button')
);

export default Button;
