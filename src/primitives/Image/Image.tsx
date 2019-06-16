import styled from 'styled-components';
import {
  height,
  borderRadius,
  HeightProps,
  BorderRadiusProps,
} from 'styled-system';
import { themed } from '../../utils/theme';

export interface CombinedImageProps extends HeightProps, BorderRadiusProps {
  alt?: string;
  src?: string;
}

export interface AdditionalImageProps {
  as?: string;
  m?: number;
  maxWidth?: number | string;
  height?: number | string;
}

const Image = styled.div.attrs<AdditionalImageProps>(
  ({ as = 'img', m = 0, maxWidth = '100%', height = 'auto' }) => ({
    as,
    m,
    maxWidth,
    height,
  })
)<CombinedImageProps>`
  ${height}
  ${borderRadius}
  ${themed('Image')}
`;

export default Image;
