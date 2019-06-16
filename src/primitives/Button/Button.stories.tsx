import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Primitives/Button', module)
  .add('Default (Primary) Button', () => (
    <Button variant="primary" px={3} py={2}>
      Kay!
    </Button>
  ))
  .add('Outline Button', () => (
    <Button variant="outline" px={3} py={2}>
      Kay!
    </Button>
  ))
  .add('Secondary Button', () => (
    <Button variant="secondary" px={3} py={2}>
      Kay!
    </Button>
  ));
