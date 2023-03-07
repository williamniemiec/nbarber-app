/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import UserContextProvider from './contexts/UserContext';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const App = () => (
  <UserContextProvider>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </UserContextProvider>
);

export default App;
