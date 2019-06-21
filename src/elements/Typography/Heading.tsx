import React from 'react';
import { Text } from '../../primitives';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  children: any;
  as?: HeadingType;
}

function Heading({ children, as = 'h2' }: HeadingProps) {
  return (
    <Text as={as} textStyle={as} fontWeight="bold" lineHeight={2} mb={3}>
      {children}
    </Text>
  );
}

export default Heading;
