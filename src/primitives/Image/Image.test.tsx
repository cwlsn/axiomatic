import React from 'react';
import Image from './Image';
import { renderJSON } from '../../utils/tests';
import defaultTheme from '../../themes/default';
import 'jest-styled-components';

describe('Image', () => {
  test('renders', () => {
    const json = renderJSON(<Image theme={defaultTheme} />);
    expect(json.type).toBe('img');
    expect(json).toHaveStyleRule('max-width', '100%');
  });

  test('alt works when provided', () => {
    const json = renderJSON(
      <Image src="cats" alt="dogs" theme={defaultTheme} />
    );
    expect(json.props.src).toBe('cats');
    expect(json.props.alt).toBe('dogs');
  });
});
