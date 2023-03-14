/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber';
import exceptionHandler from '../config/exception-handler.config';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const Stack = createStackNavigator();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const MainStack = () => {

  setJSExceptionHandler(exceptionHandler, true);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName='Preload'
    >
      <Stack.Screen name='Preload' component={Preload} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='MainTab' component={MainTab} />
      <Stack.Screen name='Barber' component={Barber} />
    </Stack.Navigator>
  );
}

export default MainStack;
