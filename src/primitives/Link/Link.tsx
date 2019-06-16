import styled from 'styled-components';
import Text from '../Text';
import { themed } from '../../utils/theme';

export interface LinkProps {
  href: string;
}

export interface AdditionalLinkProps {
  as?: string;
  color?: string;
}

const Link = styled(Text).attrs<AdditionalLinkProps>(
  ({ as = 'a', color = 'primary' }) => ({
    as: 'a',
    color: 'primary',
  })
)<LinkProps>`
  ${themed('Link')}
`;

export default Link;
