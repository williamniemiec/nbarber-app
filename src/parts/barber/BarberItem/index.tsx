/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import BarberItemProps from '../../../models/barber-item-props.model';
import Stars from '../../Stars';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberItem = ({ barber, onPress }: BarberItemProps) => (

  <TouchableOpacity style={Style.area} onPress={onPress}>
    <Image style={Style.avatar} source={{uri: barber.avatar}} />
    <View style={Style.infoArea}>
      <Text style={Style.userName}>{barber.name}</Text>
      <Stars stars={barber.stars} showNumber={true} />
      <View style={Style.seeProfileButton}>
        <Text style={Style.seeProfileButtonText}>Ver perfil</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default BarberItem;
