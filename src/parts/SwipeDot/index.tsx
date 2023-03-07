/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
