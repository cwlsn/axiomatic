import styled from 'styled-components';
import {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const Flex = styled(Box)(
  {},
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  themed('Flex')
);

export default Flex;
