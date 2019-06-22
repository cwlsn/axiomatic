import React from 'react';
import ColorSwatch from './ColorSwatch';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('ColorSwatch', () => {
  test('renders', () => {
    const json = renderJSON(<ColorSwatch theme={defaultTheme} />);
    expect(json.type).toBe('div');
  });

  test('renders with as prop', () => {
    const json = renderJSON(<ColorSwatch as="header" theme={defaultTheme} />);
    expect(json.type).toBe('header');
  });

  test('renders with style props', () => {
    const json = renderJSON(<ColorSwatch width={1} theme={defaultTheme} />);
    expect(json).toHaveStyleRule('width', '100%');
  });
});
