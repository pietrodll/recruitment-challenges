import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Square from '../../src/components/square';
import { GameGridElement } from '../../src/models/GameGrid';

describe('Square component', () => {
  it('renders correctly when displayed', () => {
    const tree = renderer
      .create(
        <Square
          num={1}
          gameState={GameGridElement.Displayed}
          onPress={() => {}}
          onLongPress={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when displaying an icon', () => {
    const tree = renderer
      .create(
        <Square
          num={1}
          gameState={GameGridElement.Flag}
          onPress={() => {}}
          onLongPress={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when hidden', () => {
    const tree = renderer
      .create(
        <Square
          num={1}
          gameState={GameGridElement.Hidden}
          onPress={() => {}}
          onLongPress={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
