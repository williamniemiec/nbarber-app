import React from 'react';
import { TouchableOpacity } from 'react-native';
import FavoriteIcon from '../../assets/images/svg/favorite.svg';
import FavoriteFullIcon from '../../assets/images/svg/favorite_full.svg';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const FavoriteButton = ({ handleFavorite, favorited }: any) => (
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
