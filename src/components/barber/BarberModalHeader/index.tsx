import React from 'react';
import { Image, Text, View } from 'react-native';
import Style from './style';
import ModalItem from '../../../parts/ModalItem';
import BarberProps from '../../../models/barber-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalHeader = ({ barber }: BarberProps) => (
  <ModalItem>
    <View style={Style.userInfo}>
      <Image style={Style.userAvatar} source={{uri: barber.avatar}} />
      <Text style={Style.userName}>
        { barber.name }
      </Text>
    </View>
  </ModalItem>
);

export default BarberModalHeader;
