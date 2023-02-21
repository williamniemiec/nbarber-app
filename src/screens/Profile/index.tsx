import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth.service';
import { useNavigation } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  const authService = new AuthService();

  const handleLogout = async () => {
    await authService.signOut();
    await AsyncStorage.removeItem('token');

    navigation.reset({
      routes:[{name: 'SignIn'}]
    });
  };

  return (
    <SafeAreaView style={Style.container}>
      <Text>Profile</Text>
      <TouchableHighlight style={Style.logoutButton} onPress={handleLogout} underlayColor='#eee'>
        <Text>Logout</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
