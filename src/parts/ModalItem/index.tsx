import React from 'react';
import { View } from 'react-native';
import Style from './style';
import Div from '../../models/div.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ModalItem = ({ children }: Div) => (
  <View style={Style.modalItem}>
    { children }
  </View>
);

export default ModalItem;
