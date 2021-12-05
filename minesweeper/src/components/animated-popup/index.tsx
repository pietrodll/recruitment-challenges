import React, { useState, useEffect } from 'react';
import styles, { popupSize } from './animated-popup.style';

import { View, Text, Animated, Easing, Dimensions } from 'react-native';

interface AnimatedPopupProps {
  size: 'little' | 'medium' | 'big';
  show: boolean;
}

const height = Math.round(Dimensions.get('window').height);

const AnimatedPopup: React.FC<AnimatedPopupProps> = ({
  size,
  show,
  children
}) => {
  const [anim] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(1));
  const [showView, setShowView] = useState(false);
  useEffect(() => {
    if (show) {
      setShowView(true);
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(scale, {
          toValue: 1.4,
          duration: 250,
          easing: Easing.ease
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 250,
          easing: Easing.ease
        })
      ]).start();
    } else {
      Animated.timing(anim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease
      }).start(() => setShowView(false));
    }
  }, [show]);
  return showView ? (
    <>
      <Animated.View
        style={[
          styles.main,
          {
            opacity: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.6]
            })
          }
        ]}
      />
      <Animated.View
        style={[
          styles.container,
          {
            top: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [height, height / 2 - popupSize[size].height / 2]
            }),
            transform: [{ scale }, { perspective: 1000 }]
          }
        ]}>
        <View style={[styles.popup, popupSize[size]]}>{children}</View>
      </Animated.View>
    </>
  ) : null;
};

export default AnimatedPopup;
