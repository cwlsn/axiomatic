import { configure, addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '../src/themes/default';
import sbTheme from './theme.js';
import './reset.css';

const themes = [defaultTheme];

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withThemesProvider(themes));

addParameters({
  options: {
    theme: sbTheme,
  },
});

configure(loadStories, module);
