import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from '../../primitives';
import StatusBanner from './StatusBanner';

storiesOf('Patterns/StatusBanner', module).add('Each Status', () => (
  <Box p={4} bg="white">
    <StatusBanner
      status="info"
      message="Hey cats, its kay! This message was so informative and making lines be all wrappy that it dropped the hottest album of the year. And then it won an award for having a banner that had just like a bunch of lines, dang."
    />
    <StatusBanner status="success" message="Hey cats, its kay!" />
    <StatusBanner status="warning" message="Hey cats, its kay!" />
    <StatusBanner status="error" message="Hey cats, its kay!" />
  </Box>
));
