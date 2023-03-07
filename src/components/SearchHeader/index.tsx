/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import SearchIcon from '../../assets/images/svg/search.svg';
import SearchHeaderProps from '../../models/search-header-props.model';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SearchHeader = ({ title, onPress }: SearchHeaderProps) => (
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
