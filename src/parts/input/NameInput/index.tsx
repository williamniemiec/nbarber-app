/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import SignInput from '../FormInput';
import EmailIcon from '../../assets/images/svg/email.svg';
import NameInputProps from '../../../models/name-input-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const NameInput = ({ name, setName }: NameInputProps) => (
  <SignInput 
    placeholder='Nome' 
    Icon={EmailIcon} 
    onChangeText={setName} 
    value={name} 
  />
);

export default NameInput;
