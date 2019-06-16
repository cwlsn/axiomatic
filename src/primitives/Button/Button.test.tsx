import React from 'react';
import Button from './Button';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(<Button>Kay!</Button>);
    expect(json.type).toBe('button');
    // expect(json).toHaveStyleRule('color', 'white');
    // expect(json).toHaveStyleRule('background-color', 'primary');
  });

  test('renders as <a>', () => {
    const json = renderJSON(<Button as="a" />);
    expect(json.type).toBe('a');
  });
});
