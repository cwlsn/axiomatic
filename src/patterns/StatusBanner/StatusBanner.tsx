import React from 'react';
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { Card, Flex, Box, Text } from '../../primitives';

export interface StatusBannerProps {
  status?: string;
  message: string;
}

function renderIcon(status) {
  switch (status) {
    case 'info':
    default:
      return <FaInfoCircle />;
    case 'warning':
      return <FaExclamationCircle />;
    case 'success':
      return <FaCheckCircle />;
    case 'error':
      return <FaTimesCircle />;
  }
}

function StatusBanner({ status = 'info', message }: StatusBannerProps) {
  return (
    <Card p={3} mb={3} colors={status} borderLeft={2}>
      <Flex alignItems="center">
        <Box mr={3}>
          <Text fontSize={3} p={0}>
            {renderIcon(status)}
          </Text>
        </Box>
        <Text color="gray.0">{message}</Text>
      </Flex>
    </Card>
  );
}

export default StatusBanner;
