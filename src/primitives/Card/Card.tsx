import styled from 'styled-components';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  BoxShadowProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  OpacityProps,
} from 'styled-system';
import Box from '../Box';
import { themed } from '../../utils/theme';

export interface CombinedCardProps
  extends BordersProps,
    BorderColorProps,
    BorderRadiusProps,
    BoxShadowProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundPositionProps,
    BackgroundRepeatProps,
    OpacityProps {}

export interface AdditionalCardProps {
  borderRadius?: number;
  p?: number;
  boxShadow?: string;
  bg?: string;
}

const cards = variant({ key: 'cards' });

const Card = styled(Box).attrs<AdditionalCardProps>(
  ({ borderRadius = 1, p = 3, boxShadow = 'small', bg = 'white' }) => ({
    borderRadius,
    p,
    boxShadow,
    bg,
  })
)<CombinedCardProps>`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${opacity}
  ${cards}
  ${themed('Card')}
`;

export default Card;
