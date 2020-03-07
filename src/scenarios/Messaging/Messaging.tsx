import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Flex, Box, Text } from '../../primitives';
import { Typography, Badge } from '../../elements';

export interface MessageProps {
  notificationsEnabled?: boolean;
  badge?: string;
  badgeColor?: string;
  title: string;
  date: string;
  read?: boolean;
  messagePreview: string;
}

function Message({
  notificationsEnabled,
  badge,
  badgeColor,
  title,
  date,
  read,
  messagePreview,
}: MessageProps) {
  return (
    <Flex
      p={3}
      borderBottom={0}
      borderColor="gray.4"
      style={{ overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
      bg={read ? 'white' : 'info.1'}
    >
      <Box color={notificationsEnabled ? 'success.0' : 'gray.3'} mr={3}>
        <FaBell />
      </Box>
      <Flex flexDirection="row" mr="auto" style={{ lineClamp: 1 }}>
        {badge && <Badge bg={badgeColor}>{badge}</Badge>}
        <Text
          fontWeight={read ? 'normal' : 'bold'}
          ml={badge ? 2 : 0}
          style={{ whiteSpace: 'nowrap' }}
        >
          {title}
        </Text>
        <Text color="gray.2" fontSize={1} ml={2} lineHeight={1}>
          {messagePreview}
        </Text>
      </Flex>
      <Flex
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          background:
            'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%)',
        }}
        width={80}
        pr={3}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Text color="gray.3" fontSize={1}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

export interface MessagingProps {}

function Messaging({}: MessagingProps) {
  return (
    <Flex bg="white" flexDirection="column">
      <Box pt={3} px={3} borderBottom={0} borderColor="gray.4">
        <Typography.Heading as="h3">Messages</Typography.Heading>
      </Box>
      <Flex flexDirection="column">
        <Message
          badge="Recruiter"
          title="Important job opportunity herding cats"
          messagePreview="As per my previous email, I would..."
          date="6h"
        />
        <Message
          title="HR would like to see you in their offices HR would like to see you in their offices"
          messagePreview="As per my previous email, I would..."
          date="1d"
          notificationsEnabled
          read
        />
        <Message
          badge="Referral"
          messagePreview="As per my previous email, I would..."
          badgeColor="info.0"
          title="Want to scoop up some referral paper babay??"
          date="3d"
          read
        />
      </Flex>
    </Flex>
  );
}

export default Messaging;
