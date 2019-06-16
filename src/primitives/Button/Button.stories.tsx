import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Primitives/Button', module)
  .add('Default (Primary) Button', () => <Button>Kay!</Button>)
  .add('Outline Button', () => <Button variant="outline">Kay!</Button>)
  .add('Secondary Button', () => <Button variant="secondary">Kay!</Button>)
  .add('Large Size', () => (
    <>
      <Button px={4} py={3}>
        Kay!
      </Button>
    </>
  ));
