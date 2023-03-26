/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import SignInput from '../FormInput';
import LockIcon from '../../../assets/images/svg/lock.svg';
import PasswordInputProps from '../../../models/password-input-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PasswordInput = ({ password, setPassword }: PasswordInputProps) => (
  <SignInput 
    placeholder='Password' 
    Icon={LockIcon} 
    secure={true} 
    onChangeText={setPassword} 
    value={password} 
  />
);

export default PasswordInput;
