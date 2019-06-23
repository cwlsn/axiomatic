import React from 'react';
import styled from 'styled-components';
import { lightOrDarkColor } from '../../utils/theme';
import { Flex, Text } from '../../primitives';

const BadgeContainer = styled(Flex)`
  vertical-align: middle;
  display: inline-flex;
`;

const ShadowText = styled(Text)`
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
`;

function Badge({ children, bg = 'primary.1' }) {
  return (
    <BadgeContainer
      borderRadius={1}
      bg={bg}
      color={lightOrDarkColor(bg)}
      px={2}
      py={1}
      as="span"
    >
      <ShadowText
        as="span"
        textStyle="eyebrow"
        fontSize={0}
        lineHeight={0}
        p={0}
        m={0}
      >
        {children}
      </ShadowText>
    </BadgeContainer>
  );
}

export default Badge;
