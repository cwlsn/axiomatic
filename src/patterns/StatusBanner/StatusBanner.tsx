import React from 'react';
import { renderIcon } from '../../utils/theme';
import { Card, Flex, Text } from '../../primitives';

export interface StatusBannerProps {
  status?: any; // TODO
  message: string;
}

function StatusBanner({ status = 'info', message }: StatusBannerProps) {
  return (
    <Card p={3} mb={3} colors={status} borderLeft={2}>
      <Flex alignItems="center">
        <Flex mr={3}>
          <Text fontSize={3} p={0}>
            {renderIcon(status)}
          </Text>
        </Flex>
        <Text color="gray.0" lineHeight={2}>
          {message}
        </Text>
      </Flex>
    </Card>
  );
}

export default StatusBanner;
