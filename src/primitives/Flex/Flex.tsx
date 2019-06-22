import styled from 'styled-components';
import {
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flexBasis,
  FlexProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  FlexBasisProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedFlexProps
  extends FlexProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps,
    FlexBasisProps {}

const Flex = styled(Box)<CombinedFlexProps>`
  display: flex;

  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${flexBasis}
  ${alignItems}
  ${justifyContent}
  ${themed('Flex')}
`;

export default Flex;
