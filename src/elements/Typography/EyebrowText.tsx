import React from 'react';
import { Text } from '../../primitives';

function EyebrowText({ children }) {
  return (
    <Text
      fontSize={1}
      lineHeight={1}
      mb={0}
      textStyle="eyebrow"
      color="gray.2"
      as="h4"
    >
      {children}
    </Text>
  );
}

export default EyebrowText;
