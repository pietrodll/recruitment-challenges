import React from 'react';

// Styles
import styles from './square.style';
import { lightGrey, darkRed } from '../../styles/colors';
import { squareSize } from '../../styles/dimensions';

import { TouchableOpacity, Text, View } from 'react-native';
import BombIcon from '../../../assets/icons/bomb-solid.svg';
import FlagIcon from '../../../assets/icons/flag-solid.svg';

import { GameGridElement } from '../../models/GameGrid';

interface SquareProps {
  num: number;
  gameState: GameGridElement;
  size?: number;
  onPress: () => void;
  onLongPress: () => void;
}

const Square: React.FC<SquareProps> = ({
  num,
  size,
  gameState,
  onPress,
  onLongPress
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      gameState === GameGridElement.Displayed ? styles.openContainer : null,
      size ? { height: size, width: size } : null
    ]}
    onPress={onPress}
    onLongPress={onLongPress}>
    <View>
      {gameState === GameGridElement.Hidden || num === 0 ? (
        <Text />
      ) : gameState === GameGridElement.Flag ? (
        <FlagIcon
          height={(size || squareSize) - 10}
          width={(size || squareSize) - 10}
          fill={lightGrey}
        />
      ) : num === Infinity ? (
        <BombIcon
          height={(size || squareSize) - 10}
          width={(size || squareSize) - 10}
          fill={darkRed}
        />
      ) : (
        <Text style={styles.squareText}>{num}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default Square;
