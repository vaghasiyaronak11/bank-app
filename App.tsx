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

import Tabnavigation from './src/components/TabNavigation';

import Account from './src/Grid/Account';
import Transfer from './src/Grid/Transfer';
import Withdraw from './src/Grid/Withdraw';
import MobileRecharge from './src/Grid/MobileRecharge';
import PayBill from './src/Grid/PayBill';
import CreditCard from './src/Grid/CreditCard';
import Transaction from './src/Grid/Transaction';


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

        <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
        {/* //all the grid// */}
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="MobileRecharge" component={MobileRecharge} />
        <Stack.Screen name="PayBill" component={PayBill} />
        <Stack.Screen name="CreditCard" component={CreditCard} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
