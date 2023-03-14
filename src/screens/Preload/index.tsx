/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BarberLogo from '../../assets/images/svg/barber.svg';
import LoadingSpinner from '../../components/LoadingSpinner';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const authService = new AuthService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PreloadScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();
  
  useEffect(() => {
    checkToken(navigation);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <BarberLogo width='100%' height='160' />
      <LoadingSpinner />
    </SafeAreaView>
  );
};

export default PreloadScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function checkToken(navigation: any) {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    try {
      await authService.refreshToken();
      navigation.reset({
        routes: [{name:'MainTab'}]
      });
    }
    catch (err) {
      navigation.navigate('SignIn');
    }
  }
  else {
    navigation.navigate('SignIn');
  }
};
