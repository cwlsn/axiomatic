import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Box from './Box';

storiesOf('Box', module).add('Basic Box', () => (
  <Box m={4} p={4}>
    Kay!
  </Box>
));
