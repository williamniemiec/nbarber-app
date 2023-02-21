import React from 'react';
import { Image } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberAvatar = ({ avatar }: any) => (
  <Image
    style={Style.userAvatar}
    source={{uri: avatar}}
    resizeMode="cover"
  />
);

export default BarberAvatar;
