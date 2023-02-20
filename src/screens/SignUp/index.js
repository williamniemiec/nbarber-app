import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './style';
import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import SignMessageButton from '../../components/SignMessageButton';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Api from '../../Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleChangeName = (text) => {
    setNameField(text);
  };

  const handleChangeEmail = (text) => {
    setEmailField(text);
  };

  const handleChangePassword = (text) => {
    setPasswordField(text);
  };

  const handleSignUp = async () => {
    if (!nameField || !emailField || !passwordField)
      alert('Preencha todos os campos');
    else {
      let json = await Api.signUp(nameField, emailField, passwordField);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type:'SET_AVATAR',
          payload:{
            avatar: json.data.avatar
          }
        });
      }
      else {
        alert('Erro: ' + json.error);
      }
    }
  }

  const handleLogin = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      
      <View style={Style.inputArea}>
        <SignInput placeholder='Nome' Icon={PersonIcon} onChangeText={handleChangeName} value={nameField} />
        <SignInput placeholder='Email' Icon={EmailIcon} onChangeText={handleChangeEmail} value={emailField} />
        <SignInput placeholder='Senha' Icon={LockIcon} secure={true} onChangeText={handleChangePassword} value={passwordField} />
        <TouchableHighlight underlayColor='#ddd' style={Style.customButton} onPress={handleSignUp}>
          <Text style={Style.customButtonText}>CADASTRAR</Text>
        </TouchableHighlight>
      </View>

      <SignMessageButton message='Já possui uma conta?' messageHighlighted='Login' onPress={handleLogin} />
    </SafeAreaView>
  );
};
