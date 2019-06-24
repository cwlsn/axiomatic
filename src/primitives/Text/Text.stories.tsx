import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Text from './Text';

storiesOf('Primitives|Text', module).add('Basic Text', () => <Text>Kay!</Text>);
