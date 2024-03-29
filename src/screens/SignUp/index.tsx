/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useContext } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Style from './style';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignMessageButton from '../../parts/button/FormMessageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';
import SignUpForm from '../../components/form/SignUpForm';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const authService = new AuthService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignUpScreen = () => {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      <SignUpForm 
        name={nameField}
        setName={setNameField}
        email={emailField}
        setEmail={setEmailField}
        password={passwordField}
        setPassword={setPasswordField}
        onSignUp={() => handleSignUp(
          navigation, nameField, emailField, passwordField, userDispatch
        )}
      />
      <SignMessageButton 
        message='You already have an account?' 
        messageHighlighted='Sign in' 
        onPress={() => handleLogin(navigation)} 
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleSignUp(
  navigation: any,
  nameField: any, 
  emailField: any, 
  passwordField: any, 
  userDispatch: any
) {
  if (!nameField || !emailField || !passwordField) {
    Alert.alert('Please, fill all fields.');
  }
  else {
    const user = await authService.signUp(nameField, emailField, passwordField);

    if (user) {
      handleLogin(navigation);
    }
  }
}

function handleLogin(navigation: any) {
  navigation.reset({
    routes: [{name: 'SignIn'}]
  });
}
