import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackIcon from '../../assets/images/svg/back.svg';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BackButton = ({ navigation }: any) => (
  <TouchableOpacity
    style={Style.backBtn}
    onPress={() => navigation.goBack()}
  >
    <BackIcon width="44" height="44" fill="#ffffff" />
  </TouchableOpacity>
);

export default BackButton;
