import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { StoryContainer, StoryHeader } from '../../utils/stories';
import { Box, Card, Text } from '../../primitives';
import { Typography } from '../../elements';
import ImageCard from './ImageCard';

storiesOf('Elements/ImageCard', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryContainer)
  .add('ImageCard Example', () => (
    <>
      <StoryHeader
        heading="ImageCard"
        subHeading="ImageCard Examples with Knobs"
        text="An ImageCard allows you to set a background image on a card, along
      with some ratio based dimensions. Children will be absolutely
      positioned inside of the image."
      />
      <Card>
        <Typography.Paragraph>
          Control the props on this ImageCard component with Storybook Knobs!
        </Typography.Paragraph>
        <ImageCard
          image="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf"
          positionContent={select(
            'positionContent',
            { Bottom: 'bottom', Top: 'top' },
            'bottom'
          )}
          contain={boolean('contain?', false)}
          ratio={text('Aspect ratio (16x9)', '16x9')}
        >
          <Box p={4} bg="rgba(0,0,0,0.6)" width="100%">
            <Text fontSize={4} fontWeight="bold" color="white">
              It's a cat!
            </Text>
          </Box>
        </ImageCard>
      </Card>
    </>
  ));
