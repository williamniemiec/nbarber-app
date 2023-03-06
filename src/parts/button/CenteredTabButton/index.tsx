import React from 'react';
import { TouchableHighlight } from 'react-native';
import Style from './style';
import CenteredTabButtonProps from '../../../models/centered-tab-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CenteredTabButton = ({ children, onPress }: CenteredTabButtonProps) => (
  <TouchableHighlight 
    style={Style.tabItemCenter} 
    onPress={onPress} 
    underlayColor='#ddd'
  >
    { children }
  </TouchableHighlight>
);

export default CenteredTabButton;
