import * as React from 'react';
import { storiesOf } from '@storybook/react';
import defaultTheme from '../../themes/default';
import { StoryContainer, StoryHeader } from '../../utils/stories';
import { Flex, Card } from '../../primitives';
import { Typography } from '../../elements';
import ColorSwatch from './ColorSwatch';

// Colors object for mapping
const keys = Object.keys(defaultTheme.colors);

storiesOf('Elements/ColorSwatch', module)
  .addDecorator(StoryContainer)
  .add('Color Viewer', () => (
    <>
      <StoryHeader
        heading="Axiomatic Colors"
        subHeading="Color Swatch Viewer"
        text="This page includes each color in the theme, including WCAG contrast levels and compliance level (minimum AA). Click the swatch to copy
      the hex code to your clipboard."
      />
      <Card>
        {keys.map(color => {
          const value = defaultTheme.colors[color];
          if (Array.isArray(value)) {
            return (
              <Flex flexDirection="column" pb={4} key={color}>
                <Typography.EyebrowText>{color}</Typography.EyebrowText>
                <Flex mt={2}>
                  {value.map((subColor, i) => (
                    <ColorSwatch
                      color={subColor}
                      name={`${color}.${i}`}
                      key={`${color}.${i}`}
                    />
                  ))}
                </Flex>
              </Flex>
            );
          }
          return <ColorSwatch color={value} name={color} key={color} />;
        })}
      </Card>
    </>
  ));
