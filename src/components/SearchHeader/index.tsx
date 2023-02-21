import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import SearchIcon from '../../assets/images/svg/search.svg';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SearchHeader = ({ title, onPress }: any) => (
  <View style={Style.headerArea}>
    <Text style={Style.headerTitle} numberOfLines={2}>
      { title }
    </Text>
    <TouchableHighlight 
      style={Style.searchButton} 
      underlayColor='transparent' 
      onPress={onPress}
    >
      <SearchIcon width='26' height='26' fill='#ffffff' />
    </TouchableHighlight>
  </View>
);

export default SearchHeader;
