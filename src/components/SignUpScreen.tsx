import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import BackArrow from '../imgcode/BackArrow';
import Wave from '../imgcode/Wave';

const SignUpScreen = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.Wave}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sign up</Text>
          </View>

          <View style={styles.container1}>
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome to us,</Text>
              <Text style={styles.subtitle}>Hello there, Create a new account</Text>
              <Image
                source={require('../assets/signup.png')}
                style={styles.icon}
              />
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#A0AEC0"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#A0AEC0"
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input1}
                  placeholder="Password"
                  placeholderTextColor="#A0AEC0"
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!isPasswordVisible)}
                  style={styles.eyeButton}
                >
                  <Image
                    source={
                      isPasswordVisible
                        ? require('../assets/open-eye.png')
                        : require('../assets/hide-eye.png')
                    }
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => setIsChecked(!isChecked)}
                >
                  {isChecked && (
                    <Image
                      source={require('../assets/tick.png')}
                      style={styles.tickIcon}
                    />
                  )}
                </TouchableOpacity>

                <Text style={styles.text1}>
                  By creating an account, you agree to our{' '}
                  <TouchableOpacity>
                    <Text style={styles.link}>Terms and Conditions</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.signInButton, !isChecked && { backgroundColor: '#cccccc' }]}
              disabled={!isChecked}
            >
              <Text style={styles.signInButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.signUpSection}>
              <Text style={styles.signUpText}>Have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signUpLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Wave />
      </View>

    </View>
  );
};

export default SignUpScreen;

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
    backgroundColor: '#F2F1F9',
    paddingTop: 10,
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
    color: '#343434',
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
    marginHorizontal: 15,
    borderColor: '#000',
    color: "#000",
},

  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#6b7280',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  checkbox: {
    padding: 0,
    margin: 0,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  tickIcon: {
    width: 18,
    height: 18,
  },
  text1: {
    marginLeft: 5,
  },
  link: {
    fontWeight: "bold",
    color: '#6366f1',
    marginLeft: 2,
  },
  signInButton: {
    backgroundColor: '#3b7cff',
    paddingVertical: 14,
    borderRadius: 10,
    padding: 18,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpSection: {
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
    fontSize: 16,
    color: '#3b7cff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1.1,
    borderColor: '#000',
    marginBottom: 12,
    height: 49,
    marginHorizontal: 15,
    paddingRight: 10,
  },
  input1: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
  eyeButton: {
    padding: 5,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  linkBold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});