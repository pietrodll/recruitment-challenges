import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Grid from '../../src/components/grid';

describe('Grid component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Grid
        onSquarePress={(i, j) => {}}
        onSquareLongPress={(i, j) => {}}
        flatGrid={[0, 2, 2, 1, 0, Infinity, Infinity, 1]}
        flatGameGrid={[0, 2, 2, 1, 0, 0, 0, 1]}
        size={[8, 8]}
      />
    );
  });
});
