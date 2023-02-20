import React from 'react';
import { View } from 'react-native';
import Style from './style';

export default ({active}: any) => {
  return (
    <View style={[Style.dot, active ? Style.active : null]}></View>
  );
};
