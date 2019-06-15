import styled from 'styled-components';
import {
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const Flex = styled(Box)(
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
);

export default Flex;
