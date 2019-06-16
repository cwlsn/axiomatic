import React from 'react';
import Button from './Button';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(<Button theme={defaultTheme}>Kay!</Button>);
    expect(json.type).toBe('button');
    // expect(json).toHaveStyleRule('color', 'white');
    // expect(json).toHaveStyleRule('background-color', 'primary');
  });

  test('renders as <a>', () => {
    const json = renderJSON(<Button as="a" theme={defaultTheme} />);
    expect(json.type).toBe('a');
  });
});
