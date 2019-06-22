import React, { MouseEvent } from 'react';
import { Flex, Box, Card, Button, Image } from '../../primitives';
import { Typography } from '../../elements';

export interface ActionBannerProps {
  eyebrowText?: string;
  title?: string;
  message?: string;
  actionTitle?: string;
  action?: any;
  image?: string;
  swapLayout?: boolean;
}

function EmptyState({
  title,
  message,
  actionTitle,
  action,
  image,
}: ActionBannerProps) {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image src={image} alt="Wandering Mind" height="216px" />

      <Box p={4}>
        {title && <Typography.Heading as="h3">{title}</Typography.Heading>}
        {message && (
          <Typography.Paragraph color="gray.1">{message}</Typography.Paragraph>
        )}
        {action && (
          <Box textAlign="center" mt={4}>
            <Button onClick={action} variant="outline">
              {actionTitle || 'Click here'}
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default EmptyState;
