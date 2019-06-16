import React from 'react';
import Box from './Box';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Box', () => {
  test('renders', () => {
    const json = renderJSON(<Box />);
    expect(json.type).toBe('div');
  });

  test('renders with as prop', () => {
    const json = renderJSON(<Box as="header" />);
    expect(json.type).toBe('header');
  });

  test('renders with style props', () => {
    const json = renderJSON(<Box width={1} />);
    expect(json).toHaveStyleRule('width', '100%');
  });
});
