import React from 'react';
import styles from './button.style';

import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void,
  title: string,
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
