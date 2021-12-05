import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './game.style';

import GridComponent from '../../components/grid';
import Button from '../../components/button';

import useGame from './useGame';
import ResultPopup from './result-popup';

interface GameProps {
  navigation: NavigationStackProp<{ size: [number, number], nBombs:number }>
}

const Game: React.FC<GameProps> = ({ navigation }) => {
  const {
    flatGameGrid,
    flatGrid,
    handleSquareLongPress,
    handleSquarePress,
    lose,
    win,
    handleRestart,
    toDiscover
  } = useGame(navigation.getParam('size'), navigation.getParam('nBombs'));
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{toDiscover} squares left!</Text>
        </View>
        <GridComponent
          size={navigation.getParam('size')}
          flatGameGrid={flatGameGrid}
          flatGrid={flatGrid}
          onSquarePress={handleSquarePress}
          onSquareLongPress={handleSquareLongPress}
          style={styles.grid}
        />
        <Button
          title="Back to menu"
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
          textStyle={styles.backButtonText}
        />
      </View>
      <ResultPopup win={win} lose={lose} handleRestart={handleRestart} />
    </View>
  );
};

export default Game;
