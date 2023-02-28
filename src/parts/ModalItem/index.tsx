import React from 'react';
import { View } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ModalItem = ({ children }: any) => (
  <View style={Style.modalItem}>
    { children }
  </View>
);

export default ModalItem;
