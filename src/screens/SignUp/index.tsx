import React, { useState, useContext } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Style from './style';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignMessageButton from '../../components/SignMessageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';
import SignUpForm from '../../components/SignUpForm';


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
        nameField={nameField}
        setNameField={setNameField}
        emailField={emailField}
        setEmailField={setEmailField}
        passwordField={passwordField}
        setPasswordField={setPasswordField}
        onSignUp={() => handleSignUp(
          navigation, nameField, emailField, passwordField, userDispatch
        )}
      />
      <SignMessageButton 
        message='Já possui uma conta?' 
        messageHighlighted='Login' 
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
    Alert.alert('Preencha todos os campos');
  }
  else {
    let json = await authService.signUp(nameField, emailField, passwordField);

    if (json.token) {
      await AsyncStorage.setItem('token', json.token);

      userDispatch({
        type:'SET_AVATAR',
        payload:{
          avatar: json.data.avatar
        }
      });
      handleLogin(navigation);
    }
    else {
      Alert.alert('Erro: ' + json.error);
    }
  }
}

function handleLogin(navigation: any) {
  navigation.reset({
    routes: [{name: 'SignIn'}]
  });
}
