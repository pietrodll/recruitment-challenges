import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './help.style';

import { ScrollView, View, Text } from 'react-native';
import Button from '../../components/button';

interface HelpProps {
  navigation: NavigationStackProp;
}

const Help: React.FC<HelpProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MineSweeper tutorial</Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
        Minesweeper is a single-player puzzle computer game.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
          The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them,
          with help from clues about the number of neighboring mines in each field.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
          To uncover a square, touch it, and it will reveal its content.
          If you touch a bomb, you lose.
          If it is not a bomb, the square displays the number of bombs neighboring it.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
          To keep track of the squares where you think there is a bomb,
          you can stay pressed on a square to put a flag on it.
        </Text>
      </View>
      <Button
          title="Back to menu"
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
          textStyle={styles.backButtonText}
        />
    </ScrollView>
  );
};

export default Help;
