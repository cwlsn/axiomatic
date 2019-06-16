import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../Box';
import Card from './Card';

storiesOf('Primitives/Card', module)
  .add('Basic Card', () => (
    <Box bg="gray" p={3}>
      <Card>Kay!</Card>
    </Box>
  ))
  .add('Card Inverted', () => (
    <Box bg="gray" p={3}>
      <Card bg="primary" color="white" borderRadius={3}>
        Kay!
      </Card>
    </Box>
  ));
