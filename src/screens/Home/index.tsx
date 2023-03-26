/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import {
  Alert, 
  Platform, 
  RefreshControl, 
  SafeAreaView, 
  ScrollView
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, request } from 'react-native-permissions';
import SearchHeader from '../../components/SearchHeader';
import BarberService from '../../services/barber.service';
import Style from './style';
import BarberSearchBar from '../../components/barber/BarberSearchBar';
import BarbersList from '../../components/barber/BarbersList';
import BarberDto from '../../dto/barber.dto';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const barberService = new BarberService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const HomeScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();
    
  const [location, setLocation] = useState<any>('');
  const [coords, setCoords] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [barberList, setBarberList] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);
  
  useEffect(() => {
    getBarbers(coords, location, setLoading, setBarberList);
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView 
        style={Style.scroller} 
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={() => handleRefresh(
              setRefreshing, 
              coords, 
              location, 
              setLoading, 
              setBarberList
            )}
          />}
      >
        <SearchHeader 
          title="Find your barber" 
          onPress={() => navigation.navigate('Search')} 
        />
        <BarberSearchBar
          value={location}
          placeholder="Where're you?"
          onChangeText={(text: string) => handleChangeLocation(
            text, 
            coords, 
            setCoords,
            location, 
            setLocation, 
            setLoading, 
            setBarberList
          )}
          onEndEditing={() => handleLocationSearch(
            coords, 
            location, 
            setCoords, 
            setLoading, 
            setBarberList
          )}
          onPressSearchButton={() => handleLocationFinder(
            coords, 
            location, 
            setCoords, 
            setLoading, 
            setLocation, 
            setBarberList
          )}
        />
        <BarbersList 
          list={barberList} 
          loading={loading} 
          onPress={(item: BarberDto) => handleBarberItem(item, navigation)} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function handleChangeLocation(
  text: string, 
  coords: any,
  setCoords: any,
  location: any,
  setLocation: any,
  setLoading: any,
  setBarberList: any
) {
  setLocation(text);
  setCoords({});
  getBarbers(coords, location, setLoading, setBarberList);
};

async function handleLocationFinder(
  coords: any,
  location: any,
  setCoords: any,
  setLoading: any,
  setLocation: any,
  setBarberList: any
) {
  setCoords(null);
  let result = await request(
    Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  );

  if (result == 'granted') {
    setLoading(true);
    setLocation('');
    setBarberList([]);

    Geolocation.getCurrentPosition((info) => {
      setCoords({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
      getBarbers(coords, location, setLoading, setBarberList);
    });
  }
};

async function getBarbers(
  coords: any,
  location: any,
  setLoading: any,
  setBarberList: any
) {
  setLoading(true);
  setBarberList([]);

  let lat = null;
  let lng = null;
  let city = null;

  if (coords) {
    lat = coords.latitude;
    lng = coords.longitude;
  }
  
  if (location) {
    city = location;
  }

  const barbers = await barberService.getBarbers(lat, lng, city);
  console.log('Barbers: ', barbers);

  if (barbers) {
    setBarberList(barbers.barbers);
  }

  setLoading(false);
}

function handleRefresh(
  setRefreshing: any,
  coords: any,
  location: any,
  setLoading: any,
  setBarberList: any
) {
  setRefreshing(false);
  getBarbers(coords, location, setLoading, setBarberList);
};

function handleLocationSearch(
  coords: any,
  location: any,
  setCoords: any,
  setLoading: any,
  setBarberList: any
) {
  setCoords({});
  getBarbers(coords, location, setLoading, setBarberList);
}

function handleBarberItem(barberData: BarberDto, navigation: any) {
  navigation.navigate('Barber', barberData);
}
