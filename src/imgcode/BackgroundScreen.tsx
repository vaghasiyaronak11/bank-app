import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackArrow from '../imgcode/BackArrow';
import Wave from '../imgcode/Wave';

const BackgroundScreen = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <View style={styles.Wave}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>as you wish </Text>
          </View>
          <View style={styles.container1}>
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>


          </View>
        </View>
      </View>
      <Wave />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Wave: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    paddingTop: 60,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 50,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  container1: {
    flex: 1,
    backgroundColor: '#F2F1F9',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3629B7',
  },
});

export default BackgroundScreen;
