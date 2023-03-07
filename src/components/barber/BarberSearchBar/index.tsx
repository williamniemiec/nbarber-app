/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';
import BarberSearchBarProps from '../../../models/barber-search-bar-props.model';
import MyLocationIcon from '../../../assets/images/svg/my_location.svg';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberSearchBar = ({
  value,
  placeholder,
  onChangeText, 
  onEndEditing, 
  onPressSearchButton
}: BarberSearchBarProps) => (
  <View style={Style.locationArea}>
    <TextInput 
      style={Style.locationInput} 
      placeholder={placeholder}
      placeholderTextColor='#ffffff' 
      onChangeText={onChangeText} 
      value={value} 
      onEndEditing={onEndEditing} 
    />
    <TouchableHighlight 
      style={Style.locationFinderBtn} 
      underlayColor='transparent' 
      onPress={onPressSearchButton}
    >
      <MyLocationIcon width='24' height='24' fill='#ffffff' />
    </TouchableHighlight>
  </View>
);

export default BarberSearchBar;
