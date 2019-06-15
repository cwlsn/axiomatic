import styled from 'styled-components';
import { height, borderRadius } from 'styled-system';
import { themed } from '../../utils/theme';

const Image = styled.div.attrs({
  as: 'img',
  m: 0,
  maxWidth: '100%',
  height: 'auto',
  alt: p => p.alt || p.src,
})(height, borderRadius, themed('Image'));

export default Image;
