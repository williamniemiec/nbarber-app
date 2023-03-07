/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import FavoriteIcon from '../../../assets/images/svg/favorite.svg';
import FavoriteFullIcon from '../../../assets/images/svg/favorite_full.svg';
import Style from './style';
import FavoriteButtonProps from '../../../models/favorite-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FavoriteButton = ({ handleFavorite, favorited }: FavoriteButtonProps) => (
  <TouchableOpacity
    style={Style.userFavButton}
    onPress={handleFavorite}>
    {favorited ? (
      <FavoriteFullIcon width="24" height="24" fill="#ff0000" />
    ) : (
      <FavoriteIcon width="24" height="24" fill="#ff0000" />
    )}
  </TouchableOpacity>
);

export default FavoriteButton;
