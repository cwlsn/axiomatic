import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Card } from '../../primitives';

const Separator = styled(Box).attrs({
  m: 1,
  bg: 'gray.3',
  width: '100%',
})`
  height: 1px;
`;

const Item = styled(Flex)`
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[4]};

    p:first-child {
      transition: color 0.15s ease;
      color: ${({ theme }) => theme.colors.primary[1]};
    }
  }
`;

export interface MenuItemProps {
  icon?: JSX.Element;
  badge?: JSX.Element;
  title: string;
}

function MenuItem({ icon, title, badge }: MenuItemProps) {
  return (
    <Item py={2} alignItems="center" borderRadius={0}>
      <Flex
        width={48}
        alignItems="center"
        justifyContent="center"
        flex="0 0 auto"
      >
        <Text fontSize={1} color="primary.2">
          {icon}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Text lineHeight={1} mr={2}>
          {title}
        </Text>
        <Text mr={2}>{badge}</Text>
      </Flex>
    </Item>
  );
}

export interface MenuProps {
  children: JSX.Element[];
  open: boolean;
}

function Menu({ children, open = false }) {
  return open ? (
    <Card
      borderRadius={1}
      bg="white"
      border={0}
      borderColor="gray.3"
      width={240}
      p={2}
    >
      {children}
    </Card>
  ) : null;
}

export default Menu;
export { MenuItem, Separator };
