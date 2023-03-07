/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
