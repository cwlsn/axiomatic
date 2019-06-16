import React from 'react';
import Flex from './Flex';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(<Flex />);
    expect(json.type).toBe('div');
  });

  test('renders with flex props', () => {
    const json = renderJSON(<Flex alignItems="center" />);
    expect(json).toHaveStyleRule('display', 'flex');
    expect(json).toHaveStyleRule('align-items', 'center');
  });

  test('renders with Box props', () => {
    const json = renderJSON(<Flex color="tomato" />);
    expect(json).toHaveStyleRule('color', 'tomato');
  });

  test('renders with as and Box props', () => {
    const json = renderJSON(<Flex as="footer" color="tomato" />);
    expect(json.type).toBe('footer');
    expect(json).toHaveStyleRule('color', 'tomato');
  });
});
