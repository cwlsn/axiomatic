import styled from 'styled-components';
import Text from '../Text';
import { themed } from '../../utils/theme';

const Link = styled(Text).attrs({
  as: 'a',
  color: 'primary',
})(themed('Link'));

export default Link;
