/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, View } from 'react-native';
import AppointmentItem from '../AppointmentItem';
import AppointmentListProps from '../../models/appointment-list-props.model';
import LoadingSpinner from '../LoadingSpinner';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const AppointmentList = ({ list, loading }: AppointmentListProps) => {

  if (loading) {
    return (<LoadingSpinner />);
  }

  if (list.length === 0) {
    return (<NoAppointmentsMessage />);
  }

  return (
    <View style={Style.listArea}>
      {list.map((item, index) => (
        <AppointmentItem 
          key={index} 
          barber={item.barber} 
          dateTime={item.date} 
          service={item.service} 
        />
      ))}
    </View>
  );
}

export default AppointmentList;

const NoAppointmentsMessage = () => (
  <Text style={Style.warning}>
    There're no appointments
  </Text>
);
