import React from 'react';
import styled from 'styled-components';
import { ratioPadding } from '../../utils/theme';
import { Card, Box } from '../../primitives';

export interface ImageContainerProps {
  image: string;
  contain?: boolean;
  ratio?: string;
}

const ImageContainer = styled(Card)<ImageContainerProps>`
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  background-image: ${({ image }) => `url(${image})`};
  background-size: ${({ contain }) => (contain ? 'contain' : 'cover')};
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: ${({ ratio }) => ratioPadding(ratio)};
  position: relative;
`;

export interface ContentContainerProps {
  positionContent?: string;
}

const ContentContainer = styled(Box)<ContentContainerProps>`
  position: absolute;
  ${({ positionContent }) =>
    positionContent === 'top' ? 'top: 0;' : 'bottom: 0;'}
`;

export interface ImageCardProps
  extends ImageContainerProps,
    ContentContainerProps {
  children?: JSX.Element | JSX.Element[];
}

function ImageCard({
  image,
  contain = false,
  ratio = '16x9',
  positionContent = 'top',
  children,
}: ImageCardProps) {
  return (
    <ImageContainer image={image} contain={contain} ratio={ratio} p={0}>
      <ContentContainer positionContent={positionContent}>
        {children}
      </ContentContainer>
    </ImageContainer>
  );
}

export default ImageCard;
