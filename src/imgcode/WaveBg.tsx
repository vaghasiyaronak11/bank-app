import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const WaveBg = () => {
    return (
        <View>
            <Image
                source={require('../assets/wave.png')}
                style={styles.icon}  
            />
        </View>
    );
};
const styles = StyleSheet.create({
    icon: {
        backgroundColor:'#3333ba',
        position: 'relative',
    width: '100%',
    height: 135,
    },
});
export default WaveBg;
