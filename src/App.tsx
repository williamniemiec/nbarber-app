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
