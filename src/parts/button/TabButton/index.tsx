import React from 'react';
import { TouchableOpacity } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TabButton = ({ children, onPress }: any) => (
  <TouchableOpacity style={Style.tabItem} onPress={onPress}>
    { children }
  </TouchableOpacity>
);

export default TabButton;
