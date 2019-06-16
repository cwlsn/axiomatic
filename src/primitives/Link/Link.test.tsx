import React from 'react';
import Link from './Link';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(<Link />);
    expect(json.type).toBe('a');
    expect(json).toHaveStyleRule('color', 'primary');
  });
});
