/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const Stack = createStackNavigator();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const MainStack = () => (
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

export default MainStack;
