import styled from 'styled-components';
import Text from '../Text';
import { themed } from '../../utils/theme';

const Heading = styled(Text).attrs({
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
})(themed('Heading'));

export default Heading;
