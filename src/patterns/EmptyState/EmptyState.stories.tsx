import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box, Card } from '../../primitives';
import EmptyState from './EmptyState';

storiesOf('Patterns|EmptyState', module)
  .add('Basic EmptyState', () => (
    <Box p={4} bg="gray.4">
      <EmptyState
        title="There's nothing here..."
        message="It seems like you haven't done the thing that puts things here, yet. You could, though."
        actionTitle="Do the Thing"
        action={() => {
          console.log('🐈 thanks');
        }}
        image="/assets/illustrations/blank-canvas.svg"
      />
    </Box>
  ))
  .add('In a Card', () => (
    <Box p={4} bg="gray.4">
      <Card width={400} m="auto">
        <EmptyState
          title="There's nothing here..."
          message="It seems like you haven't done the thing that puts things here, yet. You could, though."
          actionTitle="Do the Thing"
          action={() => {
            console.log('🐈 thanks');
          }}
          image="/assets/illustrations/blank-canvas.svg"
        />
      </Card>
    </Box>
  ));
