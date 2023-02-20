import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  ScrollView, 
  TouchableHighlight, 
  TextInput, 
  Platform, 
  ActivityIndicator,
  Alert, 
  RefreshControl 
} from 'react-native';
import Style from './style';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import BarberService from '../../services/barber.service';
import BarberItem from '../../components/BarberItem';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default () => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  const barberService = new BarberService();
  const [location, setLocation] = useState<any>('');
  const [coords, setCoords] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [barberList, setBarberList] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleChangeLocation = (text: string) => {
    setLocation(text);
    //setCoords({});
    //getBarbers();
  };

  const handleLocationFinder = async () => {
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
        getBarbers();
      });
    }
  };

  const getBarbers = async () => {
    setLoading(true);
    setBarberList([]);

    let lat = null;
    let lng = null;

    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let res = await barberService.getBarbers(lat, lng, location);
    if (res.error == '') {
      if (res.loc)
        setLocation(res.loc);

      setBarberList(res.data);
    }
    else {
      Alert.alert('Erro: ' + res.error);
    }

    setLoading(false);
  }

  const handleRefresh = () => {
    setRefreshing(false);
    getBarbers();
  };

  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  }

  const handleBarberItem = (barberData: any) => {
    navigation.navigate('Barber', barberData);
  }

  useEffect(() => {
    getBarbers();
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView 
        style={Style.scroller} 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        
        <View style={Style.headerArea}>
          <Text style={Style.headerTitle} numberOfLines={2}>Encontre o seu barbeiro favorito</Text>
          <TouchableHighlight style={Style.searchButton} underlayColor='transparent' onPress={() => navigation.navigate('Search')}>
            <SearchIcon width='26' height='26' fill='#ffffff' />
          </TouchableHighlight>
        </View>

        <View style={Style.locationArea}>
          <TextInput style={Style.locationInput} placeholder='Onde você está?' placeholderTextColor='#ffffff' onChangeText={handleChangeLocation} value={location} onEndEditing={handleLocationSearch} />
          <TouchableHighlight style={Style.locationFinderBtn} underlayColor='transparent' onPress={handleLocationFinder}>
            <MyLocationIcon width='24' height='24' fill='#ffffff' />
          </TouchableHighlight>
        </View>

        {loading && 
          <ActivityIndicator size='large' color='#ffffff' style={Style.loadingIcon} />
        }

        <View style={Style.listArea}>
          {barberList.map((item: any, index: number) => (
            <BarberItem key={index} data={item} onPress={() => handleBarberItem(item)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
