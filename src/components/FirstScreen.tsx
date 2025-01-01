import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from '../imgcode/ArrowIcon';
import WaveBg from '../imgcode/WaveBg';

const FirstScreen = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <LinearGradient colors={['#00d4ff', '#649cfc', '#3333ba']} style={styles.container}>
        <Text style={styles.nametext}>SBI LIFE</Text>
        <Text style={styles.paratext}>
          Welcome to SBI life. At your service 24*7, except lunch time.
        </Text>
      </LinearGradient>
      <WaveBg />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('SignIn')}>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  nametext: {
    fontSize: 20,
    marginTop: 500,
    marginLeft: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  paratext: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 25,
    color: 'white',
    margin: 10,
  },
  nextButton: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});
