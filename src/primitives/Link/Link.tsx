import styled from 'styled-components';
import Text from '../Text';
import { themed } from '../../utils/theme';

export interface LinkProps {
  href?: string;
}

export interface AdditionalLinkProps {
  as?: string;
  color?: string;
}

const Link = styled(Text).attrs<AdditionalLinkProps>(
  ({ color = 'primary' }) => ({
    color,
    as: 'a',
  })
)<LinkProps>`
  ${themed('Link')}
`;

export default Link;
