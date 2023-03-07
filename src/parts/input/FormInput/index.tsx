/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View, TextInput } from 'react-native';
import Style from './style';
import FormInputProps from '../../../models/form-input-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FormInput = ({ 
  placeholder, 
  onChangeText, 
  Icon, 
  secure, 
  value 
}: FormInputProps) => (
  <View style={Style.inputArea}>
    <Icon width="24" height="24" fill="#268596" />
    <TextInput
      style={Style.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secure}
      value={value}
    />
  </View>
);

export default FormInput;
