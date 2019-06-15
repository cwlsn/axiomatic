import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Heading from './Heading';

storiesOf('Primitives/Heading', module).add('Basic Heading', () => (
  <Heading>Kay!</Heading>
));
