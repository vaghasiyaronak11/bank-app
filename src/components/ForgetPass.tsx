import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackArrow from '../imgcode/BackArrow'
import Wave from '../imgcode/Wave';

const ForgetPass = ({ navigation }: any) => {
    return (

        <View style={styles.main}>

            <View style={styles.Wave}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <BackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Forget Password</Text>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.welcomeSection}>
                            <Text style={styles.pnumber}>Type your phone number </Text>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.input}
                                    placeholder=" Mobile Number"
                                    placeholderTextColor="#A0AEC0"
                                    keyboardType="phone-pad"
                                    maxLength={10}
                                />
                                <Text style={styles.para}>We texted you a code to verify your phone number</Text>
                                <TouchableOpacity style={styles.sendButton}
                                 onPress={()=>navigation.navigate('OtpVerify')} 
                                >
                                    <Text style={styles.sendButtonText}>Send</Text>
                                </TouchableOpacity>
                                <View style={styles.wavestyle}>
                                    <Wave />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default ForgetPass

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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 50,
    },
    signUpLink: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 25,
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
    pnumber: {
        marginRight: 150,
        fontSize: 15,
        color: "#979797",
        marginBottom: 25,
    },
    input: {
        height: 49,
        width:330,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        marginLeft:40,
        borderWidth: 1.1,
        marginHorizontal: 15,
        borderColor: '#000',
        color: "#000",
    },
    para: {
        marginRight: 20,
        marginLeft: 40,
        fontSize: 15,
        color:"#343434",
        marginBottom: 5,
    },
    form: {
        marginBottom: 2,
    },
    sendButton: {
        backgroundColor: '#3b7cff',
        paddingVertical: 14,
        borderRadius: 10,
        padding: 18,
        marginLeft:35,
        marginRight: 36,
        alignItems: 'center',
    },
    sendButtonText:
    {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    wavestyle: {
        flex: 1,
        marginTop: 373,
        height: "100%",
        width: 410,
    },








});