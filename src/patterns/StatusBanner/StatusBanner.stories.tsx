import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from '../../primitives';
import StatusBanner from './StatusBanner';

storiesOf('Patterns/StatusBanner', module).add('Each Status', () => (
  <Box p={4} bg="white">
    <StatusBanner status="info" message="Hey cats, its kay!" />
    <StatusBanner status="success" message="Hey cats, its kay!" />
    <StatusBanner status="warning" message="Hey cats, its kay!" />
    <StatusBanner status="error" message="Hey cats, its kay!" />
  </Box>
));
