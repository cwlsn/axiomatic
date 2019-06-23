import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Primitives/Button', module)
  .addDecorator(withKnobs)
  .add('Default (Primary) Button', () => <Button>Kay!</Button>)
  .add('Outline Button', () => <Button variant="outline">Kay!</Button>)
  .add('Secondary Button', () => <Button variant="secondary">Kay!</Button>)
  .add('Disabled Button', () => (
    <Button variant="primary" disabled>
      Kay!
    </Button>
  ));
