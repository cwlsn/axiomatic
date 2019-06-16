import React from 'react';
import Text from './Text';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(<Text textAlign="center" fontWeight="bold" />);
    expect(json.type).toBe('p');
    expect(json).toHaveStyleRule('text-align', 'center');
    expect(json).toHaveStyleRule('font-weight', 'bold');
  });
});
