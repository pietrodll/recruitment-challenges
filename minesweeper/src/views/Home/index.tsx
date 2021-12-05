import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './home.style';

import { View, Text } from 'react-native';
import Button from '../../components/button';

interface HomeProps {
  navigation: NavigationStackProp;
}

const gameParams = {
  easy: {
    size: [8, 8],
    nBombs: 10
  },
  medium: {
    size: [12, 8],
    nBombs: 15
  },
  hard: {
    size: [12, 8],
    nBombs: 25
  }
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MineSweeper</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subTitle}>Start playing now!</Text>
        </View>
        <Button
          title="Easy"
          onPress={() => navigation.navigate('Game', gameParams.easy)}
          style={styles.playButton}
        />
        <Button
          title="Medium"
          onPress={() => navigation.navigate('Game', gameParams.medium)}
          style={styles.playButton}
        />
        <Button
          title="Hard"
          onPress={() => navigation.navigate('Game', gameParams.hard)}
          style={styles.playButton}
        />
        <Button
          title="Need help?"
          onPress={() => navigation.navigate('Help')}
          style={styles.helpButton}
          textStyle={styles.helpText}
        />
      </View>
    </View>
  );
};

export default Home;
