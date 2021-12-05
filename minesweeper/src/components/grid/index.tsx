import React from 'react';
import styles from './grid.style';

import { View, Text, StyleProp, ViewStyle } from 'react-native';

import Square from '../square';

import { GameGridElement } from '../../models/GameGrid';

interface GridProps {
  flatGrid: number[];
  flatGameGrid: GameGridElement[];
  size: [number, number];
  onSquarePress: (i: number, j: number) => void;
  onSquareLongPress: (i: number, j: number) => void;
  style?: StyleProp<ViewStyle>
}

const Grid: React.FC<GridProps> = ({
  flatGrid,
  flatGameGrid,
  size: [n, m],
  onSquarePress,
  onSquareLongPress,
  style
}) => (
  <View style={[styles.container, style]}>
    {[...Array(n).keys()].map(i => (
      <View style={styles.line} key={i}>
        {[...Array(m).keys()].map(j => (
          <Square
            key={j}
            num={flatGrid[i * m + j]}
            gameState={flatGameGrid[i * m + j]}
            onPress={() => onSquarePress(i, j)}
            onLongPress={() => onSquareLongPress(i, j)}
          />
        ))}
      </View>
    ))}
  </View>
);

export default Grid;
