import React from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Style from './style';
import Stars from '../Stars';

export default ({data, onPress}: any) => {

  return (
    <TouchableOpacity style={Style.area} onPress={onPress}>
      <Image style={Style.avatar} source={{uri: data.avatar}} />
      <View style={Style.infoArea}>
        <Text style={Style.userName}>{data.name}</Text>
        
        <Stars stars={data.stars} showNumber={true} />
        
        <View style={Style.seeProfileButton}>
          <Text style={Style.seeProfileButtonText}>Ver perfil</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}