import React from 'react';
import Heading from './Heading';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Heading', () => {
  test('renders', () => {
    const json = renderJSON(<Heading level={2} theme={defaultTheme} />);
    expect(json.type).toBe('h2');
    expect(json).toHaveStyleRule('font-size', '24px');
    expect(json).toHaveStyleRule('font-weight', 'bold');
  });
});
