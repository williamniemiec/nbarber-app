/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Image } from 'react-native';
import BarberAvatarProps from '../../../models/barber-avatar-props.model';
import Style from './style';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const BarberAvatar = ({ avatar }: BarberAvatarProps) => (
  <Image
    style={Style.userAvatar}
    source={{uri: avatar}}
    resizeMode="cover"
  />
);

export default BarberAvatar;
