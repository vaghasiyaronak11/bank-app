import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BackArrow = () => {
  return (
    <Image
      source={require('../assets/back_arrow.png')}
      style={styles.icon}
    />
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
});
export default BackArrow;
