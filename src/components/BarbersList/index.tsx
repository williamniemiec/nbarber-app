import React from 'react';
import { View } from 'react-native';
import BarberItem from '../../components/BarberItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarbersList = ({ list, loading, onPress }: any) => {
  if (loading) {
    return (<LoadingSpinner />);
  }

  return (
    <View style={Style.listArea}>
      {list.map((item: any, index: number) => (
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
