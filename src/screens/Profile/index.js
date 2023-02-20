import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api';
import { useNavigation } from '@react-navigation/core';

export default () => {

  const navigation = useNavigation();

  const handleLogout = async () => {
    await Api.logout();
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
