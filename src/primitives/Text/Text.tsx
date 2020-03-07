import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  fontStyle,
  textStyle,
  FontFamilyProps,
  LineHeightProps,
  TextAlignProps,
  LetterSpacingProps,
  FontWeightProps,
  FontStyleProps,
  TextStyleProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedTextProps
  extends FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps,
    FontStyleProps,
    TextStyleProps {
  children: any;
  as?: string;
}

export interface ATextProps {
  as?: string;
}

const Text = styled(Box).attrs<ATextProps>({ as: 'p' })<CombinedTextProps>`
  ${fontStyle}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${textStyle}
  ${themed('Text')}
`;

export default Text;
