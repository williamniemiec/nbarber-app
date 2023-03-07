/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './style';
import AppointmentItemProps from '../../models/appointment-item-props.model';
import SplitArea from '../../parts/SplitArea';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const AppointmentItem = ({ barber, dateTime, service }: AppointmentItemProps) => {

  const formattedDateTime = formatDateTime(dateTime);

  return (
    <View style={Style.body}>
      <View style={Style.barberInfo}>
        <Image style={Style.barberInfoAvatar} source={{uri: barber.avatar}} />
        <Text style={Style.barberInfoUserName}>
          {barber.name}
        </Text>
      </View>

      <SplitArea>
        <Text style={Style.serviceText}>
          {service.name}
        </Text>
        <Text style={Style.serviceText}>
          {service.price.toFixed(2)}
        </Text>
      </SplitArea>

      <SplitArea>
        <Text style={Style.date}>
          {formattedDateTime.date}
          </Text>
        <Text style={Style.date}>
          {formattedDateTime.time}
          </Text>
      </SplitArea>
    </View>
  );
};

export default AppointmentItem;




// ----------------------------------------------------------------------------
//         Functions
// ----------------------------------------------------------------------------
function formatDateTime(dateTime: string) {
  const dateTimeTerms = dateTime.split(' ');
  const date = new Date(dateTimeTerms[0]);
  const time = dateTimeTerms[1];
  let day: any = date.getDate();
  let month: any = date.getMonth();
  const year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  return {
    date: `${day}/${month}/${year}`,
    time: time.substring(0, 5)
  }
}
