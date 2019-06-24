import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FaUserAlt, FaCat } from 'react-icons/fa';
import { Box } from '../../primitives';
import { Badge } from '../../elements';

import Menu, { MenuItem, Separator } from './Menu';

storiesOf('Patterns|Menu', module).add('Basic Menu', () => (
  <Box p={4} bg="gray.4">
    <Menu open>
      <MenuItem
        title="cats"
        icon={<FaUserAlt />}
        badge={<Badge bg="secondary.1">3</Badge>}
      />
      <MenuItem title="cats" />
      <MenuItem title="cats" />
      <MenuItem
        title="cats ooooh yeah big long menu item yeahh"
        icon={<FaCat />}
        badge={<Badge bg="primary.1">New</Badge>}
      />
      <Separator />
      <MenuItem title="cats" icon={<FaCat />} />
      <MenuItem title="cats" icon={<FaCat />} />
    </Menu>
  </Box>
));
