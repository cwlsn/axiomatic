import styled from 'styled-components';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  FontWeightProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  ButtonStyleProps,
  variant,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedButtonProps
  extends FontWeightProps,
    BordersProps,
    BorderColorProps,
    BorderRadiusProps,
    ButtonStyleProps {}

export interface AdditionalButtonProps {
  as?: string;
  fontSize?: number;
  px?: number;
  py?: number;
  borderRadius?: number;
  border?: number;
  variant?: 'primary' | 'secondary' | 'outline';
}

const buttons = variant({ key: 'buttons' });

const Button = styled(Box).attrs<AdditionalButtonProps>(
  ({ as = 'button', borderRadius = 1, border = 1, variant = 'primary' }) => ({
    as,
    borderRadius,
    border,
    variant,
    px: 3,
    py: 2,
    fontSize: 2,
  })
)<CombinedButtonProps>`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: bold;
  cursor: pointer;

  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${buttons}
  ${themed('Button')}
`;

export default Button;
