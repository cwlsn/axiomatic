import * as React from 'react';
import { storiesOf } from '@storybook/react';
import defaultTheme from '../../themes/default';
import { Flex, Box } from '../../primitives';
import { Typography } from '../../elements';
import ColorSwatch from './ColorSwatch';

const keys = Object.keys(defaultTheme.colors);
storiesOf('Elements/ColorSwatch', module).add('Colors', () => (
  <Flex bg="white" p={5} flexWrap="wrap" flexDirection="column">
    <Box>
      <Typography.EyebrowText>Color Swatch Library</Typography.EyebrowText>
      <Typography.Heading as="h1">Axiomatic Colors</Typography.Heading>
      <Typography.Paragraph>
        This page includes each color in the theme, click the swatch to copy the
        hex code to your clipboard.
      </Typography.Paragraph>
    </Box>
    {keys.map(color => {
      const value = defaultTheme.colors[color];
      if (Array.isArray(value)) {
        return (
          <Flex flexDirection="column" pb={4}>
            <Typography.EyebrowText>{color}</Typography.EyebrowText>
            <Flex mt={2}>
              {value.map((subColor, i) => (
                <ColorSwatch color={subColor} name={`${color}.${i}`} />
              ))}
            </Flex>
          </Flex>
        );
      }
      return <ColorSwatch color={value} name={color} />;
    })}
  </Flex>
));
