import React, { useState, useContext } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Style from './style';
import { UserContext } from '../../contexts/UserContext';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignMessageButton from '../../components/SignMessageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth.service';
import SignInForm from '../../components/SignInForm';


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
        emailField={emailField}
        setEmailField={setEmailField}
        passwordField={passwordField}
        setPasswordField={setPasswordField}
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
    let json = await authService.signIn(emailField, passwordField);

    if (json.token) {
      await AsyncStorage.setItem('token', json.token);
      
      userDispatch({
        type: 'SET_AVATAR',
        payload: {
          avatar: json.data.avatar
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
