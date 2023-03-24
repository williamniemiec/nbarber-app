/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
  try {
    await authService.signOut();
  }
  finally {
    await AsyncStorage.removeItem('token');

    navigation.reset({
      routes:[{name: 'SignIn'}]
    });
  }
};
