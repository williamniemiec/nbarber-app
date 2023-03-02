import React from 'react';
import { Text, View } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner';
import BarberItem from '../../parts/barber/BarberItem';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FavoritesList = ({ list, loading, onPress }: any) => {
  if (loading) {
    return (<LoadingSpinner />);
  }

  if (list.length === 0) {
    return (<NoFavoritesMessage />);
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

export default FavoritesList;

const NoFavoritesMessage = () => (
  <Text style={Style.warning}>
    Nenhum favorito
  </Text>
);
