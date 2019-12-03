import React, { Component, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './HomeScreen.style';
import Animated, { Easing } from 'react-native-reanimated';

const HomeScreen: React.FC = () => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0)
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }
      ).start(() => spin())
    }
    spin();
  })

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 360]
  })
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: 200,
          height: 200,
          transform: [{ rotate: spin }]
        }}
        source={{ uri: 'https://svgsilh.com/png-512/1781540-ff5722.png' }}
      />
    </View>
  )
}

export default HomeScreen;