import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '../src/themes/default';
import './reset.css';

const themes = [defaultTheme];

const req = require.context('../src', true, /\.stories\.tsx$/);

// Wrangle Storybook sorting
const sortRanking = {
  patterns: 1,
  elements: 2,
  primitives: 3,
};

const sortByFileName = (a, b) => {
  // Each filename is ./thing/etc/etc
  const aVal = sortRanking[a.split('/')[1]];
  const bVal = sortRanking[b.split('/')[1]];
  return aVal - bVal;
};

function loadStories() {
  req
    .keys()
    .sort(sortByFileName)
    .forEach(filename => req(filename));
}

addDecorator(withThemesProvider(themes));

configure(loadStories, module);
