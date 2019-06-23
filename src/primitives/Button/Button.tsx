import React, { MouseEvent } from 'react';
import styled, { keyframes } from 'styled-components';
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
import { FaSpinner } from 'react-icons/fa';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedButtonProps
  extends FontWeightProps,
    BordersProps,
    BorderColorProps,
    BorderRadiusProps,
    ButtonStyleProps {
  onClick?: MouseEvent;
  disabled?: boolean;
}

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

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const AnimFaSpinner = styled(FaSpinner)`
  animation: ${rotate} 1.3s ease infinite;
  font-size: 14px;
  margin-right: ${({ theme }) => theme.space[2]}px;
`;

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
  transition: all 0.3s ease;

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[3]};
    border-color: ${({ theme }) => theme.colors.gray[3]};
    color: ${({ theme }) => theme.colors.gray[1]};
    cursor: not-allowed;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[3]};
      border-color: ${({ theme }) => theme.colors.gray[3]};
      color: ${({ theme }) => theme.colors.gray[1]};
    }
  }

  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${buttons}
  ${themed('Button')}
`;

export default Button;
