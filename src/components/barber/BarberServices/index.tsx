/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import BarberServicesProps from '../../../models/barber-services-props.model';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberServices = ({ services, handleSchedule }: BarberServicesProps) => {
  if (!services) {
    return (<></>);
  }

  return (
    <View style={Style.serviceArea}>
      <Text style={Style.title}>Services</Text>
      {services.map((item, index) => (
        <View style={Style.serviceItem} key={index}>
          <View style={Style.serviceInfo}>
            <Text style={Style.serviceName}>{item.name}</Text>
            <Text style={Style.servicePrice}>
              $ {item.price.toFixed(2)}
            </Text>
          </View>

          <TouchableHighlight
            underlayColor="#ddd"
            style={Style.serviceChooseBtn}
            onPress={() => handleSchedule(index)}>
            <Text style={Style.serviceChooseBtnText}>Schedule</Text>
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
}

export default BarberServices;
