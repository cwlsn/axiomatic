import React from 'react';
import Card from './Card';
import { renderJSON } from '../../utils/tests';
import 'jest-styled-components';

describe('Card', () => {
  test('renders', () => {
    const json = renderJSON(
      <Card p={3} bg="tomato" borderRadius={8} boxShadow="0 0 48px tomato" />
    );
    expect(json.type).toBe('div');
    expect(json).toHaveStyleRule('padding', '16px');
    expect(json).toHaveStyleRule('background-color', 'tomato');
    expect(json).toHaveStyleRule('border-radius', '8px');
    expect(json).toHaveStyleRule('box-shadow', '0 0 48px tomato');
  });
});
