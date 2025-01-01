import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import BackArrow from '../imgcode/BackArrow';
import Wave from '../imgcode/Wave';

const SignInScreen = ({ navigation }: any) => {
  return (
    <View style={styles.main}>
      <View style={styles.Wave}>
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sign in</Text>
          </View>

          <View style={styles.container1}>
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.subtitle}>Hello there, sign in to continue</Text>
              <Image
                source={require('../assets/signin.png')}
                style={styles.icon}
              />
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder=" Name"
                placeholderTextColor="#A0AEC0" 
              />
              <TextInput
                style={styles.input}
                placeholder=" Password"
                secureTextEntry
                placeholderTextColor="#A0AEC0"
              />
              <TouchableOpacity style={styles.forgotPassword}
              onPress={()=>navigation.navigate('ForgetPass')} >
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.signUpSection}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Wave /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  container1: {
    flex: 1,
    backgroundColor: '#F2F1F9',  //color if required//
    paddingTop: 30,
    paddingHorizontal: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
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
  subtitle: {
    fontSize: 16,
    color: '#6C6C6C',
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  form: {
    marginBottom: 25,
  },
  input: {
    height: 49,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1.1,
    marginRight: 15,
    marginLeft: 15,
    borderColor: '#000',
    color:"#000",
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 15,
    marginRight: 15,
  },
  signInButton: {
    backgroundColor: '#3b7cff',
    paddingVertical: 14,
    borderRadius: 10,
    padding: 18,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpSection: {
    marginTop: 7,
    marginBottom:72,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    marginTop: 10,
    color: '#4A4A4A',
  },
  signUpLink: {
    marginTop: 10,
    color: '#007bff',
    fontWeight:"bold",
  },

});

export default SignInScreen;
