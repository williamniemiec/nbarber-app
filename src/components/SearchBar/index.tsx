import React from 'react';
import { View, TextInput } from 'react-native';
import SearchBarProps from '../../models/search-bar-props.model';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SearchBar = ({ 
  onTextChange, 
  onEndEditing, 
  value, 
  placeholder 
}: SearchBarProps) => (
  <View style={Style.searchArea}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#ffffff"
      value={value}
      onChangeText={onTextChange}
      onEndEditing={onEndEditing}
      returnKeyType="search"
      autoFocus
      selectTextOnFocus
    />
  </View>
);

export default SearchBar;
