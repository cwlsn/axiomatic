import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainer, StoryHeader } from '../../utils/stories';
import { Card } from '../../primitives';
import { Typography } from '../../elements';
import Badge from './Badge';

storiesOf('Elements|Badge', module)
  .addDecorator(StoryContainer)
  .add('Badge Examples', () => (
    <>
      <StoryHeader
        heading="Badges"
        subHeading="Inline Badge Examples"
        text="This page demonstrates examples of the Badge component, used to highlight inline information such as unread notifications, or to make short text stand out."
      />
      <Card>
        <Typography.Paragraph>
          A badge should <Badge>Cats</Badge> be inline.
        </Typography.Paragraph>
        <Typography.Paragraph>
          You can pass any <Badge bg="secondary.1">theme</Badge> color to the
          badge.
        </Typography.Paragraph>
        <Typography.Paragraph>
          It will figure out which <Badge bg="secondary.3">color</Badge> is
          appropriate, supporting light or dark colors for a11y only.
        </Typography.Paragraph>
      </Card>
    </>
  ));
