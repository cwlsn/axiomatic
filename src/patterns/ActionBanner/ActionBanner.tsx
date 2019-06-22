import React from 'react';
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

function ActionBanner({
  eyebrowText,
  title,
  message,
  actionTitle,
  action,
  image,
  swapLayout = false,
}: ActionBannerProps) {
  return (
    <Card p={0} mb={4}>
      <Flex
        alignItems="center"
        flexDirection={swapLayout ? 'row-reverse' : 'row'}
      >
        <Box p={4} width={3 / 5}>
          {eyebrowText && (
            <Typography.EyebrowText>{eyebrowText}</Typography.EyebrowText>
          )}
          {title && <Typography.Heading>{title}</Typography.Heading>}
          {message && <Typography.Paragraph>{message}</Typography.Paragraph>}
          {action && (
            <Button onClick={action}>{actionTitle || 'Click here'}</Button>
          )}
        </Box>
        <Box m={3} width={2 / 5} textAlign={swapLayout ? 'left' : 'right'}>
          <Image src={image} alt="Wandering Mind" height="216px" />
        </Box>
      </Flex>
    </Card>
  );
}

export default ActionBanner;
