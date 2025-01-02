import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import BackArrow from '../imgcode/BackArrow';
import Wave from '../imgcode/Wave';

const ChangePass = ({ navigation }: any) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('OtpVerify')}>
                        <BackArrow />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Change Password </Text>
                </View>
                <View style={styles.container1}>
                    <View style={styles.welcomeSection}>
                        <Text style={styles.inputtext}>Type your new password</Text>
                        <TextInput
                            placeholder=' Enter New Passwrd'
                            placeholderTextColor="#A0AEC0"
                            secureTextEntry={false}
                            style={styles.input} />

                        <Text style={styles.inputtext}>Confirm password</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder='Verify password'
                                placeholderTextColor="#A0AEC0"
                                secureTextEntry={!isPasswordVisible}
                                style={styles.input1}/>

                            <TouchableOpacity
                                onPress={() => setPasswordVisible(!isPasswordVisible)}
                                style={styles.eyeButton} >
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
                    </View>

                    <View>
                        <TouchableOpacity style={styles.cpButton}
                            onPress={() => navigation.navigate('CpSuccess')}
                        >
                            <Text style={styles.cpButtonText}>Change Password</Text>
                        </TouchableOpacity>
                        <View style={styles.wavestyle}>
                            <Wave />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "flex-end",
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
        alignItems: 'flex-start',
        marginTop: 30,
        marginBottom: 30,
    },
    inputtext: {
        fontSize: 15,
        marginLeft: 35,
        marginBottom: 7,
        fontWeight: 'bold',
        color: '#979797',
    },
    inputContainer:{
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
        marginRight: 45,
        marginLeft: 35,
    },
    input: {
        height: 49,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1.1,
        marginRight: 10,
        marginLeft: 35,
        borderColor: '#000',
        color: "#000",
    },
    input1:{
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
    cpButton: {
        marginTop: 20,
        backgroundColor: '#3b7cff',
        paddingVertical: 14,
        borderRadius: 10,
        padding: 18,
        marginLeft: 32,
        marginRight: 32,
        alignItems: 'center',
        width: "81%",
    },
    cpButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    wavestyle: {
        marginTop: 292,
        height: 400,
        width: 400,
    },
});

export default ChangePass;
