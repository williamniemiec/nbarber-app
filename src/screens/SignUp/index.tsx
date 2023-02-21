import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Style from './style';
import BarberLogo from '../../assets/images/svg/barber.svg';
import SignInput from '../../components/SignInput';
import SignMessageButton from '../../components/SignMessageButton';
import PersonIcon from '../../assets/images/svg/person.svg';
import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const authService = new AuthService();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleChangeName = (text: string) => {
    setNameField(text);
  };

  const handleChangeEmail = (text: string) => {
    setEmailField(text);
  };

  const handleChangePassword = (text: string) => {
    setPasswordField(text);
  };

  const handleSignUp = async () => {
    if (!nameField || !emailField || !passwordField)
    Alert.alert('Preencha todos os campos');
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
      }
      else {
        Alert.alert('Erro: ' + json.error);
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
