import React from 'react';
import { View } from 'react-native';
import Style from './style';
import Div from '../../models/div.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SplitArea = ({ children }: Div) => (
  <View style={Style.split}>
    {children}
  </View>
);

export default SplitArea;
