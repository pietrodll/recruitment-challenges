import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../src/components/button';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button
          title="Test"
          onPress={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
