import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Primitives|Link', module).add('Basic Link', () => (
  <Link href="#">Kay!</Link>
));
