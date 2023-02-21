import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
export default ({onPress, message, messageHighlighted}: any) => {
  return (
    <TouchableHighlight style={Style.btn} underlayColor='transparent' onPress={onPress}>
      <View style={Style.btnArea}>
        <Text style={Style.btnText}>{message}</Text>
        <Text style={Style.btnTextHighlight}>{messageHighlighted}</Text>
      </View>
    </TouchableHighlight>
  );
};
