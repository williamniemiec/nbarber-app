/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
