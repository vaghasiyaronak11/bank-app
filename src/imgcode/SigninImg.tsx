import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const SigninImg = () => {
    return (
        <View>
            <Image
                source={require('../assets/signin.png')}
                style={styles.icon}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    icon: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
    },
});
export default SigninImg;
