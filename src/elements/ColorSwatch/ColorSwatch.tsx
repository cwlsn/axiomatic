import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { Card, Box, Text } from '../../primitives';
import { lightOrDarkColor } from '../../utils/theme';

const Swatch = styled(Card)`
  position: relative;
  height: 160px;
  cursor: pointer;
  color: ${({ bg }) => bg};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme, bg }) =>
      lightOrDarkColor(bg, theme.colors.white, theme.colors.gray[0])};
  }
`;

const HexCode = styled(Text)`
  transform: translateY(-12px);
`;

const Title = styled(Box)`
  position: absolute;
  border-bottom-left-radius: ${({ theme }) => theme.radii[1]}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii[1]}px;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
`;

function ColorSwatch({ color, name }) {
  return (
    <Swatch
      bg={color}
      p={0}
      width={160}
      m={2}
      onClick={() => {
        copy(color);
      }}
    >
      <HexCode textStyle="eyebrow" fontSize={4}>
        {color}
      </HexCode>
      <Title p={2} bg="white">
        <Text textStyle="eyebrow" fontSize={0} color="gray.0">
          {name}
        </Text>
      </Title>
    </Swatch>
  );
}

export default ColorSwatch;
