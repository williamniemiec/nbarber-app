import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import Style from './style';
import AppointmentItem from '../../components/AppointmentItem';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';

export default () => {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(true);

  const handleBarberItem = (barberData) => {
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
      alert('Error: ' + req.error);
    }
    else if (req.data.length > 0) {
      setList(req.data)
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
      <ScrollView style={Style.scroller} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
        {loading && 
          <ActivityIndicator style={Style.loading} size='large' color='#000000' />
        }

        {emptyList &&
          <Text style={Style.warning}>Não há agendamentos</Text>
        }

        <View style={Style.listArea}>
          {list.map((item, index) => (
            <AppointmentItem key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
