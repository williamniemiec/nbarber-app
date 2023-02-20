import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import Style from './style';
import BarberItem from '../../components/BarberItem';
import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';

export default () => {

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(true);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText) {
      const res = await Api.search(searchText);

      if (res.error)
        alert('Error: ', res.error);
      else if (res.data.length > 0)
        setList(res.data);
      else
        setEmptyList(true);
    }

    setLoading(false);
  };

  const handleBarberItem = (barberData) => {
    navigation.navigate('Barber', barberData);
  }

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.searchArea}>
        <TextInput 
          style={Style.searchInput} 
          placeholder='Digite o nome do barbeiro'
          placeholderTextColor='#ffffff'
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onEndEditing={searchBarbers}
          returnKeyType='search'
          autoFocus
          selectTextOnFocus
        />
      </View>

      <ScrollView style={Style.scroller}>
        {loading && 
          <ActivityIndicator style={Style.loading} size='large' color='#000000' />
        }

        {emptyList &&
          <Text style={Style.warning}>Nenhum barbeiro encontrado :/</Text>
        }

        <View style={Style.listArea}>
          {list.map((item, index) => (
            <BarberItem key={index} data={item} onPress={() => handleBarberItem(item)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
