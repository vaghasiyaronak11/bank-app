import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BackArrow from '../imgcode/BackArrow';
import Wave from '../imgcode/Wave';

const CpSuccess = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <View style={styles.Wave}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Success</Text>
          </View>
          <View style={styles.container1}>
            <View style={styles.welcomeSection}>
              <Image
                source={require('../assets/success.png')}
                style={styles.icon}
              />
              <View>
                <Text style={styles.cpsuccess}>Change password successfully!</Text>
                <View>
                  <Text style={styles.cpsuccess2}>You have successfully change password.
                    Please use the new password when Sign in.</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.okbutton}
                  onPress={() => navigation.navigate('SignIn')} >
                  <Text style={styles.okbuttontext}>Ok</Text>
                </TouchableOpacity>
              </View>
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
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  icon: {
    height: 210,
    width: 300,
    alignContent: "center",
    marginTop: 20,
    borderRadius: 3,
  },
  cpsuccess: {
    fontSize: 18,
    marginLeft: 60,
    color: "#3629B7",
    fontWeight: "semibold",
    marginTop: 25,
  },
  cpsuccess2: {
    marginTop: 20,
    fontSize: 16,
    color: "#343434",
    fontWeight: "medium",
    marginLeft: 45,
    marginRight: 10,
    padding: 3,
  },
  okbutton: {
    backgroundColor: '#3b7cff',
    paddingVertical: 14,
    borderRadius: 12,
    padding: 18,
    width: 310,
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 20,
  },
  okbuttontext: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "medium",
  },

});

export default CpSuccess;
