import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import Style from './style';
import { useNavigation } from '@react-navigation/native';
import BarberService from '../../services/barber.service';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import BarbersList from '../../components/BarbersList';
import SearchBar from '../../components/SearchBar';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const barberService = new BarberService();


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SearchScreen = () => {

  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>([]);

  return (
    <SafeAreaView style={Style.container}>
      <SearchBar
        value={searchText}
        placeholder='Digite o nome do barbeiro'
        onChangeText={(text: string) => setSearchText(text)}
        onEndEditing={() => searchBarbers(setLoading, setList, searchText)}
      />
      <ScrollView style={Style.scroller}>
        <BarbersList 
          list={list}
          loading={loading}
          onPress={(item: any) => handleBarberItem(item, navigation)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;


// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
async function searchBarbers(setLoading: any, setList: any, searchText: string) {
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
  }

  setLoading(false);
}

function handleBarberItem(barberData: any, navigation: any) {
  navigation.navigate('Barber', barberData);
}
