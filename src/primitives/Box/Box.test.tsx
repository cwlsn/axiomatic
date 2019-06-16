import React from 'react';
import Box from './Box';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Box', () => {
  test('renders', () => {
    const json = renderJSON(<Box theme={defaultTheme} />);
    expect(json.type).toBe('div');
  });

  test('renders with as prop', () => {
    const json = renderJSON(<Box as="header" theme={defaultTheme} />);
    expect(json.type).toBe('header');
  });

  test('renders with style props', () => {
    const json = renderJSON(<Box width={1} theme={defaultTheme} />);
    expect(json).toHaveStyleRule('width', '100%');
  });
});
