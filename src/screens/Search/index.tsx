/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import Style from './style';
import { useNavigation } from '@react-navigation/native';
import BarberService from '../../services/barber.service';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import SearchBar from '../../components/SearchBar';
import BarbersList from '../../components/barber/BarbersList';


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
        onTextChange={text => setSearchText(text)}
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

    if (res) {
      setList(res);
    }
  }

  setLoading(false);
}

function handleBarberItem(barberData: any, navigation: any) {
  navigation.navigate('Barber', barberData);
}
