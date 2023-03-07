/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Text, View } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner';
import FavoritesListProps from '../../models/favorites-list-props.model';
import BarberItem from '../../parts/barber/BarberItem';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FavoritesList = ({ list, loading, onPress }: FavoritesListProps) => {
  if (loading) {
    return (<LoadingSpinner />);
  }

  if (list.length === 0) {
    return (<NoFavoritesMessage />);
  }

  return (
    <View style={Style.listArea}>
      {list.map((item, index) => (
        <BarberItem
          key={index}
          barber={item}
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
