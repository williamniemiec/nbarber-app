import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Alert, 
  RefreshControl,
  ScrollView,
} from 'react-native';
import Style from './style';
import BarberItem from '../../components/BarberItem';
import {useNavigation} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState<any>([]);
  const [emptyList, setEmptyList] = useState(true);

  const handleBarberItem = (barberData: any) => {
    navigation.navigate('Barber', barberData);
  };

  const handleRefresh = () => {
    setRefreshing(false);
    getFavorites();
  };

  const getFavorites = async () => {
    setLoading(true);
    setEmptyList(false);

    const req = await Api.getFavorites();

    if (req.error) {
      Alert.alert('Error: ' + req.error);
    } 
    else if (req.data && req.data.length > 0) {
      setList(req.data);
    } 
    else {
      setEmptyList(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.headerArea}>
        <Text style={Style.headerTitle}>Favoritos</Text>
      </View>

      <ScrollView
        style={Style.scroller}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        {loading && (
          <ActivityIndicator
            style={Style.loading}
            size="large"
            color="#000000"
          />
        )}

        {emptyList && <Text style={Style.warning}>Nenhum favorito</Text>}

        <View style={Style.listArea}>
          {list.map((item: any, index: number) => (
            <BarberItem
              key={index}
              data={item}
              onPress={() => handleBarberItem(item)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
