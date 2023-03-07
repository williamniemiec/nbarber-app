/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
