import React from 'react';
import { TouchableHighlight } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const CenteredTabButton = ({ children, onPress }: any) => (
  <TouchableHighlight 
    style={Style.tabItemCenter} 
    onPress={onPress} 
    underlayColor='#ddd'
  >
    { children }
  </TouchableHighlight>
);

export default CenteredTabButton;
