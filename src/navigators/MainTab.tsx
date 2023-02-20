import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Appointments' component={Appointments} />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

