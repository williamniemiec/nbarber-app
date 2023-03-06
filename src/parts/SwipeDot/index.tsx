import React from 'react';
import { View } from 'react-native';
import Style from './style';
import SwipeDotProps from '../../models/swipe-dot-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const SwipeDot = ({ active }: SwipeDotProps) => (
  <View style={[Style.dot, active ? Style.active : null]}></View>
);

export default SwipeDot;
