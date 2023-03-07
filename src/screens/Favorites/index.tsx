/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import {
  Alert,
  RefreshControl, 
  SafeAreaView, 
  ScrollView, 
  Text, 
  View
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import FavoritesList from '../../components/FavoritesList';
import UserService from '../../services/user.service';
import Style from './style';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const userService = new UserService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FavoritesScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    getFavorites(setLoading, setList);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.headerArea}>
        <Text style={Style.headerTitle}>Favoritos</Text>
      </View>

      <ScrollView
        style={Style.scroller}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={() => handleRefresh(setRefreshing, setLoading, setList)} 
          />}
      >
        <FavoritesList 
          list={list} 
          loading={loading} 
          onPress={(item: any) => handleBarberItem(item, navigation)} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleBarberItem(barberData: any, navigation: any) {
  navigation.navigate('Barber', barberData);
};

function handleRefresh(setRefreshing: any, setLoading: any, setList: any) {
  setRefreshing(false);
  getFavorites(setLoading, setList);
};

async function getFavorites(setLoading: any, setList: any) {
  setLoading(true);

  const req = await userService.getFavorites();

  if (req.error) {
    Alert.alert('Error: ' + req.error);
  } 
  else if (req.data && req.data.length > 0) {
    setList(req.data);
  }

  setLoading(false);
};
