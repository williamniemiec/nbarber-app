import React from 'react';
import { Text, View } from 'react-native';
import AppointmentItem from '../../parts/AppointmentItem';
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
      {list.map((item: any, index: number) => (
        <AppointmentItem key={index} data={item} />
      ))}
    </View>
  );
}

export default AppointmentList;

const NoAppointmentsMessage = () => (
  <Text style={Style.warning}>
    Não há agendamentos
  </Text>
);
