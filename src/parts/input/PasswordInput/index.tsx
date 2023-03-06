import React from 'react';
import SignInput from '../FormInput';
import LockIcon from '../../assets/images/svg/lock.svg';
import PasswordInputProps from '../../../models/password-input-props.model';


// ----------------------------------------------------------------------------
//         Components
// ----------------------------------------------------------------------------
const PasswordInput = ({ password, setPassword }: PasswordInputProps) => (
  <SignInput 
    placeholder='Senha' 
    Icon={LockIcon} 
    secure={true} 
    onChangeText={setPassword} 
    value={password} 
  />
);

export default PasswordInput;
