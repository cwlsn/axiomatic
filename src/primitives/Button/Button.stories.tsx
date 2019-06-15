import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Primitives/Button', module).add('Basic Button', () => (
  <Button>Kay!</Button>
));
