import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Style from './style';
import { UserContext } from '../../contexts/UserContext';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignInput from '../../components/SignInput';
import SignMessageButton from '../../components/SignMessageButton';
import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth.service';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { dispatch: userDispatch } = useContext(UserContext);

  const authService = new AuthService();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmailField(text);
  };

  const handleChangePassword = (text: string) => {
    setPasswordField(text);
  };

  const handleSignUp = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }

  const handleSignIn = async () => {
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

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      
      <View style={Style.inputArea}>
        <SignInput placeholder='Email' Icon={EmailIcon} onChangeText={handleChangeEmail} value={emailField} />
        <SignInput placeholder='Senha' Icon={LockIcon} secure={true} onChangeText={handleChangePassword} value={passwordField} />
        <TouchableHighlight underlayColor='#ddd' style={Style.customButton} onPress={handleSignIn}>
          <Text style={Style.customButtonText}>LOGIN</Text>
        </TouchableHighlight>
      </View>

      <SignMessageButton message='Ainda não possui uma conta?' messageHighlighted='Cadastre-se' onPress={handleSignUp} />
    </SafeAreaView>
  );
};
