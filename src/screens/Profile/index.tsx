import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../../services/auth.service';
import { useNavigation } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const authService = new AuthService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ProfileScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  return (
    <SafeAreaView style={Style.container}>
      <TouchableHighlight 
        style={Style.logoutButton} 
        onPress={() => handleLogout(navigation)} 
        underlayColor='#eee'
      >
        <Text>Logout</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default ProfileScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function handleLogout(navigation: any) {
  await authService.signOut();
  await AsyncStorage.removeItem('token');

  navigation.reset({
    routes:[{name: 'SignIn'}]
  });
};
