import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Style from './style';
import FormButtonProps from '../../../models/form-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FormButton = ({ onPress, title }: FormButtonProps) => (
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
