import React from 'react';
import { TouchableOpacity } from 'react-native';
import Style from './style';
import TabButtonProps from '../../../models/tab-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const TabButton = ({ children, onPress }: TabButtonProps) => (
  <TouchableOpacity style={Style.tabItem} onPress={onPress}>
    { children }
  </TouchableOpacity>
);

export default TabButton;
