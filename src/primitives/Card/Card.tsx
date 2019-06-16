import styled from 'styled-components';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

const cards = variant({ key: 'cards' });

const Card = styled(Box).attrs(({ borderRadius, p, boxShadow, bg }) => ({
  borderRadius: borderRadius || 1,
  p: p || 3,
  boxShadow: boxShadow || 'small',
  bg: bg || 'white',
}))(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed('Card')
);

export default Card;
