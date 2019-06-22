import styled from 'styled-components';
import {
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  colorStyle,
  variant,
  BoxShadowProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  OpacityProps,
  ColorStyleProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedCardProps
  extends BoxShadowProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundPositionProps,
    BackgroundRepeatProps,
    OpacityProps,
    ColorStyleProps {
  colors?: string;
}

export interface AdditionalCardProps {
  borderRadius?: number;
  p?: number;
  boxShadow?: string;
  bg?: string;
}

const cards = variant({ key: 'cards' });

const Card = styled(Box).attrs<AdditionalCardProps>(
  ({ borderRadius = 1, p = 4, boxShadow = 'small', bg = 'white' }) => ({
    borderRadius,
    p,
    boxShadow,
    bg,
  })
)<CombinedCardProps>`
  ${boxShadow}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${opacity}
  ${colorStyle}
  ${cards}
  ${themed('Card')}
`;

export default Card;
