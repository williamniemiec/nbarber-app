import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default ({placeholder, onChangeText, Icon, secure, value}: any) => {
  return (
      <View style={Style.inputArea}>
        <Icon width='24' height='24' fill='#268596' />
        <TextInput 
          style={Style.input}
          placeholder={placeholder} 
          onChangeText={onChangeText}
          secureTextEntry={secure} 
          value={value}
        />
      </View>
  );
};
