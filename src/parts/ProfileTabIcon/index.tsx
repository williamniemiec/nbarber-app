/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Image } from 'react-native';
import Style from './style';
import AccountIcon from '../../assets/images/svg/account.svg';
import ProfileTabIconProps from '../../models/profile-tab-icon-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const ProfileTabIcon = ({ avatar, selected }: ProfileTabIconProps) => {
  if (!avatar) {
    return (
      <AccountIcon 
        height='24' 
        fill='#ffffff' 
        style={{opacity: selected ? 1 : 0.6}} 
      />
    );
  }

  return (
    <Image 
      style={[Style.avatar, {opacity: selected ? 1 : 0.6}]} 
      source={{uri: avatar}} 
    />
  );
};

export default ProfileTabIcon;
