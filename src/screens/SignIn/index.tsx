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
import { UserContext } from '../../contexts/UserContext';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignMessageButton from '../../parts/button/FormMessageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth.service';
import SignInForm from '../../components/form/SignInForm';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const authService = new AuthService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SignInScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();
  const { dispatch: userDispatch } = useContext(UserContext);

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      <SignInForm 
        email={emailField}
        setEmail={setEmailField}
        password={passwordField}
        setPassword={setPasswordField}
        onSignIn={() => handleSignIn(navigation, emailField, passwordField, userDispatch)}
      />
      <SignMessageButton 
        message='Ainda não possui uma conta?' 
        messageHighlighted='Cadastre-se' 
        onPress={() => handleSignUp(navigation)} 
      />
    </SafeAreaView>
  );
};

export default SignInScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleSignUp(navigation: any) {
  navigation.reset({
    routes: [{name: 'SignUp'}]
  });
}

async function handleSignIn(
  navigation: any, 
  emailField: any, 
  passwordField: any, 
  userDispatch: any
) {
  if (!emailField || !passwordField)
    Alert.alert('Preencha todos os campos');
  else {
    const user = await authService.signIn(emailField, passwordField);

    if (user) {
      userDispatch({
        type: 'SET_AVATAR',
        payload: {
          avatar: user.avatar
        }
      });

      navigation.reset({
        routes: [{name: 'MainTab'}]
      });
    }
    else {
      Alert.alert('Email e/ou senha incorretos!');
    }
  }
}
