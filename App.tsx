import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './src/components/FirstScreen';
import SignInScreen from './src/components/SignInScreen';
import SignUpScreen from './src/components/SignUpScreen';
import ForgetPass from './src/components/ForgetPass';
import OtpVerify from './src/components/OtpVerify';
import ChangePass from './src/components/ChangePass';
import CpSuccess from "./src/components/CpSuccess";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="ChangePass" component={ChangePass} />
        <Stack.Screen name="CpSuccess" component={CpSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
