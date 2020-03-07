import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '../../primitives';
import Messaging from './Messaging';

storiesOf('Scenarios|Messaging', module).add('List of Messages', () => (
  <Box p={5} bg="gray.4">
    <Messaging />
  </Box>
));
