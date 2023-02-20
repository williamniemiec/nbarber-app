import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './style';

export default ({data}: any) => {

  const datetime = data.datetime.split(' ');
  const date = new Date(datetime[0]);
  const time = datetime[1];
  const formatedTime = time.substring(0, 5);
  let day: any = date.getDate();
  let month: any = date.getMonth();
  const year = date.getFullYear();

  if (day < 10)
    day = '0' + day;

  if (month < 10)
    month = '0' + month;

  const formatedDate = `${day}/${month}/${year}`;

  const SplitArea = ({children}: any) => (
    <View style={Style.split}>
      {children}
    </View>
  );

  return (
    <View style={Style.body}>
      <View style={Style.barberInfo}>
        <Image style={Style.barberInfoAvatar} source={{uri: data.barber.avatar}} />
        <Text style={Style.barberInfoUserName}>{data.barber.name}</Text>
      </View>

      <SplitArea>
        <Text style={Style.serviceText}>{data.service.name}</Text>
        <Text style={Style.serviceText}>{data.service.price.toFixed(2)}</Text>
      </SplitArea>

      <SplitArea>
        <Text style={Style.date}>{formatedDate}</Text>
        <Text style={Style.date}>{formatedTime}</Text>
      </SplitArea>
    </View>
  );
};