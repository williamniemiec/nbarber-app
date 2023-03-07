/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackIcon from '../../../assets/images/svg/back.svg';
import Style from './style';
import ArrowBackButtonProps from '../../../models/arrow-back-button-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ArrowBackButton = ({ navigation }: ArrowBackButtonProps) => (
  <TouchableOpacity
    style={Style.backBtn}
    onPress={() => navigation.goBack()}
  >
    <BackIcon width="44" height="44" fill="#ffffff" />
  </TouchableOpacity>
);

export default ArrowBackButton;
