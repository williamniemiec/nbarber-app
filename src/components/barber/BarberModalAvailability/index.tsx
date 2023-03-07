/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import Style from './style';
import ModalItem from '../../../parts/ModalItem';
import BarberModalAvailabilityProps from '../../../models/barber-modal-availability-props.model';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const HOUR_ITEM_WIDTH = 65;


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalAvailability = ({ 
  listHours, 
  hour, 
  hourIndex,
  onSelectHour
}: BarberModalAvailabilityProps) => {
  if (!listHours) {
    return (<></>);
  }

  return (
    <ModalItem>
      <ScrollView 
        style={Style.timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentOffset={{x:HOUR_ITEM_WIDTH * hourIndex, y:0}}
      >
        {listHours.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[Style.timeItem, (item == hour) ? Style.active : null]} 
            onPress={() => onSelectHour(item, index)}
          >
            <Text style={[Style.timeItemText, (item == hour) ? Style.activeText : null]}>
              { item }
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ModalItem>
  );
}

export default BarberModalAvailability;
