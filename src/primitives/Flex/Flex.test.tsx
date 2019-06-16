import React from 'react';
import Flex from './Flex';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(<Flex theme={defaultTheme} />);
    expect(json.type).toBe('div');
  });

  test('renders with flex props', () => {
    const json = renderJSON(<Flex alignItems="center" theme={defaultTheme} />);
    expect(json).toHaveStyleRule('display', 'flex');
    expect(json).toHaveStyleRule('align-items', 'center');
  });

  test('renders with Box props', () => {
    const json = renderJSON(<Flex color="tomato" theme={defaultTheme} />);
    expect(json).toHaveStyleRule('color', 'tomato');
  });

  test('renders with as and Box props', () => {
    const json = renderJSON(
      <Flex as="footer" color="tomato" theme={defaultTheme} />
    );
    expect(json.type).toBe('footer');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
});
