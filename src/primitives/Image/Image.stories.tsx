import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Image from './Image';

storiesOf('Primitives/Image', module).add('Basic Image', () => (
  <Image src="/assets/cat.jpg" />
));
