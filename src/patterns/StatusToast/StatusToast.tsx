import React from 'react';
import { renderIcon } from '../../utils/theme';
import { Card, Flex, Box, Text } from '../../primitives';

export interface StatusBannerProps {
  status?: any; // TODO
  message: string;
}

function StatusToast({ status = 'info', message }: StatusBannerProps) {
  return (
    <Card p={3} mb={3} colors={status} borderLeft={1} width={280}>
      <Flex>
        <Flex width={36} flex="0 0 auto">
          <Text fontSize={3} p={0}>
            {renderIcon(status)}
          </Text>
        </Flex>
        <Box>
          <Text textStyle="eyebrow" fontSize={0} mb={2}>
            {status}
          </Text>
          <Flex alignItems="center">
            <Text color="gray.0" p={0} lineHeight={1}>
              {message}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}

export default StatusToast;
