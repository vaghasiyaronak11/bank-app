import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Transaction = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} 
      onPress={() => navigation.navigate("Tabnavigation")}>
        <Image source={require('../assets/back_arrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Transfer money to</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 80,
    paddingTop: 49,
  },
  backButton: {
    flexDirection:"row",
    position: 'absolute',
    top: 50,
    left: 44,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Transaction;