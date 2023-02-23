import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Style from './style';


const FormButton = ({ onPress, title }: any) => (
  <TouchableHighlight 
    underlayColor='#ddd' 
    style={Style.customButton} 
    onPress={onPress}
  >
    <Text style={Style.customButtonText}>
      { title }
    </Text>
  </TouchableHighlight>
);

export default FormButton;
