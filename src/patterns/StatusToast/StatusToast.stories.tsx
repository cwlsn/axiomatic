import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from '../../primitives';
import StatusToast from './StatusToast';

storiesOf('Patterns|StatusToast', module).add('Each Status', () => (
  <Box p={4} bg="white">
    <StatusToast status="info" message="Hey cats, its kay!" />
    <StatusToast
      status="success"
      message="Hey cats, its kay! This was such a success that we should take the time to have some more lines and stuff."
    />
    <StatusToast status="warning" message="Hey cats, its kay!" />
    <StatusToast status="error" message="Hey cats, its kay!" />
  </Box>
));
