import React from 'react';
import { Text } from '../../primitives';

function Paragraph({ children, ...props }) {
  return (
    <Text fontSize={2} lineHeight={2} mb={3} color="gray.0" {...props}>
      {children}
    </Text>
  );
}

export default Paragraph;
