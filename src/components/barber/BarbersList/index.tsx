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
          data={item} 
          onPress={() => onPress(item)} 
        />
      ))}
    </View>
  );
}

export default BarbersList;
