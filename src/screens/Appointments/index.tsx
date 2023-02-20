import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Alert
} from 'react-native';
import Style from './style';
import AppointmentItem from '../../components/AppointmentItem';
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

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
    getAppointments();
  };

  const getAppointments = async () => {
    setLoading(true);
    setEmptyList(false);

    const req = await Api.getAppointments();

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
    getAppointments();
  }, []);

  return (
    <SafeAreaView style={Style.container}>
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

        {emptyList && <Text style={Style.warning}>Não há agendamentos</Text>}

        <View style={Style.listArea}>
          {list.map((item: any, index: number) => (
            <AppointmentItem key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
