import styled from 'styled-components';
import {
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  FlexProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedFlexProps
  extends FlexProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}

const Flex = styled(Box)<CombinedFlexProps>`
  display: flex;

  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${themed('Flex')}
`;

export default Flex;
