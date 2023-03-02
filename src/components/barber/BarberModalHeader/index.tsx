import React from 'react';
import { Image, Text, View } from 'react-native';
import ModalItem from '../../parts/ModalItem';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalHeader = ({ user }: any) => (
  <ModalItem>
    <View style={Style.userInfo}>
      <Image style={Style.userAvatar} source={{uri: user.avatar}} />
      <Text style={Style.userName}>
        { user.name }
      </Text>
    </View>
  </ModalItem>
);

export default BarberModalHeader;
