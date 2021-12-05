import React from 'react';
import { Text, View } from 'react-native';
import styles from './game.style';

import AnimatedPopup from '../../components/animated-popup';
import Button from '../../components/button';

interface ResultPopupProps {
  win: boolean;
  lose: boolean;
  handleRestart: () => void;
}

const ResultPopup: React.FC<ResultPopupProps> = ({
  win,
  lose,
  handleRestart
}) => (
  <AnimatedPopup show={win || lose} size="big">
    <View style={styles.popupContent}>
      <Text style={styles.popupText}>{win ? 'You win :)' : 'You lose :('}</Text>
      <Button onPress={handleRestart} title="Play again" style={styles.popupButton} textStyle={styles.popupButtonText} />
    </View>
  </AnimatedPopup>
);

export default ResultPopup;
