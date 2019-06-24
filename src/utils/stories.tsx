import React from 'react';
import defaultTheme from '../themes/default';
import { Box, GlobalStyle } from '../primitives';
import { Typography } from '../elements';
import { ThemeProvider } from 'styled-components';

export const StoryContainer = storyFn => (
  <Box bg="gray.4" px={6} py={4}>
    {storyFn()}
  </Box>
);

export const StoryHeader = ({ heading, subHeading, text }) => (
  <Box>
    <Typography.EyebrowText>{subHeading}</Typography.EyebrowText>
    <Typography.Heading as="h1">{heading}</Typography.Heading>
    <Typography.Paragraph>{text}</Typography.Paragraph>
  </Box>
);

export const ThemeAndGlobalProvider = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
);
