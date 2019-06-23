import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import {
  lightOrDarkColor,
  contrastLevelAndCompliance,
} from '../../utils/theme';
import { Card, Box, Text } from '../../primitives';

const Swatch = styled(Card)`
  position: relative;
  height: 160px;
  cursor: pointer;
  color: ${({ bg }) => bg};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-3deg);

  &:hover {
    transform: scale(1.3);
    z-index: 1000;
    box-shadow: ${({ theme }) => theme.shadows.large};
    color: ${({ bg }) => lightOrDarkColor(bg)};
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
  opacity: 0.9;
`;

function ColorSwatch({ color, name }) {
  const a11yInfo = contrastLevelAndCompliance(color, lightOrDarkColor(color));
  return (
    <Swatch
      bg={color}
      p={0}
      width={120}
      mx={-1}
      onClick={() => {
        copy(color);
      }}
    >
      <HexCode
        textStyle="eyebrow"
        fontSize={3}
        textAlign="center"
        lineHeight={1}
      >
        {color}
        <br />
        <Text as="span" fontSize={1}>
          {a11yInfo}
        </Text>
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
