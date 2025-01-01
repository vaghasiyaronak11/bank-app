import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ArrowIcon = () => {
  return (
    <Image
      source={require('../assets/arrow_right.png')}
      style={styles.icon}
    />
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
export default ArrowIcon;
