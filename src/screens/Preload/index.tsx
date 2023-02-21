import React, { useEffect, useContext } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import BarberLogo from '../../assets/images/svg/barber.svg';
import Style from './style';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { dispatch: userDispatch } = useContext(UserContext);
  const authService = new AuthService();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token !== null) {
      let json = await authService.refreshToken(token);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type:'SET_AVATAR',
          payload:{
            avatar: json.data.avatar
          }
        });

        navigation.reset({
          routes: [{name:'MainTab'}]
        });
      }
      else {
        navigation.navigate('SignIn');
      }
    }
    else {
      // redireciona pro login
      navigation.navigate('SignIn');
    }
  };
  
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      <ActivityIndicator style={Style.activityIndicator} color='#ffffff' size='large' />
    </SafeAreaView>
  );
};
