import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Message Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E9EEFF",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MessageScreen;
