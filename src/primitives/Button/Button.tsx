import styled from 'styled-components';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  variant,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const buttons = variant({ key: 'buttons' });

const Button = styled(Box).attrs(({ variant, border, borderRadius }) => ({
  as: 'button',
  variant: variant || 'primary',
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  border: border || 1,
  borderRadius: borderRadius || 1,
}))(
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  buttons,
  themed('Button')
);

export default Button;
