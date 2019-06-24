import { configure, addDecorator } from '@storybook/react';
import { ThemeAndGlobalProvider } from '../src/utils/stories';

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

addDecorator(ThemeAndGlobalProvider);

configure(loadStories, module);
