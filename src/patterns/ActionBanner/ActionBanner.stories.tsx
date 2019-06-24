import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Box } from '../../primitives';
import ActionBanner from './ActionBanner';

storiesOf('Patterns|ActionBanner', module)
  .add('Basic ActionBanner', () => (
    <Box p={4} bg="gray.4">
      <ActionBanner
        eyebrowText="This is an ActionBanner!"
        title="Fun and Exciting Kay!"
        message="Some times you have to get up because the cat is hungry. Use this ActionBanner to feed the cat"
        actionTitle="Feed the Cat"
        action={() => {
          console.log('🐈 thanks');
        }}
        image="/assets/illustrations/wandering-mind.svg"
      />
    </Box>
  ))
  .add('Basic ActionBanner Swapped Layout', () => (
    <Box p={4} bg="gray.4">
      <ActionBanner
        eyebrowText="This is an ActionBanner!"
        title="Fun and Exciting Kay!"
        message="Some times you have to get up because the cat is hungry. Use this ActionBanner to feed the cat"
        actionTitle="Feed the Cat"
        action={() => console.log('🐈 thanks')}
        image="/assets/illustrations/wandering-mind.svg"
        swapLayout
      />
    </Box>
  ))
  .add('Stacked ActionBanner', () => (
    <Box p={4} bg="gray.4">
      <ActionBanner
        eyebrowText="This is an ActionBanner!"
        title="Fun and Exciting Kay!"
        message="Some times you have to get up because the cat is hungry. Use this ActionBanner to feed the cat"
        actionTitle="Feed the Cat"
        action={() => {
          console.log('🐈 thanks');
        }}
        image="/assets/illustrations/playful-cat.svg"
      />
      <ActionBanner
        eyebrowText="This is an ActionBanner!"
        title="Fun and Exciting Kay!"
        message="Some times you have to get up because the cat is hungry. Use this ActionBanner to feed the cat"
        actionTitle="Feed the Cat"
        action={() => console.log('🐈 thanks')}
        image="/assets/illustrations/wandering-mind.svg"
        swapLayout
      />
    </Box>
  ));
