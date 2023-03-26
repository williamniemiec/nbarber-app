/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, View } from 'react-native';
import Style from './style';
import BarberModalServiceProps from '../../../models/barber-modal-service-props.model';
import ModalItem from '../../../parts/ModalItem';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberModalService = ({ barber, serviceIndex }: BarberModalServiceProps) => {
  if (!serviceIndex) {
    return (<></>);
  }

  return (
    <ModalItem>
      <View style={Style.serviceInfo}>
        <Text style={Style.serviceName}>
          {barber.services[serviceIndex].name}
        </Text>
        <Text style={Style.servicePrice}>
          $ {barber.services[serviceIndex].price.toFixed(2)}
        </Text>
      </View>
    </ModalItem>
  );
}

export default BarberModalService;
