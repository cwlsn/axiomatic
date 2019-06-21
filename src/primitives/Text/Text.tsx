import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  fontSize,
  fontStyle,
  textStyle,
  FontFamilyProps,
  LineHeightProps,
  TextAlignProps,
  LetterSpacingProps,
  FontWeightProps,
  FontSizeProps,
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
    FontSizeProps,
    FontStyleProps,
    TextStyleProps {
  children: any;
  as?: string;
}

export interface AdditionalTextProps {
  as?: string;
}

const Text = styled(Box).attrs<AdditionalTextProps>({ as: 'p' })<
  CombinedTextProps
>`
  ${fontSize}
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
