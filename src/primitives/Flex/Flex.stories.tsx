import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Flex from './Flex';

storiesOf('Primitives/Flex', module).add('Basic Flex', () => (
  <Flex m={4} p={4}>
    Kay!
  </Flex>
));
