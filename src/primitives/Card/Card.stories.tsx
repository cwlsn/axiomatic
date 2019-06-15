import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Primitives/Card', module).add('Basic Card', () => <Card>Kay!</Card>);
