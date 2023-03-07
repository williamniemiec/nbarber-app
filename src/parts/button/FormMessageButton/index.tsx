/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Style from './style';
import FormMessageButtonProps from '../../../models/form-message-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FormMessageButton = ({ onPress, message, messageHighlighted }: FormMessageButtonProps) => (
  <TouchableHighlight style={Style.btn} underlayColor='transparent' onPress={onPress}>
    <View style={Style.btnArea}>
      <Text style={Style.btnText}>{message}</Text>
      <Text style={Style.btnTextHighlight}>{messageHighlighted}</Text>
    </View>
  </TouchableHighlight>
);

export default FormMessageButton;
