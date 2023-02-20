import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';
import Style from './style';
import BarberItem from '../../components/BarberItem';
import {useNavigation} from '@react-navigation/native';
import BarberService from '../../services/barber.service';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default () => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const barberService = new BarberService();
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>([]);
  const [emptyList, setEmptyList] = useState(true);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText) {
      const res = await barberService.search(searchText);

      if (res.error) {
        Alert.alert('Error: ', res.error);
      }
      else if (res.data && res.data.length > 0) {
        setList(res.data);
      }
      else {
        setEmptyList(true);
      }
    }

    setLoading(false);
  };

  const handleBarberItem = (barberData: any) => {
    navigation.navigate('Barber', barberData);
  };

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.searchArea}>
        <TextInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#ffffff"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </View>

      <ScrollView style={Style.scroller}>
        {loading && (
          <ActivityIndicator
            style={Style.loading}
            size="large"
            color="#000000"
          />
        )}

        {emptyList && (
          <Text style={Style.warning}>Nenhum barbeiro encontrado :/</Text>
        )}

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
