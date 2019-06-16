import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  FontFamilyProps,
  LineHeightProps,
  TextAlignProps,
  LetterSpacingProps,
  FontWeightProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedTextProps
  extends FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps {}

export interface AdditionalTextProps {
  as?: string;
}

const Text = styled(Box).attrs<AdditionalTextProps>({ as: 'p' })<
  CombinedTextProps
>`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${themed('Text')}
`;

export default Text;
