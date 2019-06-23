import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Card } from '../../primitives';
import { Typography } from '../../elements';
import Badge from './Badge';

storiesOf('Elements/Badge', module).add('Basic Badge', () => (
  <Box p={4} bg="gray.4">
    <Box>
      <Typography.EyebrowText>Inline Badge Examples</Typography.EyebrowText>
      <Typography.Heading as="h1">Badges</Typography.Heading>
      <Typography.Paragraph>
        This page demonstrates examples of the Badge component, used to
        highlight inline information such as unread notifications, or to make
        short text stand out.
      </Typography.Paragraph>
    </Box>
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
        appropriate.
      </Typography.Paragraph>
    </Card>
  </Box>
));
