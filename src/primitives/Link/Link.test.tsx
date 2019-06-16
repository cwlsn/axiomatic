import React from 'react';
import Link from './Link';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(<Link theme={defaultTheme} />);
    expect(json.type).toBe('a');
    expect(json).toHaveStyleRule('color', '#1181c6');
  });
});
