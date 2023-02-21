import React from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';
import MyLocationIcon from '../../assets/images/svg/my_location.svg';
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
}: any) => (
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
