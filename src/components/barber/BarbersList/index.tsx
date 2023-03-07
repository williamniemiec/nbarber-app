/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View } from 'react-native';
import BarbersListProps from '../../../models/barbers-list-props.model';
import BarberItem from '../../../parts/barber/BarberItem';
import LoadingSpinner from '../../LoadingSpinner';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarbersList = ({ list, loading, onPress }: BarbersListProps) => {
  if (loading) {
    return (<LoadingSpinner />);
  }

  return (
    <View style={Style.listArea}>
      {list.map((item, index) => (
        <BarberItem 
          key={index} 
          barber={item} 
          onPress={() => onPress(item)} 
        />
      ))}
    </View>
  );
}

export default BarbersList;
