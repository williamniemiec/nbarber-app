import React from 'react';
import { Text } from 'react-native';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberName = ({ name }: any) => (
  <Text style={Style.userInfoName}>
    {name}
  </Text>
);

export default BarberName;
