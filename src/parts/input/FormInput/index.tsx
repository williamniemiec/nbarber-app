import React from 'react';
import { View, TextInput } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FormInput = ({ placeholder, onChangeText, Icon, secure, value }: any) => (
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
