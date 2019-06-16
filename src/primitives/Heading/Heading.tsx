import styled from 'styled-components';
import Text from '../Text';
import { themed } from '../../utils/theme';

export interface HeadingProps {
  level?: number;
}

export interface AdditionalHeadingProps {
  level?: number;
  m?: number;
  fontSize?: number;
  fontWeight?: string;
}

const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Heading = styled(Text).attrs<AdditionalHeadingProps>(
  ({ level = 2, m = 0, fontSize = 4, fontWeight = 'bold' }) => ({
    m,
    fontSize,
    fontWeight,
    as: levels[level - 1],
  })
)<HeadingProps>`
  ${themed('Heading')}
`;

export default Heading;
