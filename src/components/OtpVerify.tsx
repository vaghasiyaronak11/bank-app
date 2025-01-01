import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Keyboard} from 'react-native';
import BackArrow from '../imgcode/BackArrow';

const OtpVerify = ({ navigation }: any) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Keyboard is open
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Keyboard is closed
      }
    );

    // Clean up the listeners on component unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Forget Password</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.welcomeSection}>
            <Text style={styles.text1}>Type a code</Text>
            <View style={styles.rowtextbutton}>
              <TextInput
                placeholder=" Enter OTP"
                placeholderTextColor="#A0AEC0"
                keyboardType="number-pad"
                maxLength={4}
                style={styles.otptext}
              />
              <TouchableOpacity style={styles.resendButton}>
                <Text style={styles.resendButtonText}>Resend</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.verifyview}>
              <Text style={styles.verifytext}>We texted you a code to verify your phone number</Text>
              <Text style={styles.numbertext}>(+84) 0398829xxx</Text>
            </View>
            <View style={styles.timeview}>
              <Text style={styles.timetext}>
                This code will expire 10 minutes after this message.If you don't get a message.
              </Text>
            </View>
            <View style={styles.cpview}>
              <TouchableOpacity
                style={styles.cpButton}
                onPress={() => navigation.navigate('ChangePass')}
              >
                <Text style={styles.cpButtonText}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {!keyboardVisible && (
        <Image source={require('../assets/wave.png')} style={styles.waveimgsize} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
    alignSelf: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  text1: {
    color: '#979797',
    textAlign: 'left',
    marginRight: 210,
    fontSize: 16,
    marginBottom: 15,
  },
  otptext: {
    height: 49,
    width: 175,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1.1,
    marginRight: 36,
    marginLeft: 15,
    borderColor: '#000',
    color: '#000',
  },
  rowtextbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resendButton: {
    backgroundColor: '#3b7cff',
    paddingVertical: 13,
    borderRadius: 10,
    padding: 18,
    width: '28%',
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft:5,
    fontWeight: 'bold',
  },
  verifyview: {
    marginTop: 15,
  },
  verifytext: {
    color: '#898989',
    fontSize: 14,
    marginLeft: 6,
  },
  numbertext: {
    color: '#3629B7',
    marginLeft: 6,
  },
  timeview: {
    marginTop: 15,
  },
  timetext: {
    fontSize: 14,
    color: '#898989',
    marginLeft: 38,
  },
  cpview: {
    marginTop: 28,
  },
  cpButton: {
    backgroundColor: '#3b7cff',
    paddingVertical: 13,
    borderRadius: 10,
    width: 330,
    marginLeft: 24,
    alignItems: 'center',
  },
  cpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  waveimgsize: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '111%',
    height: 133,
  },
});

export default OtpVerify;
