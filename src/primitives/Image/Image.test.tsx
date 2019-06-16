import React from 'react';
import Image from './Image';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Image', () => {
  test('renders', () => {
    const json = renderJSON(<Image />);
    expect(json.type).toBe('img');
    expect(json).toHaveStyleRule('max-width', '100%');
  });
});
